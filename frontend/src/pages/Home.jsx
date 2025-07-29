import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-[80vh] bg-matx-primary-900 -mt-12 pb-8 sm:pb-12 md:pb-16 text-matx-text-primary">{/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,113,108,0.1),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(168,162,158,0.1),transparent_40%)]"
         
        ></div>
        
        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 md:pt-32 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-matx-accent/20 mb-6">
                  <span className="text-matx-accent-light text-xs sm:text-sm font-medium">Revolutionizing Tile Selection</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-matx-text-primary">
                  Visualize Tiles <span className="text-matx-accent-light">in Your Space</span> Before You Buy
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-matx-text-secondary max-w-lg">
                  Experience the future of home renovation with our AR-powered tile visualization tool. See exactly how tiles will look in your space in real-time.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/gallery" className="group w-full sm:w-auto">
                    <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-matx-accent hover:bg-matx-accent-dark rounded-md text-matx-text-primary font-medium shadow-lg transition duration-300 active:scale-95 touch-manipulation">
                      <span>Explore Tiles</span>
                      <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </Link>
                  <Link to="/how-it-works" className="group w-full sm:w-auto">
                    <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-transparent hover:bg-matx-primary-800 border border-matx-border hover:border-matx-accent rounded-md text-matx-text-secondary hover:text-matx-text-primary font-medium transition duration-300 active:scale-95 touch-manipulation">
                      <span>How It Works</span>
                      <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Hero Image/AR Demo Visualization */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-2xl border border-matx-border z-10">
                  <div className="aspect-[4/3] w-full max-w-lg bg-matx-primary-800 flex items-center justify-center">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-matx-primary-800/40 to-matx-primary-900/90 z-10"></div>
                      <img 
                        src="/src/assets/Tiles/tile8.png" 
                        alt="Tile pattern" 
                        className="absolute w-full h-full object-cover opacity-40"
                      />
                    </div>
                    <div className="relative z-20 flex flex-col items-center text-center p-4">
                      <svg className="h-16 w-16 text-matx-accent animate-pulse mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-xl font-bold mb-2 text-matx-text-primary">See It In Your Space</h3>
                      <p className="text-matx-text-secondary text-sm mb-4">Experience tiles in your environment with our AR technology</p>
                      <button className="flex items-center space-x-2 bg-matx-accent/80 hover:bg-matx-accent px-4 py-2 rounded-md text-matx-text-primary text-sm font-medium">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span>Try AR Demo</span>
                      </button>
                    </div>
                    
                    {/* AR Interface elements */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
                      <div className="w-8 h-8 rounded-md bg-matx-primary-900/50 backdrop-blur-sm flex items-center justify-center">
                        <svg className="h-4 w-4 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 rounded-md bg-matx-primary-900/50 backdrop-blur-sm flex items-center justify-center">
                        <svg className="h-4 w-4 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10 bg-white rounded-lg rotate-12 z-0">
                  <div className="w-full h-full border-2 border-matx-accent-light border-dashed p-2">
                    <div className="w-full h-full border-2 border-matx-accent-light border-dashed"></div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 opacity-10 bg-white rounded-lg -rotate-12 z-0">
                  <div className="w-full h-full border-2 border-matx-accent-light border-dashed p-2">
                    <div className="w-full h-full border-2 border-matx-accent-light border-dashed"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-matx-text-primary">
              Features that <span className="text-matx-accent-light">Simplify Your Decision</span>
            </h2>
            <p className="text-matx-text-secondary max-w-2xl mx-auto">
              Our AR technology makes tile selection intuitive and stress-free with these powerful features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="bg-matx-primary-800 rounded-lg p-6 border border-matx-border hover:border-matx-accent transition-colors duration-300 group">
              <div className="bg-matx-accent-dark p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-matx-text-primary group-hover:text-matx-accent-light transition-colors duration-300">Real-time Surface Detection</h3>
              <p className="text-matx-text-secondary">
                Advanced algorithms automatically detect floors, walls, and surfaces in your space instantly through your device camera.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-matx-primary-800 rounded-lg p-6 border border-matx-border hover:border-matx-accent transition-colors duration-300 group">
              <div className="bg-matx-accent-dark p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-matx-text-primary group-hover:text-matx-accent-light transition-colors duration-300">Extensive Tile Library</h3>
              <p className="text-matx-text-secondary">
                Browse our comprehensive catalog with hundreds of tile options, including ceramic, porcelain, natural stone, and more.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-matx-primary-800 rounded-lg p-6 border border-matx-border hover:border-matx-accent transition-colors duration-300 group">
              <div className="bg-matx-accent-dark p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-matx-text-primary group-hover:text-matx-accent-light transition-colors duration-300">Customization Options</h3>
              <p className="text-matx-text-secondary">
                Adjust grout size, rotate patterns, scale tiles, and experiment with different layouts to find your perfect match.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-matx-primary-800 rounded-lg p-6 border border-matx-border hover:border-matx-accent transition-colors duration-300 group">
              <div className="bg-matx-accent-dark p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-matx-text-primary group-hover:text-matx-accent-light transition-colors duration-300">Material Estimation</h3>
              <p className="text-matx-text-secondary">
                Calculate the number of tiles needed and get cost estimates based on your selected area and tile choices.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-matx-primary-800 rounded-lg p-6 border border-matx-border hover:border-matx-accent transition-colors duration-300 group">
              <div className="bg-matx-accent-dark p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-matx-text-primary group-hover:text-matx-accent-light transition-colors duration-300">Lighting Simulation</h3>
              <p className="text-matx-text-secondary">
                See how different lighting conditions affect your tile selection with our advanced lighting simulation technology.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-matx-primary-800 rounded-lg p-6 border border-matx-border hover:border-matx-accent transition-colors duration-300 group">
              <div className="bg-matx-accent-dark p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-matx-text-primary group-hover:text-matx-accent-light transition-colors duration-300">Share & Collaborate</h3>
              <p className="text-matx-text-secondary">
                Capture screenshots of your designs and share them easily with family, friends, or contractors for feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section (Brief) */}
      <section className="py-16 md:py-24 bg-matx-primary-800/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,113,108,0.05),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(120,113,108,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-matx-text-primary">
              How MatX <span className="text-matx-accent-light">Works</span>
            </h2>
            <p className="text-matx-text-secondary max-w-2xl mx-auto">
              Experience the simplicity of our AR tile visualization process in just a few steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-matx-primary-900 border border-matx-border w-16 h-16 rounded-full flex items-center justify-center mb-6 relative">
                <span className="text-2xl font-bold text-matx-accent-light">1</span>
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-matx-border hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-matx-text-primary">Browse Tile Collection</h3>
              <p className="text-matx-text-secondary">
                Explore our extensive catalog and filter by material, color, style, or size to find your perfect tile match.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-matx-primary-900 border border-matx-border w-16 h-16 rounded-full flex items-center justify-center mb-6 relative">
                <span className="text-2xl font-bold text-matx-accent-light">2</span>
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-matx-border hidden md:block"></div>
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-matx-border hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-matx-text-primary">Launch AR Visualizer</h3>
              <p className="text-matx-text-secondary">
                Activate our AR mode with a single tap and point your camera at the surface you want to visualize.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-matx-primary-900 border border-matx-border w-16 h-16 rounded-full flex items-center justify-center mb-6 relative">
                <span className="text-2xl font-bold text-matx-accent-light">3</span>
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-matx-border hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-matx-text-primary">See & Customize</h3>
              <p className="text-matx-text-secondary">
                View tiles in your space in real-time, adjust settings, and capture images to save or share your design.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-matx-primary-900 hover:bg-matx-primary-800 border border-matx-border hover:border-matx-accent rounded-md text-matx-text-primary font-medium transition duration-300 group">
                <span>Learn More About the Process</span>
                <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(120,113,108,0.1),transparent_30%),radial-gradient(circle_at_90%_50%,rgba(168,162,158,0.1),transparent_30%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-matx-text-primary">
              What Our Users <span className="text-matx-accent-light">Say</span>
            </h2>
            <p className="text-matx-text-secondary max-w-2xl mx-auto">
              Real experiences from homeowners, designers and contractors who transformed their projects with MatX
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-matx-primary-800 rounded-lg p-6 border border-matx-border">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-matx-accent flex items-center justify-center text-matx-text-primary font-bold text-xl">
                    A
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-matx-text-primary">Amy R.</h4>
                  <p className="text-sm text-matx-text-secondary">Homeowner</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-matx-accent-light" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-matx-text-secondary italic">
                "MatX saved me from making a costly mistake. Being able to see how different tiles looked in my kitchen before buying gave me confidence in my final choice. The AR experience was incredibly realistic!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-matx-primary-800 rounded-lg p-6 border border-matx-border">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-matx-accent flex items-center justify-center text-matx-text-primary font-bold text-xl">
                    M
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-matx-text-primary">Michael T.</h4>
                  <p className="text-sm text-matx-text-secondary">Interior Designer</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-matx-accent-light" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-matx-text-secondary italic">
                "As a designer, I need to show clients how materials will look in their space. MatX has become an indispensable tool in my consultation process. My clients love seeing their vision come to life!"
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-matx-primary-800 rounded-lg p-6 border border-matx-border">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-matx-accent flex items-center justify-center text-matx-text-primary font-bold text-xl">
                    J
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-matx-text-primary">James L.</h4>
                  <p className="text-sm text-matx-text-secondary">Contractor</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-matx-accent-light" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-matx-text-secondary italic">
                "The material estimation feature has saved me hours of work on quotes. The AR visualization helps my clients make decisions faster, leading to shorter project timelines and happier customers."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-matx-primary-800 rounded-lg p-8 md:p-12 border border-matx-border shadow-lg overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <div className="w-full h-full border-2 border-matx-accent-light border-dashed rotate-12"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
              <div className="w-full h-full border-2 border-matx-accent-light border-dashed -rotate-12"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-matx-text-primary">
                Ready to <span className="text-matx-accent-light">Transform</span> Your Space?
              </h2>
              <p className="text-lg md:text-xl text-matx-text-secondary mb-8 max-w-2xl mx-auto">
                Join thousands of homeowners, designers, and contractors who are visualizing their perfect spaces with MatX.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/gallery">
                  <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 bg-matx-accent hover:bg-matx-accent-dark rounded-md text-matx-text-primary font-medium shadow-lg transition duration-300 group">
                    <span>Start Visualizing</span>
                    <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 bg-transparent hover:bg-matx-primary-900 border border-matx-border hover:border-matx-accent rounded-md text-matx-text-secondary hover:text-matx-text-primary font-medium transition-all duration-300">
                    <span>Contact Us</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
