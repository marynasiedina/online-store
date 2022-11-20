import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import { Col, Container, Row } from 'react-bootstrap';
import Typebar from '../components/Typebar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceApi';
import Pages from '../components/Pages';

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data));
    fetchBrands().then(data => device.setBrands(data));
    fetchDevices(null, null, 1, 3).then(data => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device]);

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
          <Typebar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
