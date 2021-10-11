import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

function MyCarousel() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.discordapp.com/attachments/884950893391380483/897171664935219291/Wallpaper2.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Hello World</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.discordapp.com/attachments/884950893391380483/897171665228812308/Wallpaper.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>It's Hassan :D</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default MyCarousel;
