import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Pop Art Sneakers",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      tag: "NEW!"
    },
    {
      id: 2,
      name: "Retro Sunglasses",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
      tag: "HOT!"
    },
    {
      id: 3,
      name: "Comic Print Tee",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      tag: "SALE"
    },
    {
      id: 4,
      name: "Pop Backpack",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      tag: "WOW!"
    },
    {
      id: 5,
      name: "Neon Cap",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
      tag: "COOL"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-6xl font-bold pop-title mb-6">
          TRENDING NOW!
        </h2>
        <div className="speech-bubble inline-block">
          <p className="text-xl font-bold text-black">
            Check out our hottest items that everyone's talking about!
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="pop-product-card rounded-2xl p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="starburst">
                {product.tag}
              </div>
              
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl border-4 border-black"
                />
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-black font-['Fredoka_One']">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-pink-500 font-['Permanent_Marker']">
                  {product.price}
                </p>
                
                <button className="pop-button w-full text-white text-lg px-6 py-3 rounded-xl font-bold">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <div className="comic-frame rounded-3xl p-12 max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold mb-6 pop-title">
            WANT MORE AMAZING STUFF?
          </h3>
          <p className="text-xl font-bold text-black mb-8 font-['Comic_Neue']">
            Subscribe to our newsletter for exclusive deals and sneak peeks!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your awesome email..."
              className="flex-1 px-6 py-4 border-4 border-black rounded-xl text-lg font-['Comic_Neue'] focus:outline-none focus:ring-4 focus:ring-pink-300"
            />
            <button className="pop-button text-white text-lg px-8 py-4 rounded-xl font-bold whitespace-nowrap">
              SIGN ME UP!
            </button>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 floating-element opacity-30">
        <div className="w-32 h-32 bg-orange-400 border-4 border-black rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-20 floating-element opacity-30" style={{ animationDelay: '1.5s' }}>
        <div className="w-24 h-24 bg-pink-500 border-4 border-black transform rotate-45"></div>
      </div>
    </section>
  );
};

export default ProductGrid;