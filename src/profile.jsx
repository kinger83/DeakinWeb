import React, {useEffect, useContext} from "react";
import{getAuth} from "firebase/auth";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {UserContext} from "./context/user.context";

function ProfilePage() {
    const [user, setUser] = useState()
    const {currentUser} = useContext(UserContext)
    
    console.log('Here' + currentUser)
    
    const auth = getAuth();
    const navigate = useNavigate();
    
    const onLogOut = () =>{
        auth.signOut();
        navigate("/")
    }
    
    
    useEffect( ()=>{
        setUser(auth.currentUser)
    }, [])
    
    
    console.log(auth.currentUser);
    return(
        <div>
            <h1>{user ? user.email : "Not Logged In"}'s Profile Page</h1>

            <Button variant="primary"  onClick={onLogOut}>
                Logout
            </Button>
        </div>
    )
}

export default ProfilePage;