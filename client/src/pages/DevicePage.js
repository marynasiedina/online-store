import React from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import Star from '../assets/Star.png';

function DevicePage() {
  const device = {
    id: 1,
    name: "iPhone 12",
    price: 1200,
    rating: 5,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97309508/fee_194_131_png",
  };
  const description = [
    { id: 1, title: 'RAM', description: '6GB' },
    { id: 2, title: 'Camara', description: '12MP' },
    { id: 3, title: 'Processor', description: 'i7-8750H' },
    { id: 4, title: 'Nucleos', description: '8' },
    { id: 5, title: 'Bateria', description: '4000mA' },
  ];
  return (
    <Container className='mt-5'>
      <Row className='d-flex'>
        <Col md={4} >
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4} className='d-flex flex-column align-items-center'>
          <h2 className='mb-2' >{device.name}</h2>
          <div
            style={{
              background: `url(${Star}) no-repeat center center`,
              backgroundSize: 'cover',
              width: '240px',
              height: '230px',
              fontSize: '36px'
            }}
            className='d-flex align-items-center justify-content-center'>
            {device.rating}
          </div>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-center'
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '3px solid lightgrey'
            }}
          >
            <h3>Precio: {device.price} &#8364;</h3>
            <Button variant='outline-dark'>Añadir a la cesta</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Description</h1>
        {description.map((info, index) =>
          <Row
            key={info.id}
            style={{ background: index % 2 === 0 ? 'lightgrey' : 'transparent' }}
            className='p-2'
          >
            {info.title}: {info.description}
          </Row>)}
      </Row>
    </Container >
  );
}

export default DevicePage;;
