import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function InsertSupplier() {

  //SUPPLIER
  const [suppliername, setSupplierName] = useState('');
  const [phone, setPhone] = useState('');
  const [supplieremail, setSupplierEmail] = useState('');
  
  const navigate = useNavigate();

  const storeSupplier = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost/Proyecto/public/api/suppliers_store', {
      suppliername: suppliername, phone:phone,supplieremail:supplieremail});
      
      if(res.data.status===200){
        swal({
          title: "registered product",
          text: "The product has been registered",
          icon: "success",
          timer: "3000"    
        })
        navigate('/Proyecto/public/Supplier');
      }else{
        swal({
          title: "Validation Error",
          text: "Verify data.",
          icon: "warning",
          timer: "3000"   
        })
      }
      
    
  }

  return (
    <Container aling="center" style={{ borderColor: '#072f4e', borderWidth: 6, borderRadius: 8, padding: 10, marginTop: 10, marginBottom: 10, backgroundColor: '#393d42', color: 'white', width: '50%' }}>
      <h1>Insert Supplier</h1>
      <Form onSubmit={storeSupplier}>
        <Form.Group className="mb-3" controlId="suppliername">
          <Form.Label> Supplier Name </Form.Label>
          <Form.Control value={suppliername} onChange={(e) => setSupplierName(e.target.value)} placeholder="Type supplier name" type="text" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} type="number" min="1" placeholder="Phone" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="supplieremail">
          <Form.Label>Supplier Email</Form.Label>
          <Form.Control value={supplieremail} onChange={(e) => setSupplierEmail(e.target.value)} type="email" placeholder="Type supplier email" required/>
        </Form.Group>
        <Button variant="secondary" style={{ backgroundColor: "#072f4e" }} type="submit">
          Save
        </Button>
        <Link to={"/Proyecto/public/supplier"}>
            <Button variant="secondary" style={{ backgroundColor: "#072f4e" }}>Cancel</Button>
        </Link>
      </Form>
    </Container>
  );

}
export default InsertSupplier;