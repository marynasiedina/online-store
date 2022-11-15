import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Admin() {
  return (
    <Container className='d-flex flex-column'>
      <Button variant='outline-dark' className='mt-4 p-2'>Añadir marca</Button>
      <Button variant='outline-dark' className='mt-4 p-2'>Añadir tipo</Button>
      <Button variant='outline-dark' className='mt-4 p-2'>Añadir dispositivo</Button>
    </Container>
  );
}

export default Admin;
