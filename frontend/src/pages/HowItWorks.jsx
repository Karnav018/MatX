import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="min-h-[80vh] bg-matx-primary-900 py-12 md:py-16 overflow-x-hidden text-matx-text-primary">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 relative px-4">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-1 bg-matx-accent-light opacity-30 rounded-full blur-sm"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-matx-text-primary">
            How MatX Works
          </h1>
          <p className="text-lg sm:text-xl text-matx-text-secondary max-w-3xl mx-auto">
            Transform your space with our professional AR tile visualization technology
          </p>
          
          {/* Mobile scrolling hint */}
          <div className="mt-10 md:hidden flex flex-col items-center animate-bounce">
            <p className="text-matx-text-secondary text-sm mb-2">Scroll to explore</p>
            <svg className="h-6 w-6 text-matx-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        {/* Process Steps - Horizontal Timeline */}
        <div className="relative mb-24 md:mb-32 px-2 sm:px-0">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-matx-border-light opacity-50"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {/* Step 1 */}
            <div className="relative group">
              {/* Timeline marker - Only visible on md and larger screens */}
              <div className="hidden md:flex absolute -top-3 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-matx-text-primary border-4 border-matx-accent z-10 group-hover:scale-125 transition-all duration-300"></div>
              
              {/* Number indicator - Only visible on smaller screens */}
              <div className="md:hidden absolute -top-2 -left-2 w-8 h-8 rounded-full bg-matx-accent text-matx-text-primary flex items-center justify-center font-bold text-lg z-10">1</div>
              
              <div className="bg-matx-primary-800 p-6 sm:p-8 rounded-lg border border-matx-border transform transition-all duration-300 hover:shadow-lg group-hover:-translate-y-2">
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="bg-matx-accent-dark p-4 sm:p-5 rounded-lg shadow-lg">
                    <svg className="h-10 w-10 sm:h-12 sm:w-12 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-matx-text-primary text-center mb-3 sm:mb-4">Browse Collection</h3>
                <p className="text-matx-text-secondary text-center">
                  Explore our extensive gallery of architectural tiles with powerful filtering tools to find your perfect style.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group mt-8 md:mt-0">
              {/* Timeline marker - Only visible on md and larger screens */}
              <div className="hidden md:flex absolute -top-3 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-matx-text-primary border-4 border-matx-accent z-10 group-hover:scale-125 transition-all duration-300"></div>
              
              {/* Number indicator - Only visible on smaller screens */}
              <div className="md:hidden absolute -top-2 -left-2 w-8 h-8 rounded-full bg-matx-accent text-matx-text-primary flex items-center justify-center font-bold text-lg z-10">2</div>
              
              <div className="bg-matx-primary-800 p-6 sm:p-8 rounded-lg border border-matx-border transform transition-all duration-300 hover:shadow-lg group-hover:-translate-y-2">
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="bg-matx-accent-dark p-4 sm:p-5 rounded-lg shadow-lg">
                    <svg className="h-10 w-10 sm:h-12 sm:w-12 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-matx-text-primary text-center mb-3 sm:mb-4">Launch AR Mode</h3>
                <p className="text-matx-text-secondary text-center">
                  One-tap access to our AR visualizer from any tile. Simply allow camera access and you're ready to visualize.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group mt-8 md:mt-0">
              {/* Timeline marker - Only visible on md and larger screens */}
              <div className="hidden md:flex absolute -top-3 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-matx-text-primary border-4 border-matx-accent z-10 group-hover:scale-125 transition-all duration-300"></div>
              
              {/* Number indicator - Only visible on smaller screens */}
              <div className="md:hidden absolute -top-2 -left-2 w-8 h-8 rounded-full bg-matx-accent text-matx-text-primary flex items-center justify-center font-bold text-lg z-10">3</div>
              
              <div className="bg-matx-primary-800 p-6 sm:p-8 rounded-lg border border-matx-border transform transition-all duration-300 hover:shadow-lg group-hover:-translate-y-2">
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="bg-matx-accent-dark p-4 sm:p-5 rounded-lg shadow-lg">
                    <svg className="h-10 w-10 sm:h-12 sm:w-12 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-matx-text-primary text-center mb-3 sm:mb-4">Transform Your Space</h3>
                <p className="text-matx-text-secondary text-center">
                  Watch as your floors and walls transform instantly with photorealistic tile renderings in your actual space.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mobile indicator dots - Only visible on small screens */}
          <div className="flex justify-center mt-8 md:hidden">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-matx-accent"></div>
              <div className="w-2 h-2 rounded-full bg-matx-border"></div>
              <div className="w-2 h-2 rounded-full bg-matx-border"></div>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mt-16 md:mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,113,108,0.1),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(168,162,158,0.1),transparent_40%)]"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-matx-primary-800 mb-4 sm:mb-6">
                <span className="text-matx-accent-light text-xs sm:text-sm font-medium">Powered by cutting-edge technology</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-matx-text-primary mb-3 md:mb-4 text-center px-4">
                Advanced AR Technology
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-matx-accent opacity-50 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center px-4 sm:px-0">
              <div className="order-2 md:order-1">
                <div className="space-y-8 md:space-y-10">
                  <div className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mt-1">
                        <div className="bg-matx-accent-dark p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0" style={{width: "fit-content"}}>
                          <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-matx-text-primary mb-2 group-hover:text-matx-accent-light transition-colors duration-300 text-center sm:text-left">Advanced Surface Mapping</h3>
                        <p className="text-matx-text-secondary leading-relaxed">
                          Our proprietary algorithms precisely detect and map floors, walls, and complex architectural surfaces in real-time, ensuring perfect tile placement regardless of lighting conditions or surface texture.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mt-1">
                        <div className="bg-matx-accent-dark p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0" style={{width: "fit-content"}}>
                          <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-matx-text-primary mb-2 group-hover:text-matx-accent-light transition-colors duration-300 text-center sm:text-left">Dynamic Lighting & Reflections</h3>
                        <p className="text-matx-text-secondary leading-relaxed">
                          MatX constantly adapts to your environment's lighting conditions, rendering physically accurate reflections, shadows, and highlights that make tiles look like they're already installed in your space.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mt-1">
                        <div className="bg-matx-accent-dark p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0" style={{width: "fit-content"}}>
                          <svg className="h-6 w-6 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-matx-text-primary mb-2 group-hover:text-matx-accent-light transition-colors duration-300 text-center sm:text-left">True-to-Scale Rendering</h3>
                        <p className="text-matx-text-secondary leading-relaxed">
                          Every tile is displayed at its exact physical dimensions with precise grout lines, textures, and edge details, providing an unparalleled level of realism for your architectural and interior design planning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative">
                  {/* Main AR visualization display */}
                  <div id="ar-demo" className="relative z-10 rounded-lg overflow-hidden shadow-lg border border-matx-border">
                    <div className="aspect-[4/3] bg-matx-primary-800 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* This would ideally be a video or animated demo */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,162,158,0.05),transparent_70%)]"></div>
                        <div className="flex flex-col items-center justify-center h-full p-4 sm:p-6">
                          <svg className="h-16 w-16 sm:h-20 sm:w-20 text-matx-accent animate-pulse mb-4 sm:mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <p className="text-xl sm:text-2xl font-bold text-matx-text-primary mb-2">AR Visualization</p>
                          <p className="text-sm sm:text-base text-matx-text-secondary text-center max-w-xs">Experience real-time architectural tile visualization with photorealistic rendering in your space</p>
                          
                          {/* Play button - more touch-friendly on mobile */}
                          <button className="mt-6 sm:mt-8 flex items-center space-x-2 bg-matx-accent hover:bg-matx-accent-dark px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-matx-text-primary font-medium shadow-lg transform transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            <span>Watch Demo</span>
                          </button>
                        </div>
                        
                        {/* UI elements overlay - optimized for touch on mobile */}
                        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex space-x-2 sm:space-x-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-matx-primary-900/50 backdrop-blur-sm flex items-center justify-center touch-manipulation">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </div>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-matx-primary-900/50 backdrop-blur-sm flex items-center justify-center touch-manipulation">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 md:mt-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,113,108,0.1),transparent_40%),radial-gradient(circle_at_30%_70%,rgba(120,113,108,0.1),transparent_40%)]"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-12 md:mb-16">
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-matx-primary-800 mb-4 sm:mb-6">
                <span className="text-matx-accent-light text-xs sm:text-sm font-medium">Have questions?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-matx-text-primary mb-3 md:mb-4 text-center px-4">
                Frequently Asked Questions
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-matx-accent opacity-50 rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-matx-primary-800 p-6 sm:p-8 rounded-lg border border-matx-border transform transition-all duration-300 hover:border-matx-accent hover:shadow-lg group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 mb-3 sm:mb-0">
                      <div className="bg-matx-accent-dark p-2 rounded-md shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0" style={{width: "fit-content"}}>
                        <svg className="h-5 w-5 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-matx-text-primary group-hover:text-matx-accent-light transition-colors duration-300 text-center sm:text-left">
                      What devices support MatX?
                    </h3>
                  </div>
                  <p className="text-matx-text-secondary sm:ml-10 text-center sm:text-left">
                    MatX works on modern smartphones and tablets with AR capabilities. For the best experience, we recommend devices with iOS 12+ or Android 8.0+ that support ARKit or ARCore respectively.
                  </p>
                </div>
                
                <div className="bg-matx-primary-800 p-6 sm:p-8 rounded-lg border border-matx-border transform transition-all duration-300 hover:border-matx-accent hover:shadow-lg group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 mb-3 sm:mb-0">
                      <div className="bg-matx-accent-dark p-2 rounded-md shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0" style={{width: "fit-content"}}>
                        <svg className="h-5 w-5 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-matx-text-primary group-hover:text-matx-accent-light transition-colors duration-300 text-center sm:text-left">
                      Need to download an app?
                    </h3>
                  </div>
                  <p className="text-matx-text-secondary sm:ml-10 text-center sm:text-left">
                    No installation needed! MatX is a web-based platform that works directly in your browser. Simply visit our website, allow camera access when prompted, and start visualizing.
                  </p>
                </div>
                
                <div className="bg-matx-primary-800 p-6 sm:p-8 rounded-lg border border-matx-border transform transition-all duration-300 hover:border-matx-accent hover:shadow-lg group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 mb-3 sm:mb-0">
                      <div className="bg-matx-accent-dark p-2 rounded-md shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0" style={{width: "fit-content"}}>
                        <svg className="h-5 w-5 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-matx-text-primary group-hover:text-matx-accent-light transition-colors duration-300 text-center sm:text-left">
                      Can I share visualizations?
                    </h3>
                  </div>
                  <p className="text-matx-text-secondary sm:ml-10 text-center sm:text-left">
                    Absolutely! Capture screenshots of your AR visualizations to save or share with friends, family, and contractors to help with your renovation decisions.
                  </p>
                </div>
                
                <div className="bg-matx-primary-800 p-6 sm:p-8 rounded-lg border border-matx-border transform transition-all duration-300 hover:border-matx-accent hover:shadow-lg group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 mb-3 sm:mb-0">
                      <div className="bg-matx-accent-dark p-2 rounded-md shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0" style={{width: "fit-content"}}>
                        <svg className="h-5 w-5 text-matx-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-matx-text-primary group-hover:text-matx-accent-light transition-colors duration-300 text-center sm:text-left">
                      How accurate are colors?
                    </h3>
                  </div>
                  <p className="text-matx-text-secondary sm:ml-10 text-center sm:text-left">
                    While we strive for the most accurate representation possible, we recommend ordering physical samples for final color verification before large purchases.
                  </p>
                </div>
              </div>
              
              {/* More questions CTA */}
              <div className="mt-8 md:mt-12 text-center">
                <Link to="/contact" className="inline-flex items-center justify-center space-x-2 text-matx-accent-light hover:text-matx-text-primary transition-colors duration-300 group touch-manipulation py-2">
                  <span>Have more questions?</span>
                  <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 md:mt-32 mb-12 md:mb-16 relative px-4 sm:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,113,108,0.1),transparent_70%)]"></div>
          
          <div className="relative z-10 bg-matx-primary-800 p-8 sm:p-12 md:p-16 rounded-lg border border-matx-border shadow-lg overflow-hidden">
            {/* Architectural blueprint decorative elements */}
            <div className="absolute top-0 left-0 w-40 sm:w-64 h-40 sm:h-64 opacity-10">
              <div className="w-full h-full border-2 border-matx-accent-light border-dashed rotate-12"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-40 sm:w-64 h-40 sm:h-64 opacity-10">
              <div className="w-full h-full border-2 border-matx-accent-light border-dashed -rotate-12"></div>
            </div>
            
            <div className="relative z-20 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-matx-text-primary mb-4 md:mb-6 leading-tight">
                Ready to <span className="text-matx-accent-light">Transform Your Space</span>?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-matx-text-secondary mb-6 sm:mb-10 max-w-2xl mx-auto">
                Explore our extensive architectural tile collection and visualize them in your space with our professional AR technology
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
                <Link to="/gallery" className="group w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-matx-accent hover:bg-matx-accent-dark rounded-md text-matx-text-primary font-medium shadow-lg transition duration-300 active:scale-95 touch-manipulation">
                    <span>Browse Tile Collection</span>
                    <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </Link>
                
                <a href="#ar-demo" className="w-full sm:w-auto flex items-center justify-center space-x-3 px-6 sm:px-8 py-3 md:py-4 bg-transparent hover:bg-matx-primary-900 border border-matx-border hover:border-matx-accent rounded-md text-matx-text-secondary hover:text-matx-text-primary font-medium transition-all duration-300 active:scale-95 touch-manipulation">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-matx-accent-light" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span>Watch Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
