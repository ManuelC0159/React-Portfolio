import React, {useState} from "react";
import {validateEmail} from "../utils/helpers";

function Contact(){

    const [state, handelSubmit] = useForm(process.env.REACT_APP_FORM_ID);

    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');

    const {name, email, message} = formState;

    if(state.succeed){
        return(
            <div>
                <p>Thanks for Messaging!</p>
                <button onClick={()=> window.open("/#contact")}>Back to About</button>
            </div>
        )
    };

    const handleChange = (e) =>{
        if (e.target.name === "email"){
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setErrorMessage('Your email is not valid');
            }
            else{
                setErrorMessage('');
            }
        }
        else{
            if(!e.target.value.length){
                setErrorMessage('A ${e.target.name} is required')
            } else{
                setErrorMessage('');
            }
        }
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    };

    return(
        <div>
            <p>Contact Me</p>
            <hr />
            <form onSubmit={handelSubmit}>
                <div>
                    <label type ="label">Name</label>
                    <input type ="input"defaultValue = {name} onBlur={handleChange}/>
                </div>
                <div>
                    <label defaultValue={email}>Email Address</label>
                    <input type="input" onBlur={handleChange}/>
                </div>
                <div>
                    <label defaultValue={message}>Message</label>
                    <textarea onBlur={handleChange} rows ="5"></textarea>
                </div>
                {errorMessaage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;