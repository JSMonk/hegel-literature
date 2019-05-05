class Animal {}

class Dog extends Animal {
  woof() {}
}

class Cat extends Animal {
  meow() {}
}

const cats: Array<Cat> = [new Cat()];
const animals: Array<Animal> = cats;

animals[1] = new Dog();
