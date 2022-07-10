import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function NewContact() {

    const [ name, setName ] = useState('');
    const [ date, setDate ] = useState('');
    const [ image, setImage ] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted")
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
                    <Form.Label>Name :</Form.Label>
                    <Form.Control 
                    required 
                    onChange={(e) => setName(e.target.value) }
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='date'>
                    <Form.Label>Date Of Birth :</Form.Label>
                    <Form.Control 
                    type="name" 
                    required 
                    onChange={(e) => setDate(e.target.value) }
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
                <div className='mb-3'>
                    <Button type="submit" variant="outline-dark" >Add</Button>
                </div>
            </Form>
        </div>
    </div>
  )
}
