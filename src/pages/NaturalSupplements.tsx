import React, { useState } from 'react';
import { Filter, SlidersHorizontal, ChevronDown, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Organic Echinacea Blend",
    price: 24.99,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Immune Support",
    description: "Boost your immune system naturally with our organic Echinacea blend.",
    tags: ["organic", "immune support", "herbal"],
    inStock: true
  },
  {
    id: 2,
    name: "Premium Elderberry Syrup",
    price: 29.99,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1512069766972-4b3202a5927f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Immune Support",
    description: "Traditional elderberry syrup made with organic ingredients.",
    tags: ["organic", "immune support", "syrup"],
    inStock: true
  },
  {
    id: 3,
    name: "Golden Turmeric Complex",
    price: 34.99,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Anti-inflammatory",
    description: "Powerful anti-inflammatory blend with black pepper for enhanced absorption.",
    tags: ["anti-inflammatory", "joint health"],
    inStock: true
  },
  {
    id: 4,
    name: "Calming Ashwagandha",
    price: 27.99,
    rating: 4.6,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Stress Support",
    description: "Traditional adaptogenic herb for stress and anxiety support.",
    tags: ["stress relief", "adaptogenic"],
    inStock: true
  },
  {
    id: 5,
    name: "Digestive Enzyme Complex",
    price: 32.99,
    rating: 4.8,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Digestive Health",
    description: "Comprehensive blend of digestive enzymes for optimal gut health.",
    tags: ["digestive health", "enzymes"],
    inStock: false
  },
  {
    id: 6,
    name: "Omega-3 Fish Oil",
    price: 39.99,
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Heart Health",
    description: "Pure, sustainably sourced omega-3 fish oil for heart and brain health.",
    tags: ["heart health", "brain health"],
    inStock: true
  }
];

const categories = ["All", "Immune Support", "Anti-inflammatory", "Stress Support", "Digestive Health", "Heart Health"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Best Rating", "Most Reviews"];

export const NaturalSupplements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products
    .filter(product => selectedCategory === "All" || product.category === selectedCategory)
    .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    .sort((a, b) => {
      switch (sortBy) {
        case "Price: Low to High":
          return a.price - b.price;
        case "Price: High to Low":
          return b.price - a.price;
        case "Best Rating":
          return b.rating - a.rating;
        case "Most Reviews":
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif text-brand-purple mb-4">Natural Supplements</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our premium range of natural supplements, carefully formulated to support your health and wellness journey.
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <Filter size={20} />
            Filters
          </button>
          <div className="relative group inline-block text-left">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <SlidersHorizontal size={20} />
              Sort by: {sortBy}
              <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
              <div className="py-1">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category
                  ? 'bg-brand-purple text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="font-semibold mb-4">Price Range</h3>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
            <span className="text-sm text-gray-600">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              {!product.inStock && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  Out of Stock
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <span className="text-xl font-bold text-brand-purple">${product.price}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                disabled={!product.inStock}
                className={`w-full py-2 px-4 rounded-full ${
                  product.inStock
                    ? 'bg-brand-purple hover:bg-brand-purple/90 text-white'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};