class Student
{
    
    info(name,age,cgpa)
    {
        this.name = name
        this.age = age
        this.cgpa = cgpa
    }

    display()
    {
        console.log("Name :"+this.name)
        console.log("Age :"+this.age)
        console.log("CGPA :"+this.cgpa)
    }
}

let s1 = new Student
s1.info("Alpha",23,9.2)
s1.display()