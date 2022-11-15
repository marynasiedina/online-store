import React, { useContext } from 'react';
import { Context } from '../index';
import { Row, Card } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className='d-flex'>
      {device.brands.map(brand =>
        <Card
          onClick={() => device.setSelectedBrand(brand)}
          className='p-1 ml-2'
          style={{ cursor: 'pointer' }}
          key={brand.id}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>)}
    </Row>
  );
});

export default BrandBar;
