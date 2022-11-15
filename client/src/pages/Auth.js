import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className='p-2'>
        <h2 className='m-auto'>{isLogin ? 'Authentication' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Type your email'
          />
          <Form.Control
            className='mt-3'
            placeholder='Type your password'
          />
          <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            {isLogin ? <Row className='d-flex vertical-align-center'>
              <span className='pl-3 align-self-center'>You don't have account?</span>
              <NavLink className='py-0 pl-1 align-self-center' to={REGISTRATION_ROUTE}>
                Please register here.
              </NavLink>
            </Row> :
              <Row className='d-flex vertical-align-center'>
                <span className='pl-3 align-self-center'>You have account?</span>
                <NavLink className='py-0 pl-1 align-self-center' to={LOGIN_ROUTE}>
                  Please sign in here.
                </NavLink>
              </Row>}
            <Button variant='outline-success'>{isLogin ? 'Sign in' : 'Register'}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
