import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { SHOP_ROUTE } from '../utils/consts';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <NavLink style={{ textDecoration: 'none', color: 'white' }} to={SHOP_ROUTE}>E-SHOP</NavLink>
          {user.isAuth ?
            <Nav className='ml-auto' style={{ color: 'white' }}>
              <Button onClick={() => navigate(ADMIN_ROUTE)} variant={'outline-light'}>Admin panel</Button>
              <Button onClick={() => navigate(LOGIN_ROUTE)} variant={'outline-light'} className='ml-2'>Log out</Button>
            </Nav>
            :
            <Nav className='ml-auto' style={{ color: 'white' }}>
              <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Sign in</Button>
            </Nav>}
        </Container>
      </Navbar>

    </>
  );
});

export default NavBar;