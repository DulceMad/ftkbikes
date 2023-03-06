import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Registration() {

  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    const format = new FormData();
    format.append('username', username);
    format.append('useremail', useremail);
    format.append('role', 'Customer');
    format.append('password', password);

    axios.post("http://localhost/Proyecto/public/api/register", format,
      { headers: { 'Content-Type': 'application/json' }, }
    ).then((response) => {
      console.log("response: ");
      console.log(response);
      navigate('/Proyecto/public/Login');
    }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container aling="center" style={{ borderColor: '#072f4e', borderWidth: 6, borderRadius: 8, padding: 10, marginTop: 10, marginBottom: 10, backgroundColor: '#393d42', color: 'white', width: '40%' }}>
      <h1>User Register</h1>
      <Form onSubmit={registerUser} >
        <Form.Group className="mb-3" controlId="username">
          <Form.Label> Full Name </Form.Label>
          <Form.Control placeholder="Type your full name" onChange={(e) => setUserName(e.target.value)} value={username} type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="useremail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUserEmail(e.target.value)} value={useremail} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </Form.Group>

        <Button variant="secondary" style={{ backgroundColor: "#072f4e" }} type="submit" >
          Save
        </Button>
        <Link to={"/Proyecto/public/login"}>
            <Button variant="secondary" style={{ backgroundColor: "#072f4e" }}>Cancel</Button>
        </Link>
      </Form>
    </Container>
  );
}

export default Registration;