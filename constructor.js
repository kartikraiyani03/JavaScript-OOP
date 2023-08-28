class Student
{
    constructor(name,age,cgpa)
    {
        this._name = name
        this._cgpa = cgpa
        this._age = age
    }
    
    set setName(Name)
    {
        this._name = Name 
    }

    get getName()
    {
        return this._name
    }

    get getAge()
    {
        return this._age
    }

    set setAge(Age)
    {
        this.age = Age
    }

    get getcgpa()
    {
        return this._cgpa
    }

    set setcgpa(CGPA)
    {
        this._cgpa = CGPA
    }

    display()
    {
        console.log("Name : "+this._name)
        console.log("Age : "+this._age)
        console.log("CGPA : "+this._cgpa)
    }
}

let s1 = new Student("Alpha",19,9.2)
s1.setName = "Betta"
console.log(s1.getName)
// s1.display()
