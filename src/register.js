import {Col, Form, Row, Button, Alert} from 'react-bootstrap';
import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = useState('');
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const [comfirmPassword, setComfirmPassword] = useState('');
  const handleComfirmPasswordChange = (event) => {
    setComfirmPassword(event.target.value);
  };

  const [message, setMessage] = useState(null);

  const emailFormatGuide = `
  Sai định dạng email
  <p>Một địa chỉ email hợp lệ phải có định dạng như sau:</p>
  <ul>
    <li>Phần tên người dùng, chứa các ký tự không gian, ký tự chữ cái hoặc số.</li>
    <li>Dấu @.</li>
    <li>Phần tên miền, chứa tên miền cơ bản (ví dụ: gmail, yahoo, hotmail) và tên miền cụ thể (ví dụ: com, org, net).</li>
    <li>Dấu chấm giữa tên miền cơ bản và tên miền cụ thể.</li>
  </ul>
  <p>Ví dụ về một địa chỉ email hợp lệ: <strong>example@example.com</strong></p>
`;

  function validateEmail(email) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Kiểm tra xem địa chỉ email có khớp với biểu thức chính quy không
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
      return passwordRegex.test(password);
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setMessage({status: 'warning', content: emailFormatGuide});
      return;
    }
    if (!validatePassword(password)) {
      setMessage({status: 'warning', content: "Mật khẩu phải chứa ít nhất 8 ký tự, một chữ cái thường, một chữ cái in hoa, một số, và một ký tự đặc biệt."});
      return;
    }
    if(password.length > 0){
      if(password!== comfirmPassword){
        setMessage({status: 'warning', content: "Comfirm Password không khớp"});
        return;
      }
      setMessage({status: 'success', content: "Đăng ký thành công!"});
      return;
    }else{
      setMessage({status: 'warning', content: "Password không bỏ trống"});
      return;
    }
    //const inputValue = e.target.elements.email.value;
    // alert('Submitted value:'+email);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control
           name="email" 
           type="text" 
           value={email}
            onChange={handleEmailChange}
           placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control value={password}
            onChange={handlePasswordChange}
             type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control value={comfirmPassword}
            onChange={handleComfirmPasswordChange}
             type="password" placeholder="Comform Password" />
        </Col>
      </Form.Group>
      
      { message!=null ? (
        <Form.Group as={Row} className="mb-3">
          <Col sm="12">
          <Alert key={message.status} variant={message.status}>
          <div dangerouslySetInnerHTML={{ __html: message.content }}></div>
          </Alert>
          </Col>
        </Form.Group>
      ) : (
        null // Hoặc bạn có thể trả về một phần tử rỗng để không hiển thị gì cả
      )}
      
      <Form.Group as={Row} className="mb-3" controlId="submit">
        <Col sm="12">
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Register;