const multiplyValue = (value, multiplier) => {
    if (!multiplier) {
        return value * 2;
    }
    return value * multiplier;
};
const processInput = (value) => {
    if (typeof value == "string") {
        return `"${value.trim().toLocaleLowerCase()}"`;
    }
    else if (typeof value == "number") {
        return value * 10;
    }
    else {
        return value ? `"Active"` : `"Inactive"`;
    }
};
const formatCoordinate = (coordinate) => {
    return `"Location: ${coordinate[2]} (${coordinate[0]} ${coordinate[1]})"`;
};
const concatenateArrays = (...arrays) => {
    return arrays.reduce((acc, current) => [...acc, ...current], []);
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
};
const pluckValues = (items, key) => {
    return items.map(item => item[key]);
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name,
            this.baseSalary = baseSalary;
    }
    getDetails() {
        return `"Employee: ${this.name}, Base Salary:${this.baseSalary}"`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `"Manager of ${this.department}: ${this.name}"`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();
const validateAgeAsync = async (age) => {
    if (age <= 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`"Access Granted"`);
        }, 1000);
    });
};
export {};
