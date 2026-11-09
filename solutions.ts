const multiplyValue = (value:number, multiplier?:number) => {
    if(!multiplier){
        return value * 2;
    }
    return value * multiplier
}



const processInput = (value: string | number |boolean) => {
    if(typeof value == "string"){
        return `"${value.trim().toLocaleLowerCase()}"`;
    } 
    else if (typeof value == "number"){
        return value * 10;
    } 
    else {
        return value? `"Active"` : `"Inactive"`
    }
   
}



const formatCoordinate = (coordinate:readonly[latitude:number, longitude:number, locationName:string]) => {
    return `"Location: ${coordinate[2]} (${coordinate[0]} ${coordinate[1]})"`

}



const concatenateArrays = <T> (...arrays: T[][]): T[] => {
    return arrays.reduce((acc, current) => [...acc, ...current], [] as T[])
}




interface Course {
title:string;
students: number;
isPublished: boolean;
}

const getPopularCourses = (courses:Course[], minStudents: number):Course[] => {
    return courses.filter( (course) => course.isPublished && course.students >= minStudents);
} 




const pluckValues = <T, K extends keyof T>(items:T[], key: K  ): T[K][] => {
    return items.map(item => item[key])
    
}



class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary:number
    ) {
        this.name = name,
        this.baseSalary = baseSalary
    }

    getDetails(): string {
        return `"Employee: ${this.name}, Base Salary:${this.baseSalary}"`
    }
}

class Manager extends Employee {
    private department: string;
    
    constructor(name:string, baseSalary: number, department: string, ) {
       super(name, baseSalary)
         this.department = department
    }

     getRoleInfo() {
            return `"Manager of ${this.department}: ${this.name}"`
        }

}

const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();


const validateAgeAsync = async (age: number):Promise<string> => {
    if(age <= 18){
        throw new Error("Access Denied: Must be 18 or older")

    }
    return new Promise<string> ((resolve) => {
        setTimeout(() => {
            resolve(`"Access Granted"`)
        }, 1000)
    })

}


