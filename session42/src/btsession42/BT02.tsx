import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BT02() {
  return (
    <>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
            placeholder='Input cỡ nhỏ'
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <Form.Control
        placeholder='Input cỡ vừa'
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup size="lg">
        <Form.Control
        placeholder='Input cỡ lớn'
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </>
  );
}

export default BT02;