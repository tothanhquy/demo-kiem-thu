import {Col, Form, Row, Button, Alert} from 'react-bootstrap';
import React, { useState } from 'react';
import CitizenIdentificationCard from "./service/service-identification-card";

function Register() {
  const [number, setNumber] = useState('');
  const handleNumberChange = (event) => {
    setNumber(event.target.value.trim());
  };

  const [message, setMessage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if(number.length !== 12||isNaN(number)){
      setMessage({status: 'warning', content: "Số căn cước phải đủ 12 số"});
      return;
    }

    let decode = CitizenIdentificationCard(number);

    setMessage({status: 'success', content: `Quê quán: ${decode.country} | Giới tính: ${decode.gender} | Năm sinh: ${decode.dateOfBirth}`});
    return;
    
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="4">
          Số căn cước công dân
        </Form.Label>
        <Col sm="8">
          <Form.Control
           type="text" 
           value={number}
            onChange={handleNumberChange}
           placeholder="Số căn cước công dân" />
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
            Phân tích
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Register;