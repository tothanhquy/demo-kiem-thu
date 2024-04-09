import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;

import Nav from 'react-bootstrap/Nav';

function AlignmentExample() {
  return (
    <div style={{ width: "100%", height:'100%' ,overflowY:'auto',display:'flex',flexDirection:'column',alignItems:'center' }}>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/person-tax">Thuế cá nhân</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/allow-marry">Điều kiện kết hôn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/citizen-identification-card">Phân tích căn cước công dân</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/driving-license">Phân tích giấy phép lái xe</Nav.Link>
        </Nav.Item>
      </Nav>
      <div style={{ width: "100%", height:'auto', maxWidth:'800px',margin:'100px 0' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default AlignmentExample;