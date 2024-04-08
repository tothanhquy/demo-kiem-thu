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
  const [c3, setC3] = useState(false);
  const changeC3 = (event) => {
    setC3(a=>!a);
  };
  const [c4, setC4] = useState(false);
  const changeC4 = (event) => {
    setC4(a=>!a);
  };
  const [c5, setC5] = useState(false);
  const changeC5 = (event) => {
    setC5(a=>!a);
  };
  const [c6, setC6] = useState(false);
  const changeC6 = (event) => {
    setC6(a=>!a);
  };
  const [c7, setC7] = useState(false);
  const changeC7 = (event) => {
    setC7(a=>!a);
  };
  const [c8, setC8] = useState(false);
  const changeC8 = (event) => {
    setC8(a=>!a);
  };
  const [c9, setC9] = useState(false);
  const changeC9 = (event) => {
    setC9(a=>!a);
  };

  const [result, setResult] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if(age<19){
      setResult("Bạn chưa đủ độ tuổi nghĩa vụ.");
      return;
    }
    if(age>27){
      setResult("Bạn đã quá độ tuổi nghĩa vụ.");
      return;
    }
    if(c1===false){
      setResult("Nghĩa vụ chỉ áp dụng với nam giới.");
      return;
    }
    if(c2===false&&age>25){
      setResult("Bạn đã quá độ tuổi nghĩa vụ.");
      return;
    }
    if(c3===true||c4===true||c5===true||c6===true||c7===true||c8===true||(c9===true&&c2===false)){
      setResult("Bạn được hoãn nghĩa vụ.");
      return;
    }

    setResult("Bạn không thuộc diện được hoãn nghĩa vụ.");
    
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
            label="Đã được tạm hoãn do học đại học/ cao đẳng trước đó."
            checked={c2}
            onChange={changeC2}
          />
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Check
            type="checkbox"
            label="Chưa đủ sức khỏe phục vụ tại ngũ theo kết luận của Hội đồng khám sức khỏe."
            checked={c3}
            onChange={changeC3}
          />
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Check
            type="checkbox"
            label="Là lao động duy nhất phải trực tiếp nuôi dưỡng thân nhân không còn khả năng lao động hoặc chưa đến tuổi lao động; trong gia đình bị thiệt hại nặng về người và tài sản do tai nạn, thiên tai, dịch bệnh nguy hiểm gây ra được Ủy ban nhân dân cấp xã xác nhận."
            checked={c4}
            onChange={changeC4}
          />
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Check
            type="checkbox"
            label="Một con của bệnh binh, người nhiễm chất độc da cam suy giảm khả năng lao động từ 61% đến 80%."
            checked={c5}
            onChange={changeC5}
          />
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Check
            type="checkbox"
            label="Có anh, chị hoặc em ruột là hạ sĩ quan, binh sĩ đang phục vụ tại ngũ; hạ sĩ quan, chiến sĩ thực hiện nghĩa vụ tham gia Công an nhân dân."
            checked={c6}
            onChange={changeC6}
          />
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Check
            type="checkbox"
            label="Người thuộc diện di dân, giãn dân trong 03 năm đầu đến các xã đặc biệt khó khăn theo dự án phát triển kinh tế - xã hội của Nhà nước do Ủy ban nhân dân cấp tỉnh trở lên quyết định."
            checked={c7}
            onChange={changeC7}
          />
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Check
            type="checkbox"
            label="Cán bộ, công chức, viên chức, thanh niên xung phong được điều động đến công tác, làm việc ở vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn theo quy định của pháp luật."
            checked={c8}
            onChange={changeC8}
          />
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Check
            type="checkbox"
            label="Đang học tập tại cơ sở giáo dục phổ thông; đang đào tạo trình độ đại học hệ chính quy thuộc cơ sở giáo dục đại học, trình độ cao đẳng hệ chính quy thuộc cơ sở giáo dục nghề nghiệp trong thời gian một khóa đào tạo của một trình độ đào tạo."
            checked={c9}
            onChange={changeC9}
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