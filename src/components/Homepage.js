import React from "react";
import {Image, Card, CardDeck} from 'react-bootstrap';

function Homepage() {

  const img = {
    objectFit: "cover",
  }

  return (
    <div className="mt-3">
        <div className="card border-0 rounded mx-3 mb-5">
            <Image className="card-img main-img" src="https://www.blastanalytics.com/wp-content/uploads/google-consultant-service-header.jpg" alt="Card image" fluid/>
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                <h1 className="card-title h1 card-txt font-weight-bold">ASM produce limited</h1>
            </div>
        </div>

        <CardDeck className="my-5 px-3">
            <Card>
                <Card.Img className={img} variant="top" src="https://designshack.net/wp-content/uploads/placeholder-image.png" />
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
                <Card.Img className={img}  variant="top" src="https://designshack.net/wp-content/uploads/placeholder-image.png" />
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
                <Card.Img className={img}  variant="top" src="https://designshack.net/wp-content/uploads/placeholder-image.png" />
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