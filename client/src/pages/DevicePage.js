import React, { useState, useEffect } from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import Star from '../assets/Star.png';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceApi';

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data));
  }, [id]);


  return (
    <Container className='mt-5'>
      <Row className='d-flex'>
        <Col md={4} >
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
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
        {device.info?.map((info, index) =>
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
};

export default DevicePage;;
