import {Col, Form, Row, Button, Alert} from 'react-bootstrap';
import React, { useState } from 'react';

function PlaintextExample() {
  const [age, setAge] = useState(19);
  const changeAge = (event) => {
    setAge(event.target.value);
  };
  const [c1, setC1] = useState(true);
  const changeC1 = (event) => {
    setC1(a=>!a);
  };
  const [c2, setC2] = useState(false);
  const changeC2 = (event) => {
    setC2(a=>!a);
  };

  const [result, setResult] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if(c1===false){
      if(age<19){
        setResult("Bạn không thể kết hôn.");
      }else{
        if(c2===false){
          setResult("Bạn có thể kết hôn.");
        }else{
          setResult("Bạn không thể kết hôn.");
        }
      }
    }else{
      if(age<21){
        setResult("Bạn không thể kết hôn.");
      }else{
        if(c2===false){
          setResult("Bạn có thể kết hôn.");
        }else{
          setResult("Bạn không thể kết hôn.");
        }
      }
    }

  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Tuổi hiện tại
        </Form.Label>
        <Col sm="9">
          <Form.Control
           type="number" 
           min="1"
           step="1"
           value={age}
            onChange={changeAge}
           placeholder="Tuổi hiện tại" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Check
            type="checkbox"
            label="Giới tính nam"
            checked={c1}
            onChange={changeC1}
          />
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Check
            type="checkbox"
            label="Đang có vợ/chồng"
            checked={c2}
            onChange={changeC2}
          />
      </Form.Group>

      { result!=="" ? (
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
        Kết quả
        </Form.Label>
        <Col sm="9">
          <Form.Control value={result}
          readOnly="true"
             type="text" placeholder="Kết quả" />
        </Col>
      </Form.Group>
      ) : (
        null // Hoặc bạn có thể trả về một phần tử rỗng để không hiển thị gì cả
      )}
      <Form.Group as={Row} className="mb-3" controlId="submit">
        <Col sm="12">
          <Button variant="primary" type="submit">
            Kiểm tra
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default PlaintextExample;