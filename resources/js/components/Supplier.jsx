import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

function Supplier() {

  const [suppliers, setSupplier] = useState([])
  const [search, setSearch] = useState("")

  const navigate = useNavigate();

  const location = useLocation();

  
  const [token, useToken] = useState( );   

  

  //funcion para busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //metodo de filtrado
  let results = []
  if(!search){
    results=suppliers
  }else{
    results=suppliers.filter((dato)=>
    dato.suppliername.toLowerCase().includes(search.toLowerCase()),
    )
  }

  useEffect(() => {
    
    try{
      if(location!=undefined || location!=null){
        useToken(location.state.u_token)
        
        console.log(location.state.u_token)
        console.log(token)

        getSupplier(location.state.u_token)
      }
    }catch(e){
      swal({
        title: "Unauthorized",
        text: "Login with a Admin account",
        icon: "warning"
      })
      console.log(e);
      navigate('/Proyecto/public/login')
    }
    
  }, [])

  const getSupplier = async (tokenn) => {
    const res = await axios.get('http://localhost/Proyecto/public/api/suppliers_index',{
      headers: {
        'Content-Type':'multipart/form-data',
        'Accept': 'application/json',
        'Authorization': `Bearer  ${tokenn}`
      }
    })
    console.log(token)
    setSupplier(res.data)
  }

  const deleteSupplier = async (id) => {
    swal({
      title: "Delete supplier",
      text: "Are you sure to delete the supplier?",
      icon: "warning",
      buttons: ["No", "Yes"]
    }).then(async respuesta => {
      if (respuesta) {
        swal({
          text: "The supplier has been successfully deleted",
          icon: "success",
          timer: "2000"
        })
        await axios.delete(`http://localhost/Proyecto/public/api/suppliers_destroy/${id}`);
        getSupplier();
      }
    })
  }
  //Vista
  return (
    <>
      <Container style={{ padding: 20, marginTop: 35 }}>
        <Form className="d-flex"  style={{width:"35%" }}>
          <Link to={"/Proyecto/public/InsertSupplier"}>
            <Button variant="dark" style={{ margin: 20 }}>New</Button>
          </Link>
          <Form.Control value={search} onChange={searcher} type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ margin: 20, borderColor: '#072f4e', borderWidth: 3 }} />
        </Form>
        <Table striped bordered hover variant='dark' >
          <thead >
            <tr>
              <th>Suppier Id</th>
              <th>Supplier Name</th>
              <th>Phone</th>
              <th>Supplier Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {results.map((supplier) => (
              <tr key={supplier.id}>
                <td>{supplier.id}</td>
                <td>{supplier.suppliername}</td>
                <td>{supplier.phone}</td>
                <td>{supplier.supplieremail}</td>
                <td>
                  <Button style={{ width: "80px" }} variant="outline-danger" onClick={() => deleteSupplier(supplier.id)}>Delete</Button> <Link to={`/Proyecto/public/updatesupplier/${supplier.id}`}>
                    <Button variant="outline-light" style={{ width: "80px" }} >Edit</Button>
                  </Link>
                </td>
              </tr>))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Supplier;