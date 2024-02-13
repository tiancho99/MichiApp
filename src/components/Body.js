import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MichiCard from './MichiCard';

const Body = () => {
    const michiapi_endpoint = process.env.REACT_APP_MICHIAPI_ENDPOINT
    const [michis, setMichis] = useState([])

    useEffect(() => {
        fetch(`${michiapi_endpoint}/michis`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data["data"])
                setMichis(data["data"])
            })

            .catch((err) => {
                console.log(err)
            })
        }, [])

    return (
        <Container>
            <Row >
                {michis.map((michi) => (
                    <Col className='d-flex justify-content-center' xs={12} sm={6} md={4} xl={3}>
                        <MichiCard michi={michi}></MichiCard>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Body