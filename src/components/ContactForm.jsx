import React,{useState} from 'react'
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendEmail(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const sendEmail = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3000/', {
        personalizations: [
          {
            to: [
              {
                email: 'salma.baatout88@gmail.com',
              },
            ],
            subject: `New message from ${formData.name}`,
          },
        ],
        from: {
          email: 'sender-email@example.com',
        },
        content: [
          {
            type: 'text/plain',
            value: formData.message,
          },
        ],
      },
      {
        headers: {
          Authorization: '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',
          'Content-Type': 'application/json',
        },
      });

      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>






  //<div className="wrapper">
    //<form className="form">
      //<div className="pageTitle title">Contactez nous </div>
     // <input type="text" className="name formEntry" placeholder="Name" />
      //<input type="text" className="email formEntry" placeholder="Email"/>
      //<textarea className="message formEntry" placeholder="Message"></textarea>
      //<button className="submit " onClick="thanks()">Send</button>
   // </form>
 // </div>


  )
}

export default ContactForm