import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Example(){
    
    const [formValue, setformValue] = useState({
        email:'',
        password:''
    })
    
    const [email, setEmail]= useState('')
    const [name, setName]= useState('')
    const [users, setUsers]= useState([])


    const onChange = (e)=>{
        e.persist();
        setformValue({...formValue, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) =>{
        if(e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("name", formValue.email)
        axios.post("http://localhost/Proyecto/public/api/show_test",
        formData, 
        {headers:{'Content-Type': 'multipart/form-data',
        'Accept':'application/json'}}
        ).then(response => {
            if(response.status == 200){
            console.log(response.data)
            setUsers(response.data)
          }
        }).catch(error => {
          console.log(error);
        });
    }
  //productos
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email"
                        name="email" value={formValue.email} onChange={onChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" 
                        name="password" value={formValue.password} onChange={onChange}/> 
                    </Form.Group>
                  
                    {name } {email}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>

                <Col>
                {users.map((user)=> ( 
                    <Card style={{ width: '18rem' }} key={user.id}>
                    <Card.Img variant="top" src=""/>
                    <Card.Body>
                        <Card.Title>Usuario</Card.Title>
                        <Card.Text>Id:{user.id}<br></br>Email:{user.email}<br></br>Nombre:{user.name}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                ))}   
                </Col>
            </Row>
        </Container>
    );
}
export default Example