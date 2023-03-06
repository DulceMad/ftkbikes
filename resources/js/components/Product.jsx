import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import  axios  from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Form } from 'react-bootstrap';

function Product() {

  const [products, setProduct] = useState([])
  const [search, setSearch] = useState("")

  //funcion para busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //metodo de filtrado
  let results = []
  if (!search) {
    results = products
  } else {
    results = products.filter((dato) =>
      dato.description.toLowerCase().includes(search.toLowerCase()),
    )
  }


  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const res = await axios.get('http://192.168.100.12/Proyecto/public/api/products_index')
    setProduct(res.data)
  }
  const deleteProduct = async (id) => {
    swal({
      title: "Delete product",
      text: "Are you sure to delete the product?",
      icon: "warning",
      buttons: ["No", "Yes"]
    }).then(async respuesta => {
      if (respuesta) {
        swal({
          text: "The product has been successfully deleted",
          icon: "success",
          timer: "2000"
        })
        await axios.delete(`http://localhost/Proyecto/public/api/products_destroy/${id}`);
        getProduct();  
      }
    })
  }

  //Vista
  return (
    <>
    <Container style={{ marginTop: 35 }}>
    <Form className="d-flex" style={{width:"35%" }}>
          <Link to={"/Proyecto/public/insertproduct"}>
            <Button variant="dark" style={{ margin: 20 }}>New</Button>
          </Link>
          <Form.Control value={search} onChange={searcher} type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ margin: 20,borderColor: '#072f4e', borderWidth: 3 }} />
        </Form>
      <Table striped bordered hover variant='dark' >
        <thead >
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Supplier</th>
            <th>Description</th>
            <th>Image</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Accions</th>
              
          </tr>
        </thead>
        <tbody>
        {results.map((product)=>(
                 <tr key={product.id}>
                 <td>{product.id}</td>
                 <td>{product.productname}</td>
                 <td>{product.price}</td>
                 <td>{product.supplier_id}</td>
                 <td>{product.description}</td>
                 <td><img src={product.image} style={{ width: 100 }}></img></td>
                 <td>{product.stock}</td>
                 <td>{product.categorias_id}</td>
                 <td>
                  <Button style={{width:"80px"}} variant="outline-danger" onClick={() => deleteProduct(product.id)}>Delete</Button> <Link to={`/Proyecto/public/UpdateProduct/${product.id}`}>
                    <Button style={{ width: "80px" }} variant="outline-light">Edit</Button>
                  </Link>
                 </td>
                 </tr>))} 
        </tbody>
      </Table>
    </Container>
    </>
  );
}
export default Product;