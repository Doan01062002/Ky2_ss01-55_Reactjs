import Alert from 'react-bootstrap/Alert';

function BT05() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Thêm tài khoản thành công
        </Alert>
      ))}
    </>
  );
}

export default BT05;