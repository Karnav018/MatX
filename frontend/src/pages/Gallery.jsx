import { useState, useRef } from 'react';
import tile1 from '../assets/Tiles/tile1.png';
import tile2 from '../assets/Tiles/tile2.png';
import tile3 from '../assets/Tiles/tile3.png';
import tile4 from '../assets/Tiles/tile4.png';
import tile5 from '../assets/Tiles/tile5.png';
import tile6 from '../assets/Tiles/tile6.png';
import tile7 from '../assets/Tiles/tile7.png';
import tile8 from '../assets/Tiles/tile8.png';
import tile9 from '../assets/Tiles/tile9.png';
import tile10 from '../assets/Tiles/tile10.png';
import tile11 from '../assets/Tiles/tile11.png';
import tile12 from '../assets/Tiles/tile12.png';
import tile13 from '../assets/Tiles/tile13.png';
import tile14 from '../assets/Tiles/tile14.png';
import tile15 from '../assets/Tiles/tile15.webp';
import tile16 from '../assets/Tiles/tile16.webp';
import tile17 from '../assets/Tiles/tile17.webp';
import tile18 from '../assets/Tiles/tile18.jpg';
import tile19 from '../assets/Tiles/tile19.jpg';
import tile20 from '../assets/Tiles/tile20.jpg';
import tile21 from '../assets/Tiles/tile21.jpg';
import tile22 from '../assets/Tiles/tile22.jpg';
import tile23 from '../assets/Tiles/tile23.jpg';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterMaterial, setFilterMaterial] = useState('all');
  const [filterColor, setFilterColor] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedTiles, setLikedTiles] = useState({});
  const searchInputRef = useRef(null);
  
  const itemsPerPage = 15; // Increased to 15 tiles per page to better display the larger collection
  
  // Tile catalog with details that match the actual images
  
  const tileData = [
    { 
      id: 1, 
      name: 'Classic Subway White',
      material: 'ceramic',
      color: 'white',
      size: 'Custom - 3×6"',
      price: 4.99,
      unit: 'sq ft',
      src: tile1, 
      alt: 'Classic white ceramic subway tile with light gray grout',
      featured: true,
    },
    { 
      id: 2, 
      name: 'Moroccan Arabesque',
      material: 'ceramic',
      color: 'white',
      size: 'Custom - 4×8"',
      price: 14.99,
      unit: 'sq ft',
      src: tile2, 
      alt: 'White arabesque lantern-shaped mosaic tile',
      featured: true,
    },
    { 
      id: 3, 
      name: 'Midnight Chevron',
      material: 'porcelain',
      color: 'black',
      size: 'Custom - 8×16"',
      price: 11.99,
      unit: 'sq ft',
      src: tile3, 
      alt: 'Black zigzag chevron pattern porcelain tile',
      featured: false,
    },
    { 
      id: 4, 
      name: 'Honey Oak Plank',
      material: 'porcelain',
      color: 'brown',
      size: 'Custom - 6×36"',
      price: 7.49,
      unit: 'sq ft',
      src: tile4, 
      alt: 'Honey oak wood-look porcelain plank tile',
      featured: true,
    },
    { 
      id: 5, 
      name: 'Turquoise Hex Mosaic',
      material: 'ceramic',
      color: 'blue',
      size: 'Custom - 2" Hex',
      price: 16.99,
      unit: 'sq ft',
      src: tile5, 
      alt: 'Turquoise blue hexagon mosaic tiles',
      featured: false,
    },
    { 
      id: 6, 
      name: 'Moroccan Cement Pattern',
      material: 'cement',
      color: 'multicolor',
      size: 'Custom - 8×8"',
      price: 18.50,
      unit: 'sq ft',
      src: tile6, 
      alt: 'Colorful Moroccan patterned cement tile',
      featured: true,
    },
    { 
      id: 7, 
      name: 'Slate Gray Matte',
      material: 'porcelain',
      color: 'gray',
      size: 'Custom - 24×24"',
      price: 8.99,
      unit: 'sq ft',
      src: tile7, 
      alt: 'Slate gray matte finish large format porcelain tile',
      featured: true,
    },
    { 
      id: 8, 
      name: 'Emerald Zellige',
      material: 'terracotta',
      color: 'green',
      size: 'Custom - 4×4"',
      price: 24.50,
      unit: 'sq ft',
      src: tile8, 
      alt: 'Emerald green handmade zellige terracotta tile',
      featured: false,
    },
    { 
      id: 9, 
      name: 'Basket Weave Marble',
      material: 'marble',
      color: 'white',
      size: 'Custom - 12×12" Sheet',
      price: 22.99,
      unit: 'sq ft',
      src: tile9, 
      alt: 'White marble basket weave pattern mosaic tile',
      featured: false,
    },
    { 
      id: 10, 
      name: 'Vintage Patterned',
      material: 'ceramic',
      color: 'multicolor',
      size: 'Custom - 8×8"',
      price: 15.25,
      unit: 'sq ft',
      src: tile10, 
      alt: 'Vintage blue and white patterned ceramic tile',
      featured: false,
    },
    { 
      id: 11, 
      name: 'Terra Cotta Hexagon',
      material: 'terracotta',
      color: 'orange',
      size: 'Custom - 6" Hex',
      price: 9.99,
      unit: 'sq ft',
      src: tile11, 
      alt: 'Terracotta hexagon shaped clay tile',
      featured: false,
    },
    { 
      id: 12, 
      name: 'Metallic Steel Mosaic',
      material: 'metal',
      color: 'silver',
      size: 'Custom - 1×2" Brick',
      price: 19.50,
      unit: 'sq ft',
      src: tile12, 
      alt: 'Silver metallic stainless steel mosaic tile',
      featured: true,
    },
    { 
      id: 13, 
      name: 'French Oak Herringbone',
      material: 'porcelain',
      color: 'brown',
      size: 'Custom - 3×18"',
      price: 11.99,
      unit: 'sq ft',
      src: tile13, 
      alt: 'French oak herringbone wood-look porcelain tile',
      featured: false,
    },
    { 
      id: 14, 
      name: 'Starry Night Glass',
      material: 'glass',
      color: 'blue',
      size: 'Custom - 1×1" Mosaic',
      price: 26.99,
      unit: 'sq ft',
      src: tile14, 
      alt: 'Iridescent blue glass mosaic tile with starry effect',
      featured: true,
    },
    { 
      id: 15, 
      name: 'Marble Honeycomb',
      material: 'marble',
      color: 'white',
      size: 'Custom - 3" Hex',
      price: 28.50,
      unit: 'sq ft',
      src: tile15, 
      alt: 'White marble honeycomb pattern mosaic tile',
      featured: true,
    },
    { 
      id: 16, 
      name: 'Terrazzo Modern',
      material: 'terrazzo',
      color: 'multicolor',
      size: 'Custom - 24×24"',
      price: 32.99,
      unit: 'sq ft',
      src: tile16, 
      alt: 'Contemporary terrazzo tile with colorful stone aggregate',
      featured: false,
    },
    { 
      id: 17, 
      name: 'Diamond Encaustic',
      material: 'cement',
      color: 'black and white',
      size: 'Custom - 8×8"',
      price: 17.75,
      unit: 'sq ft',
      src: tile17, 
      alt: 'Black and white diamond pattern encaustic cement tile',
      featured: true,
    },
    { 
      id: 18, 
      name: 'Rustic Limestone',
      material: 'limestone',
      color: 'beige',
      size: 'Custom - 16×24"',
      price: 14.50,
      unit: 'sq ft',
      src: tile18, 
      alt: 'Natural beige limestone tile with rustic texture',
      featured: false,
    },
    { 
      id: 19, 
      name: 'Penny Round White',
      material: 'porcelain',
      color: 'white',
      size: 'Custom - 1" Rounds',
      price: 13.25,
      unit: 'sq ft',
      src: tile19, 
      alt: 'White porcelain penny round mosaic tile',
      featured: false,
    },
    { 
      id: 20, 
      name: 'Geometric Deco',
      material: 'ceramic',
      color: 'multicolor',
      size: 'Custom - 10×10"',
      price: 21.99,
      unit: 'sq ft',
      src: tile20, 
      alt: 'Art deco geometric patterned ceramic tile',
      featured: true,
    },
    { 
      id: 21, 
      name: 'Nero Marquina',
      material: 'marble',
      color: 'black',
      size: 'Custom - 12×12"',
      price: 34.99,
      unit: 'sq ft',
      src: tile21, 
      alt: 'Black Nero Marquina marble tile with white veining',
      featured: true,
    },
    { 
      id: 22, 
      name: 'Moroccan Fish Scale',
      material: 'ceramic',
      color: 'teal',
      size: 'Custom - 4×4"',
      price: 18.75,
      unit: 'sq ft',
      src: tile22, 
      alt: 'Teal fish scale (mermaid) ceramic tile',
      featured: false,
    },
    { 
      id: 23, 
      name: 'Victorian Patterned',
      material: 'ceramic',
      color: 'multicolor',
      size: 'Custom - 8×8"',
      price: 16.50,
      unit: 'sq ft',
      src: tile23, 
      alt: 'Victorian-inspired floral patterned ceramic tile',
      featured: false,
    },
  ];  // Filter and search functions
  const filterTiles = () => {
    return tileData.filter(tile => {
      // Apply material filter
      if (filterMaterial !== 'all' && tile.material !== filterMaterial) {
        return false;
      }
      
      // Apply color filter
      if (filterColor !== 'all' && tile.color !== filterColor) {
        return false;
      }
      
      // Apply search filter (case insensitive)
      if (searchQuery && !tile.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  };

  const filteredTiles = filterTiles();
  const totalPages = Math.ceil(filteredTiles.length / itemsPerPage);
  const currentTiles = filteredTiles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Collect unique materials and colors for filter dropdowns
  const materials = ['all', ...new Set(tileData.map(tile => tile.material))];
  const colors = ['all', ...new Set(tileData.map(tile => tile.color))];

  // Page navigation handlers
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInputRef.current.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleFilterChange = (type, value) => {
    if (type === 'material') {
      setFilterMaterial(value);
    } else if (type === 'color') {
      setFilterColor(value);
    }
    setCurrentPage(1); // Reset to first page when filters change
  };
  
  // Handle liking/unliking a tile
  const handleLikeTile = (tileId) => {
    setLikedTiles(prev => ({
      ...prev,
      [tileId]: !prev[tileId]
    }));
  };

  return (
    <div className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 overflow-hidden bg-gray-50 min-h-screen">
      {/* Gallery Header */}
      <div className="mb-8">
        <div className="relative">
          <div className="hidden md:block absolute right-0 top-0 w-32 h-32 bg-gray-100 rounded-full -z-10 opacity-50"></div>
          <p className="text-3xl md:text-4xl font-light text-gray-300 mb-1 md:mb-2">Tile</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Gallery</h1>
        </div>
        <div className="max-w-4xl space-y-4">
          <p className="text-gray-600 text-sm md:text-base">
            Browse our expanded collection of <span className="font-semibold">{tileData.length}+</span> custom-sized tiles and visualize them in your space with our AR technology.
            Select any tile to view details or try it in your room using our AR viewer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-2">
            <div className="bg-gray-50 border-l-4 border-gray-800 p-3 md:p-4 flex-1 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-gray-800 mb-1 text-sm md:text-base">Custom Sizing Available</h3>
              <p className="text-xs md:text-sm text-gray-600">
                All our tiles can be customized to fit your exact needs. The displayed sizes are recommendations,
                but our experts can help you with custom dimensions for your specific project.
              </p>
            </div>
            <div className="bg-gray-50 border-l-4 border-blue-600 p-3 md:p-4 flex-1 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-gray-800 mb-1 text-sm md:text-base">New Arrivals Added</h3>
              <p className="text-xs md:text-sm text-gray-600">
                We've just added new designer collections including premium marble, terrazzo, and artisan patterns.
                Explore our expanded selection to find the perfect match for your space.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="mb-8 md:mb-10 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4 md:items-end">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex-grow max-w-md">
            <div className="relative">
              <input
                type="text"
                ref={searchInputRef}
                placeholder="Search tiles..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-shadow duration-300 hover:shadow-sm"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform duration-200"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
          
          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <div className="w-full sm:w-auto flex-1 md:flex-none">
              <label htmlFor="materialFilter" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Material</label>
              <select 
                id="materialFilter"
                value={filterMaterial}
                onChange={(e) => handleFilterChange('material', e.target.value)}
                className="w-full sm:w-40 px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 hover:shadow-sm transition-all duration-200 bg-white text-sm"
              >
                {materials.map((material) => (
                  <option key={material} value={material}>
                    {material === 'all' ? 'All Materials' : material.charAt(0).toUpperCase() + material.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="w-full sm:w-auto flex-1 md:flex-none">
              <label htmlFor="colorFilter" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Color</label>
              <select 
                id="colorFilter"
                value={filterColor}
                onChange={(e) => handleFilterChange('color', e.target.value)}
                className="w-full sm:w-40 px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 hover:shadow-sm transition-all duration-200 bg-white text-sm"
              >
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color === 'all' ? 'All Colors' : color.charAt(0).toUpperCase() + color.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="w-full sm:w-auto flex-1 md:flex-none">
              <label htmlFor="sizePreference" className="flex items-center text-xs sm:text-sm font-medium text-gray-700 mb-1">
                <span>Size Format</span>
                <span className="ml-1 bg-gray-800 text-white text-xs px-2 py-0.5 rounded-full">Custom</span>
              </label>
              <select 
                id="sizePreference"
                className="w-full sm:w-48 px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 hover:shadow-sm transition-all duration-200 bg-white text-sm"
              >
                <option value="all">All Formats</option>
                <option value="small">Small Format (under 6")</option>
                <option value="standard">Standard Format (6-12")</option>
                <option value="large">Large Format (over 12")</option>
                <option value="custom">Custom Size Consultation</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Active filters display */}
        <div className="mt-4 flex flex-wrap gap-2">
          {filterMaterial !== 'all' && (
            <span className="px-3 py-1 bg-gray-100 text-sm rounded-full flex items-center">
              Material: {filterMaterial.charAt(0).toUpperCase() + filterMaterial.slice(1)}
              <button 
                onClick={() => handleFilterChange('material', 'all')}
                className="ml-2 text-gray-500 hover:text-gray-700"
                aria-label={`Remove ${filterMaterial} filter`}
              >
                ×
              </button>
            </span>
          )}
          
          {filterColor !== 'all' && (
            <span className="px-3 py-1 bg-gray-100 text-sm rounded-full flex items-center">
              Color: {filterColor.charAt(0).toUpperCase() + filterColor.slice(1)}
              <button 
                onClick={() => handleFilterChange('color', 'all')}
                className="ml-2 text-gray-500 hover:text-gray-700"
                aria-label={`Remove ${filterColor} filter`}
              >
                ×
              </button>
            </span>
          )}
          
          {searchQuery && (
            <span className="px-3 py-1 bg-gray-100 text-sm rounded-full flex items-center">
              Search: {searchQuery}
              <button 
                onClick={() => { setSearchQuery(''); if (searchInputRef.current) searchInputRef.current.value = ''; }}
                className="ml-2 text-gray-500 hover:text-gray-700"
                aria-label="Clear search"
              >
                ×
              </button>
            </span>
          )}
        </div>
      </div>
      
      {/* Results summary */}
      <div className="mb-6 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Showing {filteredTiles.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {Math.min(currentPage * itemsPerPage, filteredTiles.length)} of {filteredTiles.length} tiles
        </p>
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-12">
        {currentTiles.length > 0 ? (
          currentTiles.map((tile) => (
            <div 
              key={tile.id} 
              className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative"
            >
              {/* Featured badge */}
              {tile.featured && (
                <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs px-2 py-1 m-2 z-10">
                  Featured
                </div>
              )}
              
              {/* Image container */}
              <div className="aspect-square overflow-hidden bg-gray-50 relative">
                <img 
                  src={tile.src} 
                  alt={tile.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                {tile.featured && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </div>
              
              {/* Tile details */}
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1 truncate">{tile.name}</h3>
                <div className="flex flex-col space-y-1">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">{tile.material.charAt(0).toUpperCase() + tile.material.slice(1)}</p>
                    <p className="text-sm font-bold">${tile.price.toFixed(2)}/{tile.unit}</p>
                  </div>
                  <p className="text-xs text-gray-500 italic">{tile.size}</p>
                </div>
                
                {/* AR Button */}
                <div className="mt-3 flex space-x-2">
                  <button className="flex-grow bg-gray-100 hover:bg-gray-800 hover:text-white text-gray-800 text-xs sm:text-sm font-medium py-2 px-2 sm:px-3 rounded transition-all duration-300 flex items-center justify-center group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 sm:mr-2 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="truncate">Try in AR</span>
                    <span className="absolute inset-0 rounded overflow-hidden z-0">
                      <span className="absolute -inset-full h-[500%] w-[500%] rotate-45 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    </span>
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeTile(tile.id);
                    }}
                    className={`relative overflow-hidden bg-white hover:bg-gray-50 border border-gray-300 text-sm font-medium py-2 px-3 rounded transition-all duration-300 ${likedTiles[tile.id] ? 'border-red-400' : ''}`}
                    aria-label={likedTiles[tile.id] ? "Unlike tile" : "Like tile"}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transition-all duration-300 ${
                        likedTiles[tile.id] ? 'text-red-500 scale-110' : 'text-gray-800'
                      }`} 
                      fill={likedTiles[tile.id] ? "currentColor" : "none"} 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={likedTiles[tile.id] ? 1.5 : 2} 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                      />
                    </svg>
                    {likedTiles[tile.id] && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="animate-ping absolute h-5 w-5 rounded-full bg-red-400 opacity-20"></span>
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No tiles match your search criteria.</p>
            <button 
              onClick={() => {
                setFilterMaterial('all');
                setFilterColor('all');
                setSearchQuery('');
                if (searchInputRef.current) searchInputRef.current.value = '';
              }}
              className="mt-4 text-gray-700 underline hover:text-gray-900"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      {filteredTiles.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl p-3 sm:p-5 shadow-sm border border-gray-100">
          <div className="text-gray-700 font-medium mb-4 sm:mb-0 flex items-center">
            <span className="text-xl md:text-2xl">{currentPage < 10 ? `0${currentPage}` : currentPage}</span>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-300 text-lg md:text-xl">{totalPages < 10 ? `0${totalPages}` : totalPages}</span>
          </div>
          
          {/* Page navigation buttons */}
          <div className="flex space-x-2">
            <button 
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="p-1 sm:p-2 border border-gray-300 rounded disabled:opacity-50 hidden sm:block hover:bg-gray-50 transition-all duration-300 disabled:hover:bg-white"
              aria-label="First page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="p-1 sm:p-2 border border-gray-300 rounded disabled:opacity-50 hover:bg-gray-50 transition-all duration-300 disabled:hover:bg-white"
              aria-label="Previous page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Page numbers - visible on larger screens */}
            <div className="hidden md:flex space-x-2">
              {[...Array(Math.min(5, totalPages))].map((_, i) => {
                // Create a range of page numbers centered on the current page
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border rounded transition-all duration-300 ${
                      currentPage === pageNum 
                        ? 'bg-gray-800 text-white border-gray-800 shadow-md scale-105' 
                        : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-1 sm:p-2 border border-gray-300 rounded disabled:opacity-50 hover:bg-gray-50 transition-all duration-300 disabled:hover:bg-white"
              aria-label="Next page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button 
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="p-1 sm:p-2 border border-gray-300 rounded disabled:opacity-50 hidden sm:block hover:bg-gray-50 transition-all duration-300 disabled:hover:bg-white"
              aria-label="Last page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7m-8-14l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Jump to page (visible on larger screens) */}
          <div className="hidden lg:flex items-center space-x-2 ml-4">
            <label htmlFor="jumpToPage" className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Go to page:</label>
            <input
              type="number"
              id="jumpToPage"
              min="1"
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const page = parseInt(e.target.value);
                if (!isNaN(page) && page >= 1 && page <= totalPages) {
                  setCurrentPage(page);
                }
              }}
              className="w-12 sm:w-16 p-1 sm:p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 transition-shadow hover:shadow-sm text-center text-sm"
            />
            <button 
              onClick={() => {
                const input = document.getElementById('jumpToPage');
                const page = parseInt(input.value);
                if (!isNaN(page) && page >= 1 && page <= totalPages) {
                  setCurrentPage(page);
                }
              }}
              className="bg-gray-100 hover:bg-gray-200 rounded p-1 px-2 text-xs border border-gray-300 transition-colors duration-200"
            >
              Go
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
