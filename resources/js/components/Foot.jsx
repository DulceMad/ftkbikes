import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Foot() {

    return (
        <Container fluid >
            <Row >
                <Col align="start" style={{ padding: 20, backgroundColor: 'black' }}>
                    <img src="./Imagenes/Logo.jpeg" height="130" width="145" />
                </Col>
                <Col align="center" style={{ paddingTop: 35, color: "white", backgroundColor: 'black' }}>
                    <p >
                        Design By Mariana Sanchez, Francisco De lira <br></br>
                        Engineering in Information and Communication Technologies <br></br><br></br>
                        © 2022 FTK BIKES. All rights reserved.
                    </p>
                </Col>
                <Col align="end" style={{ padding: 35, backgroundColor: 'black' }}>
                    <Button variant="outline-black" style={{ height: 70, width: 70 }} href="https://www.facebook.com/profile.php?id=100087227215708">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" height="50" width="50" />
                    </Button>
                    <Button variant="outline-black" style={{ height: 70, width: 70 }} href="https://www.instagram.com/ftk_bikes/">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" height="50" width="50" />
                    </Button>
                    <Button variant="outline-black" style={{ height: 70, width: 70 }} href="https://twitter.com">
                        <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" height="50" width="50" />
                    </Button>
                    <Button variant="outline-black" style={{ height: 70, width: 70 }} href="https://web.whatsapp.com/">
                        <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" height="50" width="50" />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
export default Foot;