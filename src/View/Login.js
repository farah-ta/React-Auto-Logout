import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Styles/Login.css"; 

const Login = (props) => {
     const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ username: "Jenny", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
<p>Please enter password again</p>
 navigate("/dashboard");
    }
else{
    navigate("/login");


}

  };
  return (
    <div>
    <div>
    <Container>
      <Row>
        <Col>
        <div className="leftside">
        <h2>Get the best Offer for yourself</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos? </p>
        
        </div>
        </Col>
        <Col>
        
        
     <Row className="justify-content-md-center"> 
     
     <Col xs={6} className="rightside">
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
    <div className="form-cont md-input">
<input type="text"
        name="Username"
placeholder="Enter Email"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />

</div>
  
<div className="form-cont md-input">
    <input
        type="password"
        name="Password"
placeholder="Enter Password"
        onChange={(e) => setpassword(e.target.value)}
      />
</div>
      <button className="loginbtn" type="submit">
        Submit
      </button>
      </form>
</Col>

</Row>

        
        </Col>
      </Row>
      </Container>



    </div>
   
    </div>
  )
};


export default Login;