import React, { useContext, useState } from 'react';
import './Registration.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const {user,createUserByEmail}=useContext(AuthContext)
    //console.log(user)


    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");
    const [displayPassword,setDisplayPassword]=useState(false)
    const [accept,setAccept]=useState(false)

    const handleDisplayPassword=()=>{
        setDisplayPassword(!displayPassword)
        console.log(displayPassword)
    }
    const handleAccept=()=>{{
        setAccept(!accept)
        console.log(accept)
    }}

    const updateUserData=(user,name,photo)=>{
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
        .then(result=>{
            console.log(result)
            setSuccess("Update Name and photo")
            setError("")
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
            setSuccess("")
        })
    }

    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        const confirmPassword=form.confirmPassword.value;
        console.log(name,photo,email,password,confirmPassword)

        setError("")
        setSuccess("")
        if(password.length<6){
            setError("Password should be 6 or more digit")
            setSuccess("")
            return
        }
        if(password!=confirmPassword){
            setError("Password and confirm Password not matched")
            setSuccess("")
            return;
        }

        createUserByEmail(email,password)
        .then(result=>{
            const registeredUser=result.user;
            updateUserData(registeredUser,name,photo)
            console.log(registeredUser)
            setSuccess("Successfully Registered")
            setError("")
            form.reset();
        })
        .catch(error=>{
            setError(error.message)
            setSuccess("")
        })




    }
    return (
        <Container className=''>
            <div className="loginFormContainer_">
                <Form onSubmit={handleRegister} className="loginForm">
                    <h2 className="register_title">Register Your Account</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail loginFormLabel">
                        <Form.Label className='fw-bold'>Your Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail loginFormLabel">
                        <Form.Label className='fw-bold'>Photo URL</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Enter your Photo URL" required  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail loginFormLabel">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control type={displayPassword?"text":"password"} name="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-bold'>Confirm Password</Form.Label>
                        <Form.Control type={displayPassword?"text":"password"} name="confirmPassword" placeholder="Password" required />
                    </Form.Group>
                    <p onClick={handleDisplayPassword}> {displayPassword?"Hide Password":"Show Password"} </p>

                    <Form.Group className="mb-3 ms-4 d-flex " controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccept}
                    type="checkbox"
                    name='accept'
                    label={ <span>Accept our  <Link className='link' to=''>Terms and Condition</Link> </span> }/>
                    {/* <span className='ps-3'>Accept our  <Link>terms and conditions</Link> </span> */}
                    </Form.Group>
                

                    <Button variant="secondary" className='w-100 mb-3' type="submit" disabled={!accept} >
                    Register
                    </Button>

                <div className='text-center  '>
                    <Form.Text className='text-center mt-4 toggle_'>
                        Already have an account? go to <Link className='link text-white fw-bold' to='/login'>Login</Link>
                    </Form.Text>
                </div>

                    <br />
                </Form>
                {
                    success &&
                    <small className='successResultBox'>{success}</small>
                }
                {
                    error &&
                    <small className='errorResultBox'> {error} </small>
                }
            </div>
    </Container>
    );
};

export default Registration;