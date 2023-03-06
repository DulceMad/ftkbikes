import {Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
function Home() {
    
    return (
        <div style={{ padding:20}} >
        <Carousel variant="dark">
          <Carousel.Item align="center">
            <img className="d-block w-100" src=".\Imagenes\Bmx1.png" />
           </Carousel.Item>
          <Carousel.Item align="center">
            <img className="d-block w-100" src=".\Imagenes\Bmx2.png" />
          </Carousel.Item>
          <Carousel.Item align="center">
            <img className="d-block w-100" src="https://www.360bs.net/wp-content/uploads/2019/05/2400x850_STICKERS-REGALO_.jpg"/>
          </Carousel.Item>
        </Carousel>
        <Container class="img-fluid" align="center" style={{ padding:20}} >
          <h1>Brands we have</h1>
        <img className="d-block w-100" src=".\Imagenes\Bmx5.png" />
        </Container>
        </div>
      );
    }

export default Home;