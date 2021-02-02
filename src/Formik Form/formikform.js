import React, { Component } from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'

class Formikform extends Component {
    state={
        userName:'',
        email:'',
        password:'',
        confirmPassword:'',
        isValid:false,
   }

handleChange = (values) => {
    this.setState({
        userName: values.userName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword
    })
}

validationSchema = Yup.object().shape({
    userName:Yup.string()
    .min(6,"userName should be between 6 and 15 characaters")
    .max(15,"userName should be between 6 and 15 characaters")
    .required("User name is required"),

    email:Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

    password:Yup.string()
    .min(8,"Should be at least 8 character")
    .required("Password is required"),

    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'),null],"Password don't match")

})

    render() {
        return (
            <div>
             <h4>Formik Form with Yup</h4>
             <Formik initialValues={{userName:'', email:'', password:'', confirmPassword:'', isSubmitting:true}}
              validationSchema={this.validationSchema}
              onSubmit={(values,{setSubmitting,resetForm})=>{
                  setTimeout(()=>{
                      console.log(values)
                      this.setState({
                          userName: values.userName,
                          email:values.email,
                          password:values.password,
                          confirmPassword:values.confirmPassword
                      })
                      setSubmitting(true)
                      resetForm()
                      setSubmitting(false)
                  },400)
              }}
              >
             {({values,
                errors,
                dirty,
                touched,
                isSubmitting,
                handleChange,
                handleBlur,
                handleReset,
                handleSubmit
                })=>(
                 <form onSubmit={handleSubmit} noValidate>
                   <div className='form-group'>
                     <label htmlFor='userName'>User Name</label>
                     <input className='form-control' type='text' 
                            name='userName' onChange={handleChange}
                           value={values.userName}
                            onBlur={handleBlur} 
                    />
                      <span className='help-block text-danger'>
                        {errors.userName && touched.userName && errors.userName} 
                      </span>    
                   </div>

                    <div className='form-group'>
                     <label htmlFor='email'>Email</label>
                     <input 
                     className='form-control' type='email' 
                     name='email' onChange={handleChange}
                     value={values.email} 
                      onBlur={handleBlur}
                     />   
                      <span className='help-block text-danger'>
                        {errors.email && touched.email && errors.email} 
                      </span>    
                   </div>   

                  <div className='form-group'>
                     <label htmlFor='password'>Password</label>
                     <input 
                     className='form-control' type='password'
                     name='password' onChange={handleChange}
                     value={values.password} 
                      onBlur={handleBlur}
                  />  
                      <span className='help-block text-danger'>
                        {errors.password && touched.password && errors.password} 
                      </span>     
                   </div>   

                  <div className='form-group'>
                     <label htmlFor='confirmPassword'>Confirm Password</label>
                     <input 
                     className='form-control' type='password'
                     name='confirmPassword' onChange={handleChange}
                     value={values.confirmPassword}
                       onBlur={handleBlur}
                  />  
                      <span className='help-block text-danger'>
                        {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword} 
                      </span>     
                   </div>

                   <div className='btn-group'>
                      <button className='btn btn-primary' type='submit' disabled={isSubmitting}>
                          Submit
                      </button>
                      <button disabled={!dirty}
                              onClick={handleReset}
                              type='button'
                              className='btn btn-danger'>
                        Reset          
                      </button>
                   </div>       
                 </form>    
             )}
             </Formik>
                  
            </div>
        )
    }
}

export default Formikform