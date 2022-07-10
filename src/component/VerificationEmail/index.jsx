import React from "react";
import "./style.scss";
const VerificationEmail = () => {
  return (
    <div className="verification-container ">
        <div className="content-container-verify">
            <div style={{borderBottom: 0}}>
                <h3 className="text"  style={{lineHeight: 1.3, fontSize: '28px'}}>
                    Thanks for signing up to Blogisity! <br />
                  
                </h3>
                <h4>
                <small>Please check your email and click on the validation link to proceed.</small>
                </h4>
            </div>
            <div >
                <button id="resend-email" className="btn btn-primary btn-lg">
                    Resend Verification Email 
                </button>
            </div>
        </div>
    </div>
  );
};

export default VerificationEmail;
