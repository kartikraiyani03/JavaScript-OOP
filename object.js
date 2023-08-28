class Animal
{
    eat()
    {
        console.log("Eating")
    }
    walk()
    {
        console.log("Walking")
    }
    Sound()
    {
        console.log("Sound")
    }
}

class Dog extends Animal
{
    eat()
    {
        console.log("Beg and Non-Veg")
    }
    walk()
    {
        console.log("Walk on 4 legs")
    }
    Sound()
    {
        console.log("Bhau Bhau")
    }
}

let a = new Animal()
let d = new Dog()
a.walk()
d.walk()