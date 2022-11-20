import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../index';
import { fetchTypes, fetchBrands, createDevice } from '../../http/deviceApi';
import { Modal, Button, Form, Dropdown, Col, Row } from 'react-bootstrap';

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data));
    fetchBrands().then(data => device.setBrands(data));
  }, [device]);


  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
  };

  const selectFile = e => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', brand.id);
    formData.append('typeId', type.id);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then(data => onHide());
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
          <div className='d-flex'>
            <Dropdown className='m-2'>
              <Dropdown.Toggle>{type.name || 'Elija el tipo'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map(type =>
                  <Dropdown.Item
                    key={type.id}
                    onClick={() => setType(type)}
                  >
                    {type.name}
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='m-2'>
              <Dropdown.Toggle>{brand.name || 'Elija la marca'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map(brand =>
                  <Dropdown.Item
                    key={brand.id}
                    onClick={() => setBrand(brand)}
                  >
                    {brand.name}
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
            className='mt-3'
            placeholder='Escribe nombre de dispositivo'
          />
          <Form.Control
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            type='number'
            className='mt-3'
            placeholder='Escribe precio de dispositivo'
          />
          <Form.Group controlId="formFileLg" className="mb-2 mt-3">
            <Form.Label>Añade foto de dispositivo</Form.Label>
            <Form.Control type="file" onChange={selectFile} />
          </Form.Group>
          <hr />
          <Button onClick={() => addInfo()} variant='outline-dark'>Añadir nueva descripcion </Button>
          {info.map(i =>
            <Row className='mt-2' key={i.number}>
              <Col md={4} className='mt-2'>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder='Escribe titulo de descripcion' />
              </Col>
              <Col md={4} className='mt-2'>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
        <Button onClick={addDevice} variant='outline-success'>Añadir</Button>
      </Modal.Footer>
    </Modal >
  );
};

export default CreateDevice;
