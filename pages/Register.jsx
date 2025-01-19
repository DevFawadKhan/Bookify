import {Button,Form} from 'react-bootstrap';
import { useFireBase } from '../context/Firebase';
import { useState } from 'react';
function Register() {
   const [email, setemail] = useState("")
   const [password, setpassword] = useState("")
   const FireBase=useFireBase();
   const HandleSubmit=async (e)=>{
    e.preventDefault();
    const result= await FireBase.SignUpWithEmailAndPassword(email,password)
    console.log('Signup Sucessfull',result);
   }
    return (
    <>
    <div className='container mt-5'>
    <Form onSubmit={HandleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Well never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>   
    </div>
    </>
  )
}

export default Register
