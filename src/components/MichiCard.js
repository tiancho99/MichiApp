import Card from 'react-bootstrap/Card';

function MichiCard({ michi }) {
    return (
            <Card className='mt-4' style={{ width: '18rem' }}>
                <div class="michi_card_img">
                    <Card.Img variant="top" src={michi["gif_url"]} />
                </div>
                <Card.Body>
                    <Card.Title>{michi["name"]}</Card.Title>
                    <Card.Text>
                        {michi["description"]}
                    </Card.Text>
                </Card.Body>
            </Card>
    );
}

export default MichiCard;