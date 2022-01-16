import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className='mt-5 bg-dark text-white'>
            <Container >
                <Row>
                    <Col className="text-center py-3">
                        <i className="fa fa-home"></i> Choto Kalibari Road
                        <br/>Akur Takur Para, Tangail.
                        <br/>
                        <i className="fa fa-phone"></i> +8801794-955350, 01842-461277
                        <br/>
                        <i className="fa fa-envelope"></i> <a className='text-white' href={`mailto:shoematic07@gmail.com`}>shoematic07@gmail.com</a>
                        <br />
                        <a className='text-white' href="https://www.facebook.com/Shoematic.bd/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i> facebook.com/shoematic.bd</a>
                        

                    </Col>
                </Row>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; ProShop</Col>
                </Row>
            </Container>

        </footer>
    );
}

export default Footer
