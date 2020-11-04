import React from "react";
import {Image, Card, CardDeck} from 'react-bootstrap';

function Homepage() {
  return (
    <div className="pt-4">
        <div className="card border-0 rounded mx-3">
            <Image className="card-img main-img" src="https://bmcontent.affino.com/AcuCustom/Sitename/DAM/058/Welsh_Landscape_sheep_Main.jpg" alt="Card image" fluid/>
            <div class="card-img-overlay d-flex align-items-center justify-content-center">
                <h1 class="card-title h2 card-txt font-weight-bold">ASM produce limited</h1>
            </div>
        </div>

        <CardDeck className="p-4">
        <Card>
            <Card.Img variant="top" src="https://bmcontent.affino.com/AcuCustom/Sitename/DAM/058/Welsh_Landscape_sheep_Main.jpg" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card rounded>
            <Card.Img variant="top" src="https://bmcontent.affino.com/AcuCustom/Sitename/DAM/058/Welsh_Landscape_sheep_Main.jpg" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="https://bmcontent.affino.com/AcuCustom/Sitename/DAM/058/Welsh_Landscape_sheep_Main.jpg" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        </CardDeck>
    </div>
  );
}

export default Homepage;