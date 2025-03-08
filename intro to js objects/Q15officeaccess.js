function check(user)
{
  if(user.role=="admin")
  {
    if(user.active==true)
    {
      if(user.experience>5 && user.department=="IT")
      {
        console.log("Full IT Admin Access")
      }
      else if(user.experience>5 && user.department!="IT")
      {
        console.log("Full General Admin Access")
      }
       else if(user.experience<=5)
      {
        console.log("Limited Admin Access")
      }
    }
    else
    {
      console.log("Admin Access Revoked")
    }
  }
  
  else if(user.role=="manager")
  {
    if(user.active==true)
    {
      if(user.experience>3 && user.department=="Sales")
      {
        console.log("Full Sales Manager Access")
      }
      else if(user.experience>3 && user.department!="IT")
      {
        console.log("Full Manager Access")
      }
       else if(user.experience<=3)
      {
        console.log("Limited Manager Access")
      }
    }
    else
    {
      console.log("Manager Access Revoked")
    }
  }
  
   
  else if(user.role=="user")
  {
    if(user.active==true)
    {
      if(user.department=="Support")
      {
        console.log("Priority Support Access")
      }
      else  if(department!="Support")
      {
        console.log("User Access")
      }
    }
    else
    {
      console.log("User Access Revoked")
    }
  }
  else
  {
    console.log("Invalid Role")
  }
}


check({ role: "admin", experience: 7, active: true, department: "IT" })
check( { role: "manager", experience: 4, active: true, department: "Marketing" })
check( { role: "user", experience: 2, active: true, department: "Support" })
check ({ role: "admin", experience: 3, active: false, department: "Finance" })




