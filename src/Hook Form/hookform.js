import React from 'react'
import { useForm } from 'react-hook-form'
import {ErrorMessage} from '@hookform/error-message'
function Hookform() {
    const {register,errors,handleSubmit,getValues,formState,reset} = useForm({
        validateCriteriaMode:"all",
        mode:"onChange"
    });

    const onSubmit = (data,e) => {
        e.target.reset()
        console.log(data)
    }

    return (
        <div>
            <h4>React Hook Form</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-group'>
                  <label htmlFor='username'>User Name</label>
                  <input className='form-control' name='userName' type='text'
                   ref={register({
                       required:"UserName is required",
                       maxLength:{
                           value:15,
                           message:"Character should be between 6 and 15"
                       },
                       minLength:{
                           value:6,
                           message:"Character should be between 6 and 15"
                       }    
                    })}
                  />
                  <ErrorMessage errors={errors} name='userName'>
                       {({ messages }) => 
                         messages &&  Object.entries(messages).map(([type,message])=>(
                             <p className='help-block text-danger' key={type}>{message}</p>
                         )) 
                        }
                  </ErrorMessage>    
             </div>

              <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input className='form-control' name='email' type='email'
                   ref={register({
                       required:"Email is required",
                       pattern:{
                           value:/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-z]{2,4}$/i,
                           message:"Email is invalid"
                       }
                   })}
                  />
                  
                  <ErrorMessage errors={errors} name='email'>
                       {({ messages }) => 
                         messages &&  Object.entries(messages).map(([type,message])=>(
                             <p className='help-block text-danger' key={type}>{message}</p>
                         )) 
                        }
                  </ErrorMessage>    
             </div>
             
             <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input className='form-control' name='password' type='password'
                  ref={register({
                      required:"Password is Required",
                      minLength:{
                          value:8,
                          message:"Password match have 8 character"
                      }
                  })}
                  />
                  
                  <ErrorMessage errors={errors} name='password'>
                       {({ messages }) => 
                         messages &&  Object.entries(messages).map(([type,message])=>(
                             <p className='help-block text-danger' key={type}>{message}</p>
                         )) 
                        }
                  </ErrorMessage>    
             </div>
             
             <div className='form-group'>
                  <label htmlFor='confirmPassword'>Confirm Password</label>
                  <input className='form-control' name='confirmPassword' type='password'
                   ref={register({
                       required:"Confirm Password is required",
                       validate:value => {
                           if(value === getValues()["password"]){
                               return true
                           }
                           else{
                               return "Confirm Password don't match"
                           }
                       }
                   })}
                  />
                  
                  <ErrorMessage errors={errors} name='confirmPassword'>
                       {({ messages }) => 
                         messages &&  Object.entries(messages).map(([type,message])=>(
                             <p className='help-block text-danger' key={type}>{message}</p>
                         )) 
                        }
                  </ErrorMessage>    
             </div>
             
             <div className='btn-group'>
             <button className='btn btn-primary' type='submit' disable={!formState.isValid}>Submit</button>
             <button className='btn btn-danger' type='button' onClick={()=> reset()}>Reset</button>
             </div>
            
            </form>
        </div>
    )
}


export default Hookform