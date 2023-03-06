
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function InsertCategory() {

  const [categoryname, setCategoryName] = useState('');
  
  const navigate = useNavigate();

  const storeCategory = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost/Proyecto/public/api/category_store', {
      categoryname: categoryname});
      
      if(res.data.status===200){
        swal({
          title: "registered category",
          text: "The category has been registered",
          icon: "success",
          timer: "3000"    
        })
      navigate('/Proyecto/public/Category');
      }else{
        swal({
          title: "Verify data",
          text: "The category name must be at least 3 characters.",
          icon: "warning",
          timer: "3000"   
        })
      }
      
  }

  return (
    <Container aling="center" style={{ borderColor: '#072f4e', borderWidth: 6, borderRadius: 8, padding: 10, marginTop: 10, marginBottom: 10, backgroundColor: '#393d42', color: 'white', width: '50%' }}>
      <h1>Insert Category</h1>
      <Form onSubmit={storeCategory}>
        <Form.Group className="mb-3" controlId="categoryname">
          <Form.Label> Category Name </Form.Label>
          <Form.Control value={categoryname} onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Type category name" required/>
        </Form.Group>
        <Button variant="secondary" style={{ backgroundColor: "#072f4e" }} type="submit">
          Save
        </Button>
        <Link to={"/Proyecto/public/category"}>
            <Button variant="secondary" style={{ backgroundColor: "#072f4e" }}>Cancel</Button>
        </Link>
      </Form>
    </Container>
  );

}
export default InsertCategory;