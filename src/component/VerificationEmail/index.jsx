import React, {useState} from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { resendEmailAddressToken } from "../../redux/actions/user.action";
const VerificationEmail = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const handleResentEmail = async() => {
        try{
            setLoading(true);
           await dispatch(resendEmailAddressToken());
            setLoading(false);
        }catch(e){
            setLoading(false);
        }
    }
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
                <button id="resend-email" className="btn btn-primary btn-lg" onClick={handleResentEmail}>
                   {
                    loading ? <div className="d-flex justify-content-center align-items-center">
                         <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
                    </div> : "Resend Verification Email"
                   }
                </button>
            </div>
        </div>
    </div>
  );
};

export default VerificationEmail;
