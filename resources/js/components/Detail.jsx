import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import { Form } from 'react-bootstrap';

function Detail() {

  const [details, setDetail] = useState([])
  const [search, setSearch] = useState("")

  //funcion para busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //metodo de filtrado
  let results = []
  if (!search) {
    results = details
  } else {
    results = details.filter((dato) =>
      dato.sale_id.toLowerCase().includes(search.toLowerCase()),
    )
  }

  useEffect(() => {
    getDetail()
  }, [])

  const getDetail = async () => {
    const res = await axios.get('http://localhost/Proyecto/public/api/details_index')
    setDetail(res.data)
  }
  const deleteDetail = async (id) => {
    swal({
      title: "Delete detail",
      text: "Are you sure to delete the detail?",
      icon: "warning",
      buttons: ["No", "Yes"]
    }).then(async respuesta => {
      if (respuesta) {
        swal({
          text: "The detail has been successfully deleted",
          icon: "success",
          timer: "2000"
        })
        await axios.delete(`http://localhost/Proyecto/public/api/details_destroy/${id}`);
        getDetail();  
      }
    })
  }
  return (
    <>
      <Container style={{ padding: 20, marginTop: 35 }}>
      <Form className="d-flex" style={{width:"35%" }}>
          <Form.Control value={search} onChange={searcher} type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ margin: 20,borderColor: '#072f4e', borderWidth: 3 }} />
        </Form>
        <Table striped bordered hover variant='dark' >
          <thead >
            <tr>
              <th>Detail Id</th>
              <th>Sale Id</th>
              <th>Quantity</th>
              <th>Product ID</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Accions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((detail) => (
              <tr key={detail.id}>
                <td>{detail.id}</td>
                <td>{detail.sale_id}</td>
                <td>{detail.quantity}</td>
                <td>{detail.product_id}</td>
                <td>{detail.price}</td>
                <td>{detail.subtotal}</td>
                <td>
                  <Button style={{width:"80px"}}variant="outline-danger" onClick={() => deleteDetail(detail.id)}>Delete</Button> <Button variant="outline-light"style={{ width: "80px" }} >Edit</Button>
                </td>
              </tr>))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Detail;