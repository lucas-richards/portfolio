"use client"
import React, { useState } from 'react';
import { saveEmail } from '../action';

export default function ContactForm() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('Sending email...');

    const form = e.currentTarget as HTMLFormElement;
    

    const formData = new FormData(form);
    
    formData.get('name') as string,
    formData.get('email') as string,
    formData.get('message') as string,
    

    await saveEmail(formData);
    setSuccessMessage('Email sent successfully!');

    // Reset the form
    form.reset();
  };

  return (
    <div className="mb-5">
      {successMessage ? (
        <h6 className="text-green-600">{successMessage}</h6>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="pl-4 pr-32 py-2 mt-1 focus:ring-mainColor focus:border-mainColor block w-full border-neutral-300 rounded bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="pl-4 pr-32 py-2 mt-1 focus:ring-mainColor focus:border-mainColor block w-full border-neutral-300 rounded bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              className="pl-4 pr-32 py-2 mt-1 focus:ring-mainColor focus:border-mainColor block w-full border-neutral-300 rounded bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center mt-3 p-4 font-medium h-7 bg-mainColor/30 hover:bg-mainColor text-neutral-900 dark:text-neutral-100 rounded w-30"
          >
            Send Email
          </button>
        </form>
      )}
    </div>
  );
}
