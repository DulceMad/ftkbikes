import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function UpdateSupplier() {

    const endpoint = 'http://localhost/Proyecto/public/api/suppliers_update/';
    const endpoint2 = 'http://localhost/Proyecto/public/api/suppliers_show/';
    const [suppliername, setSupplierName] = useState('');
    const [phone, setPhone] = useState('');
    const [supplieremail, setSupplierEmail] = useState('');
    
    const navigate = useNavigate();

    const { id } = useParams();

    const updateSupplier = async (e) => {

        e.preventDefault()
        await axios.put(`${endpoint}${id}`,
            {
                suppliername: suppliername, phone: phone, supplieremail: supplieremail
            });
            swal({
                title: "updated supplier",
                text: "The supplier has been updated",
                icon: "success",
                timer: "3000"    
              })
        navigate('/Proyecto/public/Supplier');
    }

    useEffect(() => {
        const getSupplierById = async () => {
            const res = await axios.get(`${endpoint2}${id}`)
            setSupplierName(res.data.suppliername);
            setPhone(res.data.phone);
            setSupplierEmail(res.data.supplieremail);
        }
        getSupplierById()
    }, [])

    return (
        <Container aling="center" style={{ borderColor: '#072f4e', borderWidth: 6, borderRadius: 8, padding: 10, marginTop: 10, marginBottom: 10, backgroundColor: '#393d42', color: 'white', width: '50%' }}>
            <h1>Update Supplier</h1>
            <Form onSubmit={updateSupplier}>
                <Form.Group className="mb-3" controlId="suppliername">
                    <Form.Label> Supplier Name </Form.Label>
                    <Form.Control value={suppliername} onChange={(e) => setSupplierName(e.target.value)} placeholder="Type supplier name" type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Phone </Form.Label>
                    <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} type="number" min="1" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
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
export default UpdateSupplier;