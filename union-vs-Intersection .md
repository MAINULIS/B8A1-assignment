# example of combining Union (|) and Intersection (&) types in TypeScript.

## Introduction
Union types and intersection types is very useful tool in both JavaScript and TypeScript. We mostly use this both types inside a function's parameters or variables. The two types has two different use case.

## Union (|) types
We mainly use union types to flexible variable or parameter. When we want to access different types of parameters to go, we use union type (pipe symbol). Its works like logical or operator of JavaScrip.

Let say, We want a function that can take sting and number both types as parameter.

const statusCode = (status: number | string) => {
    console.log(`Status is ${status}`)
}

statusCode(404); 
statusCode("OK")

In this statusCode function can take params status as a number or string. 

## Intersection (&) types
Mainly we use intersection types to create new type by adding two or more types.It collects all the  properties in one place  from the both types that used. Its works like logical AND operator of JavaScrip.

For example, we have to interface about a developer information and marketer information.

interface Developer {
    name: string;
    salary: number;
}
interface Marketer {
    startDate: string;
    Role: string;
}
Now, if we want all properties form both interface, we can use intersection type.

type Employee = Developer & Marketer

const employee:Employee = {
    name: "Rana",
    salary: 20000,
    startDate: "2025-01-01",
    Role: "developer"

}

Here both Developer and Marketer properties must have.

## Conclusion
Union type give us flexibility to take any given one. But if we use intersection types, we have to take all the properties or params. Otherwise, we will get error.
