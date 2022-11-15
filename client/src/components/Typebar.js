import React, { useContext } from 'react';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const Typebar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ListGroup>
      {device.types.map(type =>
        <ListGroup.Item
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          style={{ cursor: 'pointer' }}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>)}
    </ListGroup>
  );
});

export default Typebar;

