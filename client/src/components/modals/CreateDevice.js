import React, { useContext, useState } from 'react';
import { Context } from '../../index';
import { Modal, Button, Form, Dropdown, Col, Row } from 'react-bootstrap';

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    console.log('hi');
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number));
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Añadir dispositivo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mb-2'>
            <Dropdown.Toggle>Elija el tipo</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type =>
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mb-2'>
            <Dropdown.Toggle>Elija la marca</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand =>
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className='mt-3'
            placeholder='Escribe nombre de dispositivo'
          />
          <Form.Control
            type='number'
            className='mt-3'
            placeholder='Escribe precio de dispositivo'
          />
          <Form.Group controlId="formFileLg" className="mb-2 mt-3">
            <Form.Label>Añade foto de dispositivo</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <hr />
          <Button onClick={() => addInfo()} variant='outline-dark'>Añadir nueva descripcion </Button>
          {info.map(i =>
            <Row className='mt-2' key={i.number}>
              <Col md={4} className='mt-2'>
                <Form.Control
                  placeholder='Escribe titulo de descripcion' />
              </Col>
              <Col md={4} className='mt-2'>
                <Form.Control
                  placeholder='Escribe descripcion' />
              </Col>
              <Col md={4} className='mt-2'>
                <Button onClick={() => removeInfo(i.number)} variant='outline-danger'>Eliminar</Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant='outline-danger'>Cerrar</Button>
        <Button onClick={onHide} variant='outline-success'>Añadir</Button>
      </Modal.Footer>
    </Modal >
  );
};

export default CreateDevice;
