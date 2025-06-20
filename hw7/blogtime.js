import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js';

const posts = [
  {
    id: 0,
    title: 'learning problem',
    body: 'Learning English isn’t easy...',
    created_at: new Date()
  },
  {
    id: 1,
    title: 'Adventure Awaits!',
    body: 'Escape the ordinary and embrace the extraordinary...',
    created_at: new Date()
  }
];

const router = new Router();

router
  .get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function list(ctx) {
  ctx.response.body = await render.list(posts);
}

async function add(ctx) {
  ctx.response.body = await render.newPost();
}

async function show(ctx) {
  const id = ctx.params.id;
  const post = posts[id];
  if (!post) ctx.throw(404, 'invalid post id');
  ctx.response.body = await render.show(post);
}

async function create(ctx) {
  const body = ctx.request.body({ type: 'form' });
  const pairs = await body.value;
  const post = {};
  for (const [key, value] of pairs) {
    post[key] = value;
  }
  post.created_at = new Date();
  post.id = posts.length;
  posts.push(post);
  ctx.response.redirect('/');
}

console.log('Server running at http://127.0.0.1:8000');
await app.listen({ port: 8000 });
