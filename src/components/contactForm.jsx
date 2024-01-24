import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';


export const ContactUs = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
    
  });

  const sendEmail = (e) => {
    e.preventDefault();

    
    

    emailjs.sendForm('service_gxnhh6a', 'template_jzsnuwp', form.current, 'uIfBK9_5KYV5ozxkF')
    .then((result) => {
        console.log(result.text);
        alert("Your message has been sent successfully")
        setFormValues({
            name: "",
            email: "",
            message: "",
            
          });
    }, (error) => {
        console.log(error.text);
    });

}


  return (
    <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })}/>
        <label>Email</label> 
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
        
        </form>
    </StyledContactForm>
  );
};
export default ContactUs



// Styles
const StyledContactForm = styled.div`


  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid var(--link-color);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid var(--link-color);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      
      margin-top: 2rem;
      cursor: pointer;
      background: #6DA4AA;
      color: white;
      border: none;
    }
  }
`;