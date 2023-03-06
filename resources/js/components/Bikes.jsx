import React from "react";
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";

function Bikes() {

    const [products, setProduct] = useState([])
    const [search, setSearch] = useState("")

    //funcion para busqueda
    const searcher = (e) => {
      setSearch(e.target.value)
      console.log(e.target.value)
    }
  
    //metodo de filtrado
    let results = []
    if(!search){
      results=products
    }else{
      results=products.filter((dato)=>
      dato.description.toLowerCase().includes(search.toLowerCase()),
      )
    }

    useEffect(() => {
        getProduct()
    }, []);

    const getProduct = async () => {
        const res = await
            axios.get('http://localhost/Proyecto/public/api/products_index')
        setProduct(res.data)
        console.log(res)
    }

    return (
        <Container fluid >
            <Form style={{width:'30%'}}>
          <Form.Control value={search} onChange={searcher} type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ margin: 20,borderColor: '#072f4e', borderWidth: 3 }}/>
        </Form>
            <Row align="center">
                {results.map((Product) => (
                    <Card style={{ width: '15rem', margin: "10px" }} key={Product.id}>
                        <Card.Img variant="top" src={Product.image} style={{ width: '13rem', height: '15rem' }} />
                        <Card.Body>
                            <Card.Title>{Product.productname}</Card.Title>
                            <Card.Text>${Product.price}</Card.Text>
                            <Card.Text>Disponibles: {Product.stock}</Card.Text>
                            <Button variant="primary">Add to cart</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    );
}

export default Bikes;