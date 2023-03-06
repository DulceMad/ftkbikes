import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function InsertProduct() {

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


  //PRODUCTS
  const [productname, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [supplier_id, setSupplierid] = useState('');
  const [categorias_id, setCategoriasid] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const storeProducts = async (e) => {
    e.preventDefault();

    const format=new FormData();
    format.append('productname', productname);
    format.append('price',price);
    format.append('supplier_id',supplier_id);
    format.append('categorias_id',categorias_id);
    format.append('description',description);
    format.append('stock',stock);
    format.append('image',image);
   const res = await axios.post('http://localhost/Proyecto/public/api/products_store', format);
    
    if(res.data.status===200){
      swal({
        title: "inserted product",
        text: "The product has been inserted",
        icon: "success",
        timer: "3000"    
      })
      navigate('/Proyecto/public/Product');
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
      <h1>Insert Product</h1>
      <Form onSubmit={storeProducts}>
        <Form.Group className="mb-3" controlId="productname">
          <Form.Label> Product Name </Form.Label>
          <Form.Control value={productname} onChange={(e) => setProductName(e.target.value)} placeholder="Type product name" type="text" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price </Form.Label>
          <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number" min="1" placeholder="$" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="supplier_id">
        <Form.Label>Supplier</Form.Label>
          <Form.Select onChange={(e) => setSupplierid(e.target.value)}>
            <option hidden defaultValue={true}>Select Supplier</option>
            {suppliers.map(supplier =>
              <option key={supplier.id} value={supplier.id}>{supplier.suppliername}</option>
            )}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="categorias_id">
        <Form.Label>Category</Form.Label>
          <Form.Select onChange={(e) => setCategoriasid(e.target.value)}>
            <option hidden defaultValue={true}>Select category</option>
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
          <Form.Control onChange={(e) => setImage(e.target.files[0])} type="file" required/>
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
export default InsertProduct;