import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BT03() {
  return (
    <div style={{display:"flex", gap:"20px"}}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://24hstore.vn/upload_images/images/SEO/macbook-air-13-inch-2018-01.jpg" />
            <Card.Body>
              <Card.Title>Macbook Air 2018</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div style={{display:"flex", gap:"20px"}}>
                <Button variant="primary">Xem chi tiết</Button>
                <h4>30.000.000</h4>
              </div>
              
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://24hstore.vn/upload_images/images/SEO/macbook-air-13-inch-2018-01.jpg" />
            <Card.Body>
              <Card.Title>Macbook Pro 2019</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div style={{display:"flex", gap:"20px"}}>
                <Button variant="primary">Xem chi tiết</Button>
                <h4>30.000.000</h4>
              </div>
            </Card.Body>
        </Card>
    </div>
    
  );
}

export default BT03;