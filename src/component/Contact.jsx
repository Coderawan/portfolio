import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css'
const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-info">
        <div className="contact-info-item">
          <FaEnvelope className="contact-info-icon" />
          <p>awanabdullah705@gmail.com</p>
        </div>
        <div className="contact-info-item">
          <FaPhoneAlt className="contact-info-icon" />
          <p>+92-317-3754851</p>
        </div>
        <div className="contact-info-item">
          <FaMapMarkerAlt className="contact-info-icon" />
          <p>Saddar Hyderabad</p>
        </div>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className="contact-form">
            <div className="contact-form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="contact-form-error" />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="contact-form-error" />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" className="contact-form-error" />
            </div>
            <button type="submit" disabled={isSubmitting} className="contact-form-button">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
      {/* <div className="contact-links">
        <Link to="/" className="contact-link">Home</Link>
        <Link to="/service" className="contact-link">Service</Link>
      </div> */}
    </div>
  );
};

export default Contact;