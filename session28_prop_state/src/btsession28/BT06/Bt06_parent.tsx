import React from 'react';
import ChildComponent from './Bt06_children';

interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

export default function ParentComponent() {
  const users: User[] = [
    { id: 1, name: 'Nguyễn Văn A', address: 'Hà Đông, Hà Nội', email: 'nguyenvana@gmail.com' },
    { id: 2, name: 'Nguyễn Văn B', address: 'Cầu Giấy, Hà Nội', email: 'nguyenvanb@gmail.com' },
  ];

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ChildComponent users={users} />
    </div>
  );
}