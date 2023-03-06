import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault()

    const res = await axios.post('http://localhost/Proyecto/public/api/login', {
      useremail: useremail, password: password
    }); 
      if (res.data.status === 200) {
        console.log(res.data.user);
        if(res.data.user.role === 'Customer'){
          console.log(res.data.user.username);
          navigate('/Proyecto/public/Home');
        }else{
          navigate('/Proyecto/public/supplier',{
            state:{
              u_token: res.data.token
            }
          });
        } 
      }
  }

  return (
    <Container aling="center" style={{ borderColor: '#072f4e', borderWidth: 6, borderRadius: 8, padding: 10, marginTop: 35, marginBottom: 100, backgroundColor: '#393d42', color: 'white', width: '40%' }}>
      <Form align="center" onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUseremail(e.target.value)} required/>
          <Form.Text style={{ color: 'white' }}>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
        </Form.Group>

        <Button variant="secondary" style={{ backgroundColor: "#072f4e" }} type="submit" >
          Login
        </Button><br></br><br></br>
        <Form.Text style={{ color: 'white', textDecoration: "underline" }} as={Link} to="/Proyecto/public/registration" >¿Don't have an account? Sign up here</Form.Text>
      </Form>
    </Container>
  );
}

export default Login;