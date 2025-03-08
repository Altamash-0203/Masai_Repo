function check(user)
{
    if(user.role=="admin")
    {
        if(user.active==true)
        {
            console.log("Admin Access Granted!")
        }
        else{
            console.log("Admin Access Revoked")
        }
    }

    else if(user.role=="user")
        {
            if(user.active==true)
            {
                console.log("User Access Granted!")
            }
            else{
                console.log("User Access Revoked")
            }
        }
        else{
            console.log("Access denied")
        }
     
}


check( { name: "Alice", role: "admin", active: false })
check({ name: "Bob", role: "user", active: true })