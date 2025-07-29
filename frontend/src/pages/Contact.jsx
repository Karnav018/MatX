import React, { useState } from 'react';
import { useScrollContext } from '../components/ScrollContext';

const Contact = () => {
  // Get the locomotive scroll instance for potential custom effects
  const { scroll: _scroll } = useScrollContext(); // Prefix with underscore to prevent unused var warning
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    } else {
      setFormErrors(errors);
    }
  };
  
  return (
    <div className="min-h-[80vh] bg-matx-primary-900 py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-matx-text-primary overflow-x-hidden" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12 md:mb-16 relative" data-scroll data-scroll-speed="0.3">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-1 bg-matx-accent-light opacity-30 rounded-full blur-sm" data-scroll data-scroll-direction="horizontal" data-scroll-speed="1"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight text-matx-text-primary" data-scroll data-scroll-speed="0.2">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-matx-text-secondary max-w-3xl mx-auto" data-scroll data-scroll-speed="0.4" data-scroll-delay="0.05">
            Have questions about MatX? We're here to help you transform your space with our AR tile visualization technology.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,113,108,0.1),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(168,162,158,0.1),transparent_40%)]" data-scroll data-scroll-speed="-0.3"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16" data-scroll data-scroll-speed="0.1">
            {/* Left Side - Contact Information */}
            <div className="flex flex-col justify-center space-y-10" data-scroll data-scroll-speed="0.3" data-scroll-delay="0.1">
              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-6 group">
                  <div className="bg-matx-accent-dark p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300 mt-1">
                    <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-matx-text-primary mb-2 group-hover:text-matx-accent-light transition-colors duration-300">Email</h3>
                    <p className="text-matx-text-secondary">
                      <a href="mailto:karnav.p.018@gmail.com" className="hover:text-matx-accent-light transition-colors duration-300">
                        karnav.p.018@gmail.com
                      </a>
                    </p>
                    <p className="text-matx-text-secondary text-sm mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-matx-accent-dark p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300 mt-1">
                    <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-matx-text-primary mb-2 group-hover:text-matx-accent-light transition-colors duration-300">Phone</h3>
                    <p className="text-matx-text-secondary">
                      <a href="tel:+11234567890" className="hover:text-matx-accent-light transition-colors duration-300">
                        +1 (123) 456-7890
                      </a>
                    </p>
                    <p className="text-matx-text-secondary text-sm mt-1">
                      Monday to Friday, 9AM to 6PM ET
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="bg-matx-accent-dark p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300 mt-1">
                    <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-matx-text-primary mb-2 group-hover:text-matx-accent-light transition-colors duration-300">Office</h3>
                    <p className="text-matx-text-secondary">
                      123 Tile Street, Design District
                      <br />San Francisco, CA 94107
                    </p>
                    <p className="text-matx-text-secondary text-sm mt-1">
                      Open for in-person demos by appointment
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-6 border-t border-matx-border">
                <h3 className="text-xl font-bold text-matx-text-primary mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="bg-matx-primary-800 p-3 rounded-full hover:bg-matx-accent hover:scale-110 transition-all duration-300">
                    <svg className="h-5 w-5 text-matx-text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-matx-primary-800 p-3 rounded-full hover:bg-matx-accent hover:scale-110 transition-all duration-300">
                    <svg className="h-5 w-5 text-matx-text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-matx-primary-800 p-3 rounded-full hover:bg-matx-accent hover:scale-110 transition-all duration-300">
                    <svg className="h-5 w-5 text-matx-text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-matx-primary-800 p-3 rounded-full hover:bg-matx-accent hover:scale-110 transition-all duration-300">
                    <svg className="h-5 w-5 text-matx-text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Map or Business Hours */}
              <div className="pt-6 border-t border-matx-border">
                <h3 className="text-xl font-bold text-matx-text-primary mb-4">Business Hours</h3>
                <div className="space-y-2 text-matx-text-secondary">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div className="bg-matx-primary-800 rounded-lg border border-matx-border p-4 sm:p-6 md:p-8 shadow-lg relative overflow-hidden">
              {/* Blueprint-style overlay for architectural theme */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 bg-white rounded-lg rotate-12">
                <div className="w-full h-full border-2 border-matx-accent-light border-dashed p-2">
                  <div className="w-full h-full border-2 border-matx-accent-light border-dashed"></div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 opacity-10 bg-white rounded-lg -rotate-12">
                <div className="w-full h-full border-2 border-matx-accent-light border-dashed p-2">
                  <div className="w-full h-full border-2 border-matx-accent-light border-dashed"></div>
                </div>
              </div>
              
              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-600/50 rounded-lg">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-matx-text-primary">Thank you for your message! We'll be in touch shortly.</p>
                  </div>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-matx-text-primary mb-6 relative z-10">Send Us a Message</h3>
              
              <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-matx-text-secondary mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-matx-primary-900 border ${
                        formErrors.name ? 'border-red-500' : 'border-matx-border'
                      } rounded-md text-matx-text-primary placeholder-matx-text-muted focus:outline-none focus:ring-2 focus:ring-matx-accent focus:border-transparent transition-colors duration-200`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-matx-text-secondary mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-matx-primary-900 border ${
                        formErrors.email ? 'border-red-500' : 'border-matx-border'
                      } rounded-md text-matx-text-primary placeholder-matx-text-muted focus:outline-none focus:ring-2 focus:ring-matx-accent focus:border-transparent transition-colors duration-200`}
                      placeholder="johndoe@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-matx-text-secondary mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-matx-primary-900 border border-matx-border rounded-md text-matx-text-primary placeholder-matx-text-muted focus:outline-none focus:ring-2 focus:ring-matx-accent focus:border-transparent transition-colors duration-200"
                    placeholder="What's this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-matx-text-secondary mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-matx-primary-900 border ${
                      formErrors.message ? 'border-red-500' : 'border-matx-border'
                    } rounded-md text-matx-text-primary placeholder-matx-text-muted focus:outline-none focus:ring-2 focus:ring-matx-accent focus:border-transparent transition-colors duration-200 resize-none`}
                    placeholder="How can we help you?"
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                  )}
                </div>
                
                {/* Privacy Policy Agreement */}
                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-0.5">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="focus:ring-matx-accent h-4 w-4 text-matx-accent rounded border-matx-border bg-matx-primary-900 flex-shrink-0"
                      required
                    />
                  </div>
                  <div className="ml-3 text-xs sm:text-sm">
                    <label htmlFor="privacy" className="text-matx-text-secondary">
                      I agree to the <a href="#" className="text-matx-accent-light hover:text-matx-text-primary">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md text-sm sm:text-base font-medium text-matx-text-primary bg-matx-accent hover:bg-matx-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-matx-accent transition-all duration-200 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
