import React from "react";
import { Navigate, useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import "../Styles/dashboard.css"; 
import { Container } from "react-bootstrap";

    const Dashboard = () => {
        const navigate=useNavigate();
          const [authenticated, setauthenticated] = useState();
          useEffect(() => {
            const loggedInUser = localStorage.getItem("authenticated");
 if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
else{
    navigate("/login");
}
  }, []);

            
  return (
    <div className="dashboard">
   <Container>
<h2>Welcome to your Dashboard</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos? </p>
        </Container>    

</div>
  );
}
    export default Dashboard;