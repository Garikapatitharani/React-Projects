import React, { useState } from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate=useNavigate()
  
  //declared state variables
  const [formData,SetFormData] = useState({
    name:"",
    email:"",
    number:'',
    password:"",
    cpassword:"",
  })
  
  //Error store variables
  const [formErrors,setFormErrors] = useState({})

  //storing user entered data into state variable
  const handleChange=(event)=>{
  const {name,value}=event.target;
  SetFormData(prev=>({...prev, [name]:value}));
  }
  console.log(formData.name,formData.email,formData.Password);

  //creating regular expression for validation
  const regex={
    name:/^[A-Z][a-z]{6,16}$/,
    email:/^[\w\.-]+@[\w\.-]+\.\w{2,}$/,
    number:/^\d{10}$/,
    password:/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,12}$/
  }

  //validation
  const validate=()=>{
    const errors={};
    if(!regex.name.test(formData.name))
      errors.name="Name must start with capital letter and it should be 6-16 letters"
    if(!regex.email.test(formData.email))
      errors.email="Invalid email format"
    if(!regex.number.test(formData.number))
      errors.number="It Must be 10 digits"
    if(!regex.password.test(formData.password))
      errors.password="Password must contain atleast 1 uppercase, 1 lowercase,digit, special character(8-12 characters)"
    if(formData.password!=formData.cpassword)
      errors.cpassword="Passwords are not matched"
    return errors;
  }

  //handleSubmit
  const handleSubmit=(event)=>{
    event.preventDefault();
    const errors= validate();
    setFormErrors(errors);
    if(Object.keys(errors).length===0)
      {
      console.log("Signup Successfull")
      navigate("/") // redirects to the page based on path which we provided.
      }
  }

  return (
    <div class="form-box">
      <form class="form" onSubmit={handleSubmit}>
    <span class="title">Sign up</span>
    <span class="subtitle">Create a free account with your email.</span>
    <div class="form-container">
      <input type="text" name='name' onChange={handleChange} value={formData.name} class="input" placeholder="Full Name"/>
      <p className='text-danger'>{formErrors.name}</p>
			<input type="email" name='email' onChange={handleChange} value={formData.email} class="input" placeholder="Email"/>
      <p>{formErrors.email}</p>
      <input type='number' name='number' onChange={handleChange} value={formData.number} class='input' placeholder='Number'/>
      <p>{formErrors.number}</p>
    	<input type="password" name='password' onChange={handleChange} value={formData.password} class="input" placeholder="Password"/>
      <p className='text-danger'>{formErrors.password}</p>
      <input type="password" name='cpassword' onChange={handleChange} value={formData.cpassword} class="input" placeholder="confirm Password"/>
      <p className='text-danger'>{formErrors.cpassword}</p>
    </div>
    <button>Sign up</button>
</form>
<div class="form-section">
  <p>Have an account? <a href="">Log in</a> </p>
</div>
</div>
  )
}





