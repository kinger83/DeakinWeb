import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import {Link} from "react-router-dom";
import {createAuthUserWithEmailAndPassword, createUserDocFromAuth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";


const SignupPage = (props) => {
    const [contact, setContact] = useState({
        displayName:'',
        email: '',
        password: '',
        confirmPassword:''
    })

    const {displayName, email, password, confirmPassword} = contact;
    const navigate = useNavigate();


    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords do not match")
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth(user, {displayName})
            navigate("/login")
        }

        catch (error) {
            console.log(error.message)
        }
    }
    
    


    return (
        <div className="LoginPage" >
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={handleChange} name="displayName" value={contact.displayName} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name="email" value={contact.email}  />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" value={contact.password} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" onChange={handleChange} name="confirmPassword" value={contact.confirmPassword} />
                </Form.Group>


                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>

            <div>
                <Link to="/login">Back to login</Link>
            </div>
        </div>
    );
}

export default SignupPage