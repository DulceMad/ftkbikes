import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button, Navbar } from 'react-bootstrap';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Form } from 'react-bootstrap';

function Category() {

  //Union de back con front (Obtiene los datos desde el controlador de productos)
  const [categorias, setCategory] = useState([])
  const [search, setSearch] = useState("")

  //funcion para busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //metodo de filtrado
  let results = []
  if (!search) {
    results = categorias
  } else {
    results = categorias.filter((dato) =>
      dato.categoryname.toLowerCase().includes(search.toLowerCase()),
    )
  }

  useEffect(() => {
    getCategory()
  }, [])

  const getCategory = async () => {
    const res = await axios.get('http://localhost/Proyecto/public/api/category_index')
    setCategory(res.data)
    console.log(res)
  }
  const deleteCategory = async (id) => {
    swal({
      title: "Delete category",
      text: "Are you sure to delete the category?",
      icon: "warning",
      buttons: ["No", "Yes"]
    }).then(async respuesta => {
      if (respuesta) {
        swal({
          text: "The category has been successfully deleted",
          icon: "success",
          timer: "2000"
        })
        await axios.delete(`http://localhost/Proyecto/public/api/category_destroy/${id}`);
        getCategory();
      }
    })
  }

  return (
    <>
      <Container style={{ padding: 20, marginTop: 35 }}>
        <Form className="d-flex" style={{width:"35%" }}>
          <Link to={"/Proyecto/public/InsertCategory"}>
            <Button variant="dark" style={{ margin: 20 }}>New</Button>
          </Link>
          <Form.Control value={search} onChange={searcher} type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ margin: 20,borderColor: '#072f4e', borderWidth: 3 }} />
        </Form>
        <Table striped bordered hover variant='dark' >
          <thead >
            <tr>
              <th>Category Id</th>
              <th>Category Name</th>
              <th>Accions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.categoryname}</td>
                <td>
                  <Button style={{ width: "80px" }} variant="outline-danger" onClick={() => deleteCategory(category.id)}>Delete</Button> <Link to={`/Proyecto/public/UpdateCategory/${category.id}`}>
                    <Button variant="outline-light" style={{ width: "80px", left: "10px" }} >Edit</Button>
                  </Link>
                </td>
              </tr>))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Category;