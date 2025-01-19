import {Button,Form} from 'react-bootstrap';
import { useFireBase } from '../context/Firebase';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
   const [email, setemail] = useState("")
   const [password, setpassword] = useState("")
   const FireBase=useFireBase();
   const HandleSubmit=async (e)=>{
    e.preventDefault();
    const result= await FireBase.SignInWithEmailAndPassword(email,password)
    console.log('Login Sucessfull',result);
   }
   const Navigate=useNavigate();
   useEffect(() => {
     if(FireBase.ISLoggedIn) {
        Navigate("/")
     }
   },[FireBase,Navigate])
   console.log(FireBase.ISLoggedIn)
    return (
    <>
    <div className='container mt-5'>
    <Form onSubmit={HandleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>   
        <div className='text-center'>
        <Button onClick={FireBase.SigninWithGoogle} className='mt-5 mb-5'>Sign With Google</Button>
        </div>
    </div>
    </>
  )
}

export default Login
