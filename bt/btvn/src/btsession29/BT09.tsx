import React, { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Hiển thị thông tin từ form
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset giá trị của form
    setEmail('');
    setPassword('');
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>

    <p>Email: {email}</p>
    <p>Mật khẩu: {password}</p>
    </>
    
  );
}