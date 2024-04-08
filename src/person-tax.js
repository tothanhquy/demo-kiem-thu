import {Col, Form, Row, Button, Alert} from 'react-bootstrap';
import React, { useState } from 'react';

function PlaintextExample() {
  const [salary, setSalary] = useState('');
  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };
  const [social, setSocial] = useState(10.5);
  const handleSocialChange = (event) => {
    setSocial(event.target.value);
  };
  const [imdependancePeople, setImdependancePeople] = useState(0);
  const handleImdependancePeopleChange = (event) => {
    setImdependancePeople(event.target.value);
  };

  const [result, setResult] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const calcuSocial = social===""?0:social;
    const calcuImdependancePeople = imdependancePeople===""?0:imdependancePeople;

    if(salary<0){
      setResult("Lương phải >= 0");
      return;
    }

    let calcuSalary = salary-11000000;
    calcuSalary-=calcuSocial*salary/100;
    calcuSalary-=calcuImdependancePeople*4400000;

    if(calcuSalary<0)calcuSalary=0;

    if(calcuSalary>80000000){
      setResult(parseInt(18150000 + 0.35*(calcuSalary-80000000)));
      return;
    } else if(calcuSalary>52000000){
      setResult(parseInt(9750000 + 0.3*(calcuSalary-52000000)));
      return;
    } else if(calcuSalary>32000000){
      setResult(parseInt(4750000 + 0.25*(calcuSalary-32000000)));
      return;
    } else if(calcuSalary>18000000){
      setResult(parseInt(1950000 + 0.2*(calcuSalary-18000000)));
      return;
    } else if(calcuSalary>10000000){
      setResult(parseInt(750000 + 0.15*(calcuSalary-10000000)));
      return;
    } else if(calcuSalary>5000000){
      setResult(parseInt(250000 + 0.10*(calcuSalary-5000000)));
      return;
    }else{
      setResult(parseInt(0.05*(calcuSalary)));
      return;
    }

    
    
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Lương
        </Form.Label>
        <Col sm="9">
          <Form.Control
           name="salary" 
           type="number" 
           min="0"
           value={salary}
            onChange={handleSalaryChange}
           placeholder="Salary" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          % Bảo hiểm xã hội
        </Form.Label>
        <Col sm="9">
          <Form.Control
           type="number" 
           min="0"
           max="100"
           step="0.01"
           value={social}
            onChange={handleSocialChange}
            defaultValue="10.5"
           placeholder="% Bảo hiểm xã hội" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
          Số người phụ thuộc
        </Form.Label>
        <Col sm="9">
          <Form.Control
           type="number" 
           min="0"
           step="1"
           value={imdependancePeople}
            onChange={handleImdependancePeopleChange}
           placeholder="Số người phụ thuộc" />
        </Col>
      </Form.Group>

      { result!=="" ? (
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3">
        Kết quả thuế
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
            Tính thuế
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default PlaintextExample;