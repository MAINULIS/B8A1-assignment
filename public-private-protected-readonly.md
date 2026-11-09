# Public vs private vs Protected vs readonly

## Introduction 
Access modifiers define form where you can access a class's property  or a method. Access Modifiers allow us or restrict us to access a resource. Some modifier give permission internal access but not external access.

## Public Access Modifier
Public modifier is called default access modifier. Public modifier give us flexibility to access a resource from any where. Public resources can be modified and changed from outside class. We  use public modifier if any resource is less important and changeable.

Example:
class Person {
    public name:string = "Miraz"
}

const person = new Person();
console.log(person.name); // Miraz

In this class name property is public. That's why we can access from outside of the class.

## Private Access Modifier
Private modifier is strict. We can not access a private resource from outside. It is only accessible inside a class. Even we can not access or modify private property from the child class. So, we should use private modifier to a property than is sensitive and important

Example:

class Person {
    public name:string = "Miraz";
    private salary: number = 25000;
}

const person = new Person();
console.log(person.salary); // Property salary is private and only accessible within class Person.


## Protected Access Modifier
Protected method is not as strict as private modifier. We can not access a protected resource from other class also. But we will be able to access a protected property inside a class and its child (descendant) class component also.

Example:

class Person {
    public name:string;
    protected fatherName: string;
    constructor(
     name: string,
     fatherName: string) {
    this.name = name,
    this.fatherName = fatherName
}
}

class PersonDetails extends Person {
   constructor(name:string,fatherName: string) {
    super(name, fatherName)
    console.log(fatherName); // Protected property is accessible in child class
   }
}

const personalInfo = new PersonDetails("Shamim", "Sultan");

console.log(personalInfo.fatherName); // not accessible

## Readonly Modifier
Using this modifier we can access property form outside a class. But we can not modify the value of the property. 

Example:
class Person {
    readonly name: string = "Sagor";
}
const person = new Person();
console.log(person.name); // Sagor

person.name = "Shakib"; // Error

## Conclusion
Access Modifiers help us to control unintentional changes to our sensitive properties. 
