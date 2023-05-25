import React, { useContext, useState } from 'react';
import './Login_.css'
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';

const Login_ = () => {

    const navigate=useNavigate();
    const location=useLocation();
    
    const targetPage=location?.state?.from?.pathname || '/';
    //console.log(targetPage)

    const {
        user,
        createUserByGoogle,
        createUserByGithub,
        loginByEmail
    }=useContext(AuthContext)

   // console.log(user)

    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");
    const [displayPassword,setDisplayPassword]=useState(false)
    const handleDisplayPassword=()=>{
        setDisplayPassword(!displayPassword)
        console.log(displayPassword)
    }


    //Sign in By Google start
    const handleGoogleSignIn=()=>{
        console.log("Google")
        createUserByGoogle()
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            setSuccess("Successfully Sign in by google")
            setError("")
            navigate(targetPage)
            
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
            setSuccess("")
        })
    }
    //Sign in By Google end


    //Sign in by Github start
    const handleGithubSignIn=()=>{
        console.log('Github')
        createUserByGithub()
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            setSuccess("Successfully Sign by Github")
            setError("")
            navigate(targetPage , {replace:true})
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
            setSuccess("")
        })
    }
    //Sign in by Github end


    //Sign in by Email
    const handleSignIn=(event)=>{
        event.preventDefault();
        const form=event.target;

        const email=form.email.value;
        const password=form.password.value;

        console.log(email, password)

        setError("")
        setSuccess("")
        loginByEmail(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            setSuccess("Successfully Login")
            setError("")
            form.reset()
            navigate(targetPage)
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
            setSuccess("")
        })
    }

    return (
        <Container className=''>
            <div className="loginFormContainer_">
                <Form onSubmit={handleSignIn} className="loginForm">
                        <h2 className="login_title">Login Your Account</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail loginFormLabel">
                            <Form.Label className='fw-bold'>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                    
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='fw-bold'>Password</Form.Label>
                            <Form.Control type={displayPassword?"text":"password"} name="password" placeholder="Password" required />
                        </Form.Group>

                        <p onClick={handleDisplayPassword}> {displayPassword?"Hide Password":"Show Password"} </p>

                        <Button variant="secondary" className='w-100 mb-3' type="submit">
                        Login
                        </Button>

                    <div className='text-center '>
                        <Form.Text className='text-center mt-4 toggle_'>
                                Don't have an account? go to <Link className=' link text-white fw-bolder ' to='/register'>Register</Link>
                        </Form.Text>
                    </div>
                        <br />
                </Form>

                <Button onClick={handleGoogleSignIn} variant="primary" className=' mb-3 mx-auto d-flex justify-content-center align-items-center g-2' type="submit">
                    <FaGoogle/> <span className='ms-3'> Sign in By Google</span>
                </Button>

                <Button onClick={handleGithubSignIn} variant="primary" className='mx-auto d-flex justify-content-center align-items-center g-2' type="submit">
                    <FaGithub/> <span className='ms-3'>Sign in By Github</span>
                </Button>

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

export default Login_;