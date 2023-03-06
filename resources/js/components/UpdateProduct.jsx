import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function UpdateProduct() {

    const endpoint = 'http://localhost/Proyecto/public/api/products_update/';
    const endpoint2 = 'http://localhost/Proyecto/public/api/products_show/';
    const [productname, setProductName] = useState('');
    const [price, setPrice] = useState(0);
    const [supplier_id, setSupplierid] = useState(0);
    const [categorias_id, setCategoriasid] = useState(0);
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);
    const [image, setImage] = useState('');

    const navigate = useNavigate();

    const { id } = useParams();

    //CATEGORIES
    const [categorias, setCategory] = useState([])

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        const res = await axios.get('http://localhost/Proyecto/public/api/category_index')
        setCategory(res.data)
        console.log(res)
    }


    //SUPPLIERS
    const [suppliers, setSupplier] = useState([])

    useEffect(() => {
        getSupplier()
    }, [])

    const getSupplier = async () => {
        const res = await axios.get('http://localhost/Proyecto/public/api/suppliers_index')
        setSupplier(res.data)
    }

    const updateProduct = async (e) => {

        e.preventDefault()
        await axios.put(`${endpoint}${id}`,
            {
                productname: productname, price: price, supplier_id: supplier_id, categorias_id: categorias_id,
                description: description, stock: stock, image: image

            });
            swal({
                title: "updated product",
                text: "The product has been updated",
                icon: "success",
                timer: "3000"    
              })
        navigate('/Proyecto/public/Product');
    }

    useEffect(() => {
        const getProductById = async () => {
            const res = await axios.get(`${endpoint2}${id}`)
            setProductName(res.data.productname);
            setPrice(res.data.price);
            setStock(res.data.stock);
            setSupplierid(res.data.supplier_id);
            setCategoriasid(res.data.categorias_id);
            setDescription(res.data.description);
            setImage(res.data.image);
        }
        getProductById()
    }, [])



    return (
        <Container aling="center" style={{ borderColor: '#072f4e', borderWidth: 6, borderRadius: 8, padding: 10, marginTop: 10, marginBottom: 10, backgroundColor: '#393d42', color: 'white', width: '50%' }}>
            <h1>Update Product</h1>
            <Form onSubmit={updateProduct}>
                <Form.Group className="mb-3" controlId="productname">
                    <Form.Label> Product Name </Form.Label>
                    <Form.Control value={productname} onChange={(e) => setProductName(e.target.value)} type="text" placeholder="Type product name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price </Form.Label>
                    <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number" min="1" placeholder="$" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="supplier_id">
                    <Form.Label>Supplier</Form.Label>
                    <Form.Select value={supplier_id} onChange={(e) => setSupplierid(e.target.value)}>
                        {suppliers.map(supplier =>
                            <option key={supplier.id} value={supplier.id}>{supplier.suppliername}</option>
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="categorias_id">
                    <Form.Label>Category</Form.Label>
                    <Form.Select value={categorias_id} onChange={(e) => setCategoriasid(e.target.value)}>
                        {categorias.map(categoria =>
                            <option key={categoria.id} value={categoria.id}>{categoria.categoryname}</option>
                        )}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Product Description" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="stock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control value={stock} onChange={(e) => setStock(e.target.value)} type="number" min="1" placeholder="Stock" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder="imagen" required/>
                </Form.Group>

                <Button variant="secondary" style={{ backgroundColor: "#072f4e" }} type="submit">
                    Save
                </Button>
                <Link to={"/Proyecto/public/product"}>
                    <Button variant="secondary" style={{ backgroundColor: "#072f4e" }}>Cancel</Button>
                </Link>
            </Form>
        </Container>
    );

}
export default UpdateProduct;