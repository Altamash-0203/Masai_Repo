function createEmployee(name, role, salary)

{
    return
     {
        introduce() 
        {
            console.log(`Hello, I am ${name}, working as a ${role}`)
        }
    }
}

const employee1 = createEmployee("Alice", "berojgar", -2000)
employee1.introduce()

const employee2 = createEmployee("Bob", "Designer", 50000)
employee2.introduce()
