class Vector {
  constructor(components) {
    this.components = components;
  }
  add(other) {
    const result = this.components.map((val, i) => val + other.components[i]);
    return new Vector(result);
  }
  sub(other) {
    const result = this.components.map((val, i) => val - other.components[i]);
    return new Vector(result);
  }
  dot(other) {
    return this.components.reduce((sum, val, i) => sum + val * other.components[i], 0);
  }
}
