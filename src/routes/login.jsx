import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import {Link, useNavigate} from "react-router-dom";
import {createUserDocFromAuth, signInAuthWithEmailAndPassword, signInWithGooglePopup} from "../utils/firebase";
import {UserContext} from "../context/user.context";




const LoginPage = (props) => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocFromAuth(user)
        setCurrentUser(user)
        navigate("/profile")
    }
    
    const {setCurrentUser} = useContext(UserContext)
    const [contact, setContact] = useState({
        email: '',
        password: ''
    })
    
    const {email, password} = contact;
    const navigate = useNavigate();
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        
        try{
            const {user} = await signInAuthWithEmailAndPassword(email, password)
            setCurrentUser(user)
            navigate("/profile")
        }
        catch(error){
            console.log(error.message);
            if(error.message.includes("wrong-password")){
                alert("Incorrect Username or Password")
            }
        }
    }


    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    
    return (
        <div className="LoginPage" >
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name="email" value={contact.email} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" value={contact.password} />
            </Form.Group>
            
            <Button variant="primary" onClick={handleSubmit}>
                Submit
            </Button>
            <br/>
            <br/>
            <Button variant="primary"  onClick={logGoogleUser}>
                Login With Google
            </Button>
        </Form>
            
            <div>
                <Link to="/signup">Sign up instead!</Link>
            </div>
        </div>
);
}

export default LoginPage