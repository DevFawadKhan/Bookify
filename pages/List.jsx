import {Button,Form} from 'react-bootstrap'
import { useState } from 'react'
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import { useFireBase } from '../context/Firebase'
import { app } from '../context/Firebase'
function List() {
    const firestore=getFirestore(app);
    const [Book, setBook] = useState("")
    const [ISBnum, setISBnum] = useState("")
    const [Price, setPrice] = useState("")
    const FireBase=useFireBase();
    const email=FireBase.Save_email
    const HandleSubmit= async(e)=>{
      e.preventDefault();
     const result=await addDoc(collection(firestore,'Books'),{
        Bookname:Book,
        ISBnum:ISBnum,
        Price:Price,
        email:email
     })
     console.log(result);
    }
  return (
<>
<div className='container mt-5'>
    <Form onSubmit={HandleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicBookName">
            <Form.Label>Enter Book Name</Form.Label>
            <Form.Control  value={Book} onChange={(e)=>setBook(e.target.value)} type="text" placeholder="Enter Book Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicBookISBN">
            <Form.Label>ISBN</Form.Label>
            <Form.Control value={ISBnum} onChange={(e)=>setISBnum(e.target.value)} type="text" placeholder="Enter ISBN Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicBookPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control value={Price} onChange={(e)=>setPrice(e.target.value)}   type="text" placeholder="Enter price" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
    </div>
</>
  )
}

export default List
