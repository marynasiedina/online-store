import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Image } from 'react-bootstrap';
import { DEVICE_ROUTE } from '../utils/consts';
import { ReactComponent as Star } from '../assets/Vector.svg';

function DeviceItem({ device }) {
  const navigate = useNavigate();

  return (
    <Col md={3} className='mt-3' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card className='p-2' style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
        <div className='d-flex justify-content-between align-items-center mt-2'>
          <div className='text-black-50'>{device.name}</div>
          <div className='d-flex align-items-center '>
            <div>{device.rating}</div>
            <Star />
          </div>
        </div>
        <h6 className='mb-0'>{device.name}</h6>
      </Card>
    </Col>
  );
}

export default DeviceItem;
