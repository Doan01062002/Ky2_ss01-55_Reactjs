import Nav from 'react-bootstrap/Nav';

function BT08() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Trang chủ</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Giới thiệu</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Liên hệ
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default BT08;