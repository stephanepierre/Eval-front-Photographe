import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import emailjs from 'emailjs-com';

function Field ({name, value, onChange, children}) {
    return <div className="formBox">
      <label htmlFor={name}>{children}</label>
      <input type="text" value={value} onChange={onChange} id={name} name={name} className="formContent"/>
    </div>
  }
  function FieldRequired ({name, value, onChange, children}) {
   return <div className="formBox">
     <label htmlFor={name}>{children}</label>
     <input type="text" value={value} onChange={onChange} required id={name} name={name} className="formContent"/>
   </div>
 }
 function FieldTel ({name, value, onChange, children}) {
   return <div className="formBox">
     <label htmlFor={name}>{children}</label>
     <input type="tel" pattern="^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$" value={value} onChange={onChange} id={name} name={name} className="formContent"/>
   </div>
 }
  function EmailBox ({name, value, onChange, children}) {
    return <div className="formBox">
      <label htmlFor={name}>{children}</label>
      <input type="email" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" value={value} onChange={onChange} required id={name} name={name} className="formContent"/>
    </div>
  }
  function TextArea ({name, value, onChange, children}) {
    return <div className="formBox">
      <label htmlFor={name}>{children}</label>
      <textarea rows="20" maxLength="2000" value={value} onChange={onChange} id={name} name={name} className="formContent"/>
    </div>
  }
 
 
  export default class Contact extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        lastName:"",
        firstName:"",
        phone:"",
        email:"",
        message:"",
      }
 
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange (e) {
      const name = e.target.name
      const type = e.target.type
      const value = type === 'checkbox' ? e.target.checked : e.target.value
      this.setState({
        [name]: value
      })
    }
    handleSubmit (e) {
     e.preventDefault();
     this.resetForm();
     alert("Merci pour votre demande de contact")
 
     const {lastName, firstName,  phone, email,  message} = this.state
 
     let templateParams = {
       reply_to: email,
       phone: phone,
       message: message,
       lastName: lastName,
       firstName: firstName
     }
 
     fetch('https://api.emailjs.com/api/v1.0/email/send', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
       },
       body: JSON.stringify(templateParams)
     })
 
     .then((result) => {
         console.log(result.statusText);
     }, (error) => {
         console.log(error.statusText);
     });
    
     e.target.reset();
      emailjs.sendForm(
        'service_93qv2no', 
        'template_igzw23v', 
        e.target, 
        'user_bbkJTiBYlJBDDBKNLxGwT'
     )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    resetForm(){
        this.setState({
            lastName:"",
            firstName:"",
            phone:"",
            email:"",
            message:"",
        })
    }


    render() {
      return (
          <>
          <Navigation/>
            <form className="contactPage" onSubmit={this.handleSubmit}>
                <div className="titlePage">Formulaire de Contact</div>
                <div className="form-content">
            {/* ............................................................................................ */}
                    <div className="lastNameContent">
                    <FieldRequired name="lastName" value={this.state.lastName} onChange={this.handleChange}>Nom *</FieldRequired>
                    </div> 
            {/* ............................................................................................ */}
                    <div className="firstNameContent">
                    <Field name="firstName" value={this.state.firstName} onChange={this.handleChange}>Prénom</Field>
                    </div>
            {/* ............................................................................................ */}
                    <div className="phoneContent">
                    <FieldTel name="phone" value={this.state.phone} onChange={this.handleChange}>Téléphone</FieldTel>
                    </div>
            {/* ............................................................................................ */}
                    <div className="emailContent">
                    <EmailBox name="email" value={this.state.email} onChange={this.handleChange}>Email *</EmailBox>
                    </div>
            {/* ............................................................................................ */}
                    <div className="messageContent">
                    <TextArea name="message" value={this.state.message} onChange={this.handleChange}>Exprimez-vous</TextArea>
                    </div>
            {/* ............................................................................................ */}
                    <input type="submit" value="Envoyer votre demande" className="buttonForm" />
                </div>
            </form>
        <Footer/>
        </>
      )
    }
  }
 