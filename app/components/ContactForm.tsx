"use client"
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Implement the email sending logic here using a backend service or serverless function.
    console.log('Sending email:', formData);

    setTimeout(() => {
        setSuccessMessage('Email sent successfully!')
      }, 2000);

    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='mb-5'>
        {successMessage ? (
        <h6 className="text-green-600">{successMessage}</h6>
      ) : (
        
            <form 
            onSubmit={handleSubmit}
            >
                <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-4 pr-32 py-2 mt-1 focus:ring-mainColor focus:border-mainColor block w-full border-neutral-300 rounded bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" 
                    />
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-4 pr-32 py-2 mt-1 focus:ring-mainColor focus:border-mainColor block w-full border-neutral-300 rounded bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" 
                    />
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="pl-4 pr-32 py-2 mt-1 focus:ring-mainColor focus:border-mainColor block w-full border-neutral-300 rounded bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" 
                    />
                </div>
                <button 
                    type="submit"
                    className="flex items-center justify-center mt-3 p-4 font-medium h-7 bg-mainColor/30 hover:bg-mainColor text-neutral-900 dark:text-neutral-100 rounded w-30"
                >Send Email</button>
            </form>
        )}
    </div>
  );
};

export default ContactForm;