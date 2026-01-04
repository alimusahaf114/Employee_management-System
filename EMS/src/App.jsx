import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const  [user , setUser] = useState(null)
  const  [loggedInUser , setLoggedInUser] = useState(null)
  const authData = useContext(AuthContext)
  
  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role) 
  //     }
  //   }
  // } , [authData])
  
  

  const handleLogin = (email , password)=>{
    // if(authData && authData.admin.email == email && authData.admin.password == password){
    if(email == "musahafali118@gmail.com" && password == "123"){
      // setUser({role: "admin"})
      setUser('admin')
      localStorage.setItem('loggedInUser' , JSON.stringify({role: "admin"}))
    } else if (authData ){
      const employee = authData.employees.find((e)=> e.email == email && e.password == e.password)
      if(employee){
        setUser("employee")
        setLoggedInUser(employee)      
        localStorage.setItem('loggedInUser' , JSON.stringify({role: "employee"}))
      }
    }
    else { 
      alert("Invalid credentials ")
    }
  }

  
  
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/> : ""}

      {user== "admin" ? <AdminDashboard /> : user == 'employee' ? <EmployeeDashboard data={loggedInUser}/> : null} 

    </div>
  );
};

export default App;
