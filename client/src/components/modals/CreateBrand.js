import React, { useState } from 'react';
import { createBrand } from '../../http/deviceApi';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addBrand = () => {
    createBrand({ name: value }).then(data => setValue(''));
    onHide();
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
          Añadir marca
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
            placeholder='Escribe el nombre de tipo'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant='outline-danger'>Cerrar</Button>
        <Button onClick={addBrand} variant='outline-success'>Añadir</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
