import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function BT10() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nguyễn Văn A</td>
          <td>Nam</td>
          <td>01/06/2002</td>
          <td>nguyenvana@gmail.com</td>
          <td>Hà Nội</td>
          <td>
            <Button variant="warning">Sửa</Button>{' '}
            <Button variant="danger">Xóa</Button>{' '}
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Nguyễn Văn B</td>
          <td>Nam</td>
          <td>01/06/2002</td>
          <td>nguyenvanb@gmail.com</td>
          <td>Hồ Chí Minh</td>
          <td>
            <Button variant="warning">Sửa</Button>{' '}
            <Button variant="danger">Xóa</Button>{' '}
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Nguyễn Văn C</td>
          <td>Nam</td>
          <td>01/06/2002</td>
          <td>nguyenvanc@gmail.com</td>
          <td>Hà Nội</td>
          <td>
            <Button variant="warning">Sửa</Button>{' '}
            <Button variant="danger">Xóa</Button>{' '}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BT10;