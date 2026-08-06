import React from 'react'
import { useForm } from "react-hook-form"

const FormHook = () => {

   const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const RegisterDone=(data)=>{
        console.log(data);
        
    }

  return (
      <>
            <h1>Register</h1>

            <form onSubmit={handleSubmit((data) => RegisterDone(data))}>

              
                Name--<input type='text' {...register('Name' ,{required:" Name is required"} )} /> 
                {errors.Name && <p className='text-danger'>{errors.Name.message}</p>} <br />
                <br />
             
                Contact--<input type='Number' {...register('Contact')} /> <br />
                <br />

                Email--<input type='email' {...register('Email')} /> <br />
                <br />
                Password--<input type='password' {...register('Password')} /> <br />
                <br />
                Confirm Password--<input type='password' {...register('confirmPassword')} /> <br />
                <br />

                

               
                <input type="submit" />
            </form>
        </>
  )
}

export default FormHook
