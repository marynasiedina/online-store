import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <NavLink style={{ textDecoration: 'none', color: 'white' }} to={SHOP_ROUTE}>E-SHOP</NavLink>
          {user.isAuth ?
            <Nav className='ml-auto' style={{ color: 'white' }}>
              <Button onClick={() => navigate(ADMIN_ROUTE)} variant={'outline-light'}>Admin panel</Button>
              <Button onClick={() => logOut()} variant={'outline-light'} className='ml-2'>Log out</Button>
            </Nav>
            :
            <Nav className='ml-auto' style={{ color: 'white' }}>
              <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Sign in</Button>
            </Nav>}
        </Container>
      </Navbar>

    </>
  );
});

export default NavBar;