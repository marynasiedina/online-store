import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import { Col, Container, Row } from 'react-bootstrap';
import Typebar from '../components/Typebar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceApi';

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data));
    fetchBrands().then(data => device.setBrands(data));
    fetchDevices().then(data => device.setDevices(data));
  }, [device]);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <Typebar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
