import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact-form.scss';

const ContactForm= () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send('service_5mpt62u', 'template_brml813', formData, 'XAFIhVu6hiyCi8kxS')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        toast.success('Message delivered successfully');
        
        setTimeout(() => {
          setFormData({ from_name: '', reply_to: '', message: '' });
        }, 1000);
      }, (error) => {
        console.log('Failed to send email:', error.text);
        toast.error('Failed to send message.');
      });
  };

  return (
    <div className='contact-form'>
      <form onSubmit={handleSubmit}>
        <div className='form-data'>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder='Name'
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="reply_to"
            placeholder='Email'
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            placeholder='Message'
            name="message"
            rows={10}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
