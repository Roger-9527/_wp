class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}
class Dog extends Animal {
  speak() {
    return "Woof! I am capybara";
  }
}
