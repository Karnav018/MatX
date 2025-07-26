const Contact = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-zinc-50 to-white py-16 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 animate-fadeIn">
          {/* Left side - Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="transform transition-all duration-300 hover:translate-x-1">
              <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight animate-slideIn">
                Get in Touch
              </h1>
              <p className="mt-4 text-base md:text-lg text-zinc-600 leading-relaxed animate-fadeIn delay-100">
                Have questions about MatX? We're here to help you transform your space with our AR tile visualization technology.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-900">Email</h3>
                  <p className="mt-1 text-sm text-zinc-600">support@matx.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-900">Location</h3>
                  <p className="mt-1 text-sm text-zinc-600">123 Innovation Drive, Tech City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-3 border border-zinc-200 rounded-lg text-zinc-900 placeholder-zinc-400
                            focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent
                            transition-all duration-200 ease-in-out transform hover:shadow-sm
                            hover:border-zinc-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-3 border border-zinc-200 rounded-lg text-zinc-900 placeholder-zinc-400
                            focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent
                            transition-all duration-200 ease-in-out transform hover:shadow-sm
                            hover:border-zinc-300"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="mt-1 block w-full px-4 py-3 border border-zinc-200 rounded-lg text-zinc-900 placeholder-zinc-400
                            focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent
                            transition-all duration-200 ease-in-out transform hover:shadow-sm
                            hover:border-zinc-300 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg
                          text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500
                          transition-all duration-200 ease-in-out transform hover:scale-[1.02]
                          hover:shadow-lg active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
