import React, { useState } from 'react';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import { Container, Button } from 'react-bootstrap';

function Admin() {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className='d-flex flex-column'>
      <Button onClick={() => setBrandVisible(true)} variant='outline-dark' className='mt-4 p-2'>Añadir marca</Button>
      <Button onClick={() => setTypeVisible(true)} variant='outline-dark' className='mt-4 p-2'>Añadir tipo</Button>
      <Button onClick={() => setDeviceVisible(true)} variant='outline-dark' className='mt-4 p-2'>Añadir dispositivo</Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
    </Container>
  );
}

export default Admin;
