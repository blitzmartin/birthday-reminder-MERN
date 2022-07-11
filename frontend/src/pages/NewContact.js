import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function NewContact() {

    const [ name, setName ] = useState('');
    const [ bday, setBday ] = useState('');
    const [ bornYear, setBornYear ] = useState('');
    const [ image, setImage ] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
      e.preventDefault();
        console.log("submitted")
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
              name: name,
              bday: bday,
              bornYear: bornYear,
              image: image,
          })
      };
      if (name !== "" && bday !== "" && bornYear !== "" && image !== "") {
          fetch("/api/contacts/addperson", requestOptions)
              .then(res => {
                  if (res.status === 200) {
                    setName(name)
                    setBday(bday)
                    setBornYear(bornYear)
                    setImage(image)
                    navigate('/', { replace: true });
                  }
                  setName("");
                  setBday("")
                  setBornYear("")
                  setImage("");
              })
      }
    }
  return (
    <div className="pink-box">
      <div className="header">
        <h1>Birthday Reminder</h1>
      </div>
      <div className="d-grid gap-2 white-box left">
        <h2>Add new contact</h2>
            <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>First and Last Name :</Form.Label>
                    <Form.Control 
                    required 
                    onChange={(e) => setName(e.target.value) }
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='bday'>
                    <Form.Label>Birthday (format DDMM) :</Form.Label>
                    <Form.Control 
                    type="name" 
                    required 
                    onChange={(e) => setBday(e.target.value) }
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='bornYear'>
                    <Form.Label>Born Year (format YYYY) :</Form.Label>
                    <Form.Control 
                    type="name" 
                    required 
                    onChange={(e) => setBornYear(e.target.value) }
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='image'>
                    <Form.Label>Picture URL :</Form.Label>
                    <Form.Control 
                    type="name" 
                    required 
                    onChange={(e) => setImage(e.target.value) }
                    />
                </Form.Group>
                <div className='d-grid gap-2'>
                    <Button type="submit" variant="outline-dark" size="lg" className='btn-pink'>Add</Button>
                </div>
            </Form>
        </div>
    </div>
  )
}
