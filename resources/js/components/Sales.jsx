import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import { Form } from 'react-bootstrap';

function Sales() {

  const [sales, setSales] = useState([])
  const [search, setSearch] = useState("")

  //funcion para busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //metodo de filtrado
  let results = []
  if(!search){
    results=sales
  }else{
    results=sales.filter((dato)=>
    dato.user_id.toLowerCase().includes(search.toLowerCase()),
    )
  }


  useEffect(() => {
    getSales()
  }, [])

  const getSales = async () => {
    const res = await axios.get('http://localhost/Proyecto/public/api/sales_index')
    setSales(res.data)
  }
  const deleteSale = async (id) => {
    swal({
      title: "Delete sale",
      text: "Are you sure to delete the sale?",
      icon: "warning",
      buttons: ["No", "Yes"]
    }).then(async respuesta => {
      if (respuesta) {
        swal({
          text: "The product has been successfully sale",
          icon: "success",
          timer: "2000"
        })
        await axios.delete(`http://localhost/Proyecto/public/api/sales_destroy/${id}`);
        getSales();  
      }
    })
  }

  //Vista
  return (
    <>

      <Container style={{ padding: 20, marginTop: 35 }}>
      <Form className="d-flex" style={{width:"35%" }}>
        <Form.Control value={search} onChange={searcher} type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ margin: 20,borderColor: '#072f4e', borderWidth: 3 }} />
      </Form>
        <Table striped bordered hover variant='dark' >
          <thead >
            <tr>
              <th>Sale ID</th>
              <th>User Id</th>
              <th>Date</th>
              <th>Total</th>
              <th>Accions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.id}</td>
                <td>{sale.user_id}</td>
                <td>{sale.date}</td>
                <td>{sale.total}</td>
                <td>
                  <Button style={{width:"80px"}}variant="outline-danger" onClick={() => deleteSale(sale.id)}>Delete</Button> <Button variant="outline-light" style={{ width: "80px" }} >Edit</Button>
                </td>
              </tr>))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Sales;