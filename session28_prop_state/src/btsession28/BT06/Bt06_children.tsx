import React from 'react';

interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

interface ChildComponentProps {
  users: User[];
}

export default function ChildComponent({ users }: ChildComponentProps) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Địa chỉ: {user.address}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}