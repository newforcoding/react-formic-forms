import React, { Component } from 'react'

function ValidationMsg(props){
    if(!props.valid){
        return(
            <div className='alert-danger' role='alert'>
            {props.message}
            </div>
        )
    }
    return null;
}

class Forms extends Component{
    state={
            username:'',usernameValid:false,
            email:'',emailValid:false,
            password:'', passwordValid:false,
            confirmPassword:'',confirmPasswordValid:false,
            formValid:false,
            errorMsg:{}
        }

validateForm = () => {
    const {usernameValid,emailValid,passwordValid,confirmPasswordValid} = this.state
    this.setState({
        formValid:usernameValid && emailValid && passwordValid && confirmPasswordValid
    })
}


validateUsername = () => {
    const {username} =this.state
    let usernameValid= true
    let errorMsg= { ...this.state.errorMsg}

    if(username.length < 6 || username.length > 15) {
        usernameValid=false
        errorMsg.username= "User name should be between 6 to 15 character"
    }
    this.setState({usernameValid,errorMsg},this.validateForm)
}

validateEmail = () => {
    const {email} =this.state
    let emailValid=true
    let errorMsg={...this.state.errorMsg}

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        emailValid=false
        errorMsg.email="Invalid Email Format"
    }
    this.setState({emailValid,errorMsg},this.validateForm)
}

validatePasswrord = () => {
    const {password} = this.state
    let passwordValid=true
    let errorMsg={...this.state.errorMsg}

    if(password.length<8){
        passwordValid=false
        errorMsg.password="Password must be in 8 characters"
    }
    this.setState({passwordValid,errorMsg},this.validateForm)
}

validateConfirmpassword = () => {
    const {confirmPassword,password} = this.state
    let confirmPasswordValid=true
    let errorMsg={...this.state.errorMsg}

    if(password !== confirmPassword){
        confirmPasswordValid=false
        errorMsg.confirmPassword="confirmPassword is not match"
    }
    this.setState({confirmPasswordValid,errorMsg},this.validateForm)
}

resetForm(){
    this.setState({
        username:'',usernameValid:false,
        email:'',emailValid:false,
        password:'', passwordValid:false,
        confirmPassword:'',confirmPasswordValid:false,
        formValid:false,
        errorMsg:{}
    })
}
    render(){
        return(
            <div>
                <h4>Standerd Form</h4>
                <form>
                  <div className='form-group'>
                    <label htmlFor='username'>Name</label>
                    <input type='text' id='name' className='form-control' 
                    value={this.state.username} 
                    onChange={(e)=> this.setState({username:e.target.value},this.validateUsername)}
                    />
                    <span><ValidationMsg valid={this.state.usernameValid}
                           message={this.state.errorMsg.username}/></span>
                  </div>
         
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' className='form-control' 
                    value={this.state.email}
                    onChange={(e)=> this.setState({email:e.target.value},this.validateEmail)}
                     />
                 <span><ValidationMsg valid={this.state.emailValid}
                       message={this.state.errorMsg.email}/></span>
                 </div>
                
                  <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' className='form-control' 
                    value={this.state.password} 
                    onChange={(e)=> this.setState({password:e.target.value},this.validatePasswrord)}
                    />
                <span><ValidationMsg valid={this.state.passwordValid}
                       message={this.state.errorMsg.password}/></span>
                 </div>
                 
                  <div className='form-group'>
                    <label htmlFor='password'>Confirm Password</label>
                    <input type='password' id='confirmPassword' className='form-control' 
                    value={this.state.confirmPassword} 
                    onChange={(e)=> this.setState({confirmPassword:e.target.value},this.validateConfirmpassword)}
                    />
                <span><ValidationMsg valid={this.state.confirmPasswordValid}
                        message={this.state.errorMsg.confirmPassword}/></span>
                  </div>
                
                  <div className='btn-group'>
                     <button className='btn btn-primary' type='submit' disabled={!this.state.formValid}>
                         Submit
                     </button>      
                     <button className='btn btn-danger' onClick={this.resetForm= this.resetForm.bind(this)}>
                         Reset
                     </button>      
                  </div>
               </form>
            
            </div>
        )
    }
}

export default Forms