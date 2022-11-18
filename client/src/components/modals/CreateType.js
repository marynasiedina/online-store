import React, { useState } from 'react';
import { createType } from '../../http/deviceApi';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addType = () => {
    createType({ name: value }).then(data => setValue(''));
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
          Añadir tipo
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
        <Button onClick={addType} variant='outline-success'>Añadir</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
