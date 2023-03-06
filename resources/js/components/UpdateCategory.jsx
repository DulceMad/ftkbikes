import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function UpdateCategory() {

    const endpoint = 'http://localhost/Proyecto/public/api/category_update/';
    const endpoint2 = 'http://localhost/Proyecto/public/api/category_show/';
    const [categoryname, setCategoryName] = useState('');
    
    const navigate = useNavigate();

    const { id } = useParams();

    const updateCategory = async (e) => {

        e.preventDefault()
        await axios.put(`${endpoint}${id}`,
            {
                categoryname: categoryname
            });
            swal({
                title: "updated category",
                text: "The category has been updated",
                icon: "success",
                timer: "3000"    
              })
        navigate('/Proyecto/public/Category');
    }

    useEffect(() => {
        const getCategoryById = async () => {
            const res = await axios.get(`${endpoint2}${id}`)
            setCategoryName(res.data.categoryname);
        }
        getCategoryById()
    }, [])

    return (
        <Container aling="center" style={{ borderColor: '#072f4e', borderWidth: 6, borderRadius: 8, padding: 10, marginTop: 10, marginBottom: 10, backgroundColor: '#393d42', color: 'white', width: '50%' }}>
            <h1>Update Category</h1>
            <Form onSubmit={updateCategory}>
                <Form.Group className="mb-3" controlId="categoryname">
                    <Form.Label> Category Name </Form.Label>
                    <Form.Control value={categoryname} onChange={(e) => setCategoryName(e.target.value)} placeholder="Type category name" type="text" required />
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

export default UpdateCategory;