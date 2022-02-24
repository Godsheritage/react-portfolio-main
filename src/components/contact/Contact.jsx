import "./contact.scss";
import Typical from 'react-typical';
const Contact = () => {

  // const [btnDisabled, setBtnDisabled] = useState(true);
  // const [name, setName] = useState('');
  // // const [mail, setEmail] = useState('');
  // const [msg, setMsg] = useState('');
  // const [nameError, setNameError] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [msgError, setMsgError] = useState('');
  




  // const submit = (e) => {
  //   e.preventDefault();
  //   // (name.length >= 5 && emailChange.edsWith('.com') && msg.length >= 10 ) &&
  //  setBtnDisabled(false)
  // }
  // const nameChange = (e) => {
  //   if(e.target.value.length < 4){  
  //     setNameError('name must be up to 4 characters')
  //   }
  //   else{  
  //     setName(e.target.value) 
  //     setNameError('') 
  //   }  
  // }
  // const emailChange = (e) => {
  //   if(!e.target.value.endsWith('.com')){  
  //     setEmailError('Email must end with .com')
  //   }
  //   else{  
  //       setEmail(e.target.value)
  //       setEmailError('') 
  //   }
  // }
  // const msgChange = (e) => {
  //     //  console.log(typeof e.target.value)
  //     setMsg(e.target.value)

  //     if (msg === ' ') {
  //       setMsgError('null') 
  //     }
  //     else if(msg !== '' && msg.length < 10){  
  //       setMsgError('message must be up to 10 characters')
  //     }
  //     else{  
  //       setMsgError('') 
  //     }

  // }


  

 





  return (
    <section className ="contact" id="contact">
      <div className ="get-in-touch">
        <div className ="get-in-touch-1">
          <h2>
             <Typical loop={Infinity} steps={["Get In Touch 📩 ", 1000]} />
          </h2>
          <p>Send your email here!</p>
          <ul className ="social-3" id="menu">
            <li className ="social-items">
              <a
                href="https://wa.me/07085738338"
                target="_blank"
                className ="social-links"
                rel = 'noreferrer'
              >
                <i className ="fab fa-whatsapp fa-sm fasc"></i>
              </a>
            </li>
            <li className ="social-items">
              <a
                href="https://twitter.com/kyng_herit"
                target="_blank"
                className ="social-links"
                rel = 'noreferrer'
              >
                <i className ="fab fa-twitter fa-sm fasc"></i>
              </a>
            </li>
            <li className ="social-items">
              <a
                href="https://www.linkedin.com/in/godsheritage-adeoye "
                target="_blank"
                className ="social-links"
                rel = 'noreferrer'
              >
                <i className ="fab fa-linkedin-in fa-sm fasc"></i>
              </a>
            </li>
            <li className ="social-items">
              <a
                href="https://github.com/Godsheritage"
                target="_blank"
                className ="social-links"
                rel = 'noreferrer'
              >
                <i className ="fab fa-github fa-sm fasc"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className ="img"></div>
      </div>
      <div className ="contact-form">
        <form method="post">
          <div className ="form-control">
            <label for="name">Name</label>
            <input type="text" id="name" name="Name" />
          </div>
          <div className ="form-control">
            <label for="">Email</label>
            <input type="email" id="email" name="email"/>
          </div>
          <div className ="form-control">
            <label for="">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button
            className ="btn-contact"
            id="submit-btn"
            type="submit"
          >
            Send 💨
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
