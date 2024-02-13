import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Header = () => {
    const [word, setWord] = useState("")
    const search_handler = (w) => {
        setWord()
    }
    return (
        <Navbar key={'md'} expand={'md'} className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand href="#">MichiApp</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'md'}`} />
                {/* <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${'md'}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'md'}`}>
                            Offcanvas
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex justify-content-end'>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas> */}
            </Container>
        </Navbar>
    )
}

export default Header