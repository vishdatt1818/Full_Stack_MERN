import React from 'react'
import { useForm } from "react-hook-form"

const FormHook = () => {

   const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = watch("Password")

    const RegisterDone=(data)=>{
        console.log(data);
        
    }

  return (
      <>
            <h1>Register</h1>

            <form onSubmit={handleSubmit((data) => RegisterDone(data))}>

              
                Name--<input type='text' {...register('Name' ,{required:" Name is required"} )} /> 
                <br />
                {errors.Name && <p className='text-danger'>{errors.Name.message}</p>} 
                <br />
             
                Contact--<input type='Number' {...register('Contact' , { 
                  required: " Contact is required",
                  pattern :{
                    value : /^[0-9]{10}$/,
                    message: "Contact must be exactly 10 digits",
                  },
                  //  minLength: {value: 10,message: "Contact must be 10 digits"},
                  // maxLength: {value:10, message:"must be 10 digit"}
                   })} /> 
                  <br />
                {errors.Contact && <p className='text-danger'>{errors.Contact.message}</p>}
                <br />

                Email--<input type='email' {...register('Email',
                {
                  required: "Email is required",
                  pattern:{
                    value:/[@]/,
                     message: "Email must contain @",
                  }
                }
                )} /> <br />
                {errors.Email && <p className='text-danger'>{errors.Email.message}</p>}
                <br /> 

                Password--<input type='password' {...register('Password',{
                  required: "Password is required",
                  // minLength:{
                  //   value: 8,
                  //   message: "Password must be 8 digit"
                  // }
                  validate:{
                    hasUppercase: (value) =>
                      /[A-Z]/.test(value) || "Password must include at least one capital letter",
                    hasNumber: (value) =>
                      /[0-9]/.test(value) || "Password must include at least one number",
                    hasSpecialChar: (value) =>
                      /[@$!%*?&]/.test(value) ||
                      "Password must contain at least one special character",
                      minLength: (value) =>
                      value.length >= 8 ||
                      "Password must be at least 8 characters long",
                  }
                }
                )} 
                /> 
                <br />
                {errors.Password && <p className='text-danger'>{errors.Password.message}</p>}
                <br />
                Confirm Password--<input type='password' {...register('confirmPassword',{
                  required : "Please confirm your password",
                  validate: (value) => value === password ||  "Passwords do not match"
                }
                )} />
                 <br />
                 {errors.confirmPassword && <p className='text-danger'>{errors.confirmPassword.message}</p>}
                <br />

                Image--<input type='file' {...register('Image' ,{required:" Image is required"} )} /> 
                <br />
                {errors.Image && <p className='text-danger'>{errors.Image.message}</p>} 
                <br />

                

               
                <input type="submit" />
            </form>
        </>
  )
}

export default FormHook

