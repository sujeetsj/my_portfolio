import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/mrgnypzp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        formSuccess();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      toast.error('Failed to send your message. Please try again.');
    }
  };

  const formSuccess = () => {
    toast.success('Thanks for submitting your query!');
    document.getElementById('queryForm').reset();
  };

  return (
    <>
      <ToastContainer />

      <form id='queryForm' onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group mb-3'>
              <input
                type='text'
                name='from_name'
                placeholder='Name*'
                {...register('from_name', {
                  required: '*Name is required',
                })}
                className='form-control theme-light'
              />
              {errors.from_name?.message && (
                <span className='invalid-feedback'>
                  {errors.from_name?.message}
                </span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className='col-md-6'>
            <div className='form-group mb-3'>
              <input
                className='form-control theme-light'
                type='text'
                name='reply_to'
                placeholder='Email*'
                {...register('reply_to', {
                  required: '*Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.reply_to?.message && (
                <span className='invalid-feedback'>
                  {errors.reply_to?.message}
                </span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className='col-12'>
            <div className='form-group mb-3'>
              <input
                className='form-control theme-light'
                type='text'
                name='subject'
                placeholder='Subject*'
                {...register('subject', {
                  required: '*Subject is required',
                  minLength: {
                    value: 10,
                    message: 'Minimum 10 characters required',
                  },
                })}
              />
              {errors.subject?.message && (
                <span className='invalid-feedback'>{errors.subject?.message}</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className='col-12'>
            <div className='form-group mb-3'>
              <textarea
                className='form-control theme-light'
                rows='4'
                name='message'
                placeholder='Your message*'
                {...register('message', {
                  required: '*Message is required',
                  minLength: {
                    value: 20,
                    message: 'Minimum 20 characters required',
                  },
                  maxLength: {
                    value: 500,
                    message: 'Maximum 500 characters allowed',
                  },
                })}
              ></textarea>
              {errors.message?.message && (
                <span className='invalid-feedback'>{errors.message?.message}</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className='col-12'>
            <div className='btn-bar'>
              <button type='submit' className='px-btn px-btn-white'>Send Message</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>
    </>
  );
};

export default Contact;
