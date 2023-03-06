import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

function Users() {
  const [users, setUser] = useState([])
  const [search, setSearch] = useState("")

  //funcion para busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //metodo de filtrado
  let results = []
  if (!search) {
    results = users
  } else {
    results = users.filter((dato) =>
      dato.username.toLowerCase().includes(search.toLowerCase()),
    )
  }

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const res = await axios.get('http://localhost/Proyecto/public/api/users_index')
    setUser(res.data)
  }
  const deleteUser = async (id) => {
    swal({
      title: "Delete user",
      text: "Are you sure to delete the user?",
      icon: "warning",
      buttons: ["No", "Yes"]
    }).then(async respuesta => {
      if (respuesta) {
        swal({
          text: "The user has been successfully deleted",
          icon: "success",
          timer: "2000"
        })
        await axios.delete(`http://localhost/Proyecto/public/api/users_destroy/${id}`);
        getUser();  
      }
    })
  }

  //Vista
  return (
    <>
      <Container style={{ padding: 20, marginTop: 35 }}>
      <Form className="d-flex" style={{width:"35%" }}>
          <Link to={"/Proyecto/public/RegisterAdmin"}>
            <Button variant="dark" style={{ margin: 20 }}>New</Button>
          </Link>
          <Form.Control value={search} onChange={searcher} type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ margin: 20,borderColor: '#072f4e', borderWidth: 3 }} />
        </Form>
        <Table striped bordered hover variant='dark' >
          <thead >
            <tr>
              <th>User Id</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Accions</th>
            </tr>
          </thead>
          <tbody>
            {results.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.useremail}</td>
                <td>{user.role}</td>
                <td>
                  <Button style={{width:"80px"}}variant="outline-danger" onClick={() => deleteUser(user.id)}>Delete</Button> <Button variant="outline-light"style={{ width: "80px" }} >Edit</Button>
                </td>
              </tr>))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Users;