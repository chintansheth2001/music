import * as React from 'react';
import { Outlet } from 'react-router-dom'

import { Container, Row, Col, Image } from 'react-bootstrap';

import Leftnav from './Leftnav'
import Banner from '../assets/banner.png'


export interface IPageLayoutProps {
}

export default function PageLayout(props: IPageLayoutProps) {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs lg="2">
            <Leftnav />
          </Col>
          <Col>
            <Image src={Banner} fluid={true} />
            <Outlet />
          </Col>
        </Row>
      </Container>

    </div>
  );
}
