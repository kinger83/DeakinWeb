import React from "react";

const SignUp = () => {
    return (
        <div className="Bar">
            <form action="/" method="post">
		        <div className="container">
		         SIGN UP FOR OUT DAILY INSIDER
                    <input type="email"  name="email" placeholder="Enter Your Email" required="required"/>
                    <button type="submit">SUBSCRIBE</button>
                </div>
            </form> 
        </div>
    )
}

export default SignUp;