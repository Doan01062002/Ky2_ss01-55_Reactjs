import React from 'react'
import Button from '@mui/material/Button';

export default function BT01() {
  return (
    <div>
        <button type="button" className="btn btn-primary">Lưu</button>
        <button type="button" className="btn btn-secondary">Hủy</button>
        <button type="button" className="btn btn-success">Thành công</button>
        <button type="button" className="btn btn-danger">Cảnh báo</button>
        <button type="button" className="btn btn-warning">Báo lỗi</button>
        <button type="button" className="btn btn-info">thông tin</button>
        <button type="button" className="btn btn-link">Đường dẫn</button>
    </div>
  )
}
