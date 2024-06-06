import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function BT09() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h2>Đăng ký tài khoản</h2>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control placeholder="Ví dụ: Nguyễn Văn A" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control placeholder="Ví dụ: Thanh Xuân, Hà Nội" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Thành phố</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Hà Nội</option>
                <option>...</option>
            </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Quận</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Thanh Xuân</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Mã bưu điện</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button style={{marginLeft:"100px", width:"300px"}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  );
}

export default BT09;