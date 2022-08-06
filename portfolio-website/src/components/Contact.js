import React, { useRef, useState }  from 'react';
import emailjs from '@emailjs/browser';
// import { ReactComponent as Logo} from '../images/logo.svg';

const Sent = () => {
  return (
    <p>Your Message was sent succesfully! I would get back to you soon...</p>
  )
};

export const Contact = () => {
    const form = useRef(null); //null
    const [sent, setSent] = useState(false); //
    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('myemail', 'mytemplate', form.current, 'sLWrjDHdJAyh7necd')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        event.target.reset();
        setSent(true);
    };

    setTimeout(() => {
        setSent(false);
    }, 6000)

  return (
    <section id='contact-page'>
        <div className='contact-container'>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" placeholder="Jane Appleseed" required/>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" placeholder="email@example.com" required/>
                <label htmlFor='message'>Message</label>
                <textarea name="message" placeholder="How can i help? " required/>
                <button type="submit" >Send Message</button>
            </form>
            {sent ? <div className="sent-message"><Sent /></div> : null}
        </div>
    </section>
  )
}
