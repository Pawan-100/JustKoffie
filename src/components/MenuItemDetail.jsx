import { memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { menuItems } from '../data/menuData';
import { FaArrowLeft, FaLeaf } from 'react-icons/fa';
import { GiCoffeeBeans, GiCoffeePot } from 'react-icons/gi';
import OptimizedImage from './OptimizedImage';

const MenuItemDetail = memo(function MenuItemDetail() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  
  const item = menuItems.find(menuItem => menuItem.id === itemId);

  if (!item) {
    return (
      <div className="min-h-screen bg-coffee-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-coffee-800 mb-4">Item not found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-coffee-600 hover:bg-coffee-700 text-white px-6 py-3 rounded-full transition-all"
            data-testid="back-to-home-button"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-coffee-50">
      {/* Header with Back Button */}
      <div className="bg-coffee-800 text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:text-coffee-200 transition-colors text-lg"
            data-testid="back-button"
          >
            <FaArrowLeft />
            <span>Back to Menu</span>
          </button>
          <h1 className="text-2xl font-serif font-bold" data-testid="brand-name">Just Koffie</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Hero Image Section */}
          <div className="relative h-96 overflow-hidden">
            <OptimizedImage
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              data-testid="item-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-5xl font-serif font-bold text-white mb-2 text-shadow-strong" data-testid="item-name">
                {item.name}
              </h1>
              <p className="text-xl text-coffee-100 text-shadow-strong" data-testid="item-description">
                {item.description}
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="p-8 md:p-12 space-y-12">
            {/* Ingredients Section */}
            <div data-testid="ingredients-section">
              <div className="flex items-center gap-3 mb-4">
                <FaLeaf className="text-3xl text-coffee-600" />
                <h2 className="text-3xl font-serif font-bold text-coffee-800">Ingredients</h2>
              </div>
              <div className="bg-coffee-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {item.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-lg text-coffee-700"
                      data-testid={`ingredient-${index}`}
                    >
                      <span className="text-coffee-600 font-bold">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Brewing Method Section */}
            <div data-testid="brewing-section">
              <div className="flex items-center gap-3 mb-4">
                <GiCoffeePot className="text-3xl text-coffee-600" />
                <h2 className="text-3xl font-serif font-bold text-coffee-800">Brewing Method</h2>
              </div>
              <div className="bg-coffee-50 rounded-lg p-6">
                <p className="text-lg text-coffee-700 leading-relaxed" data-testid="brewing-method">
                  {item.brewingMethod}
                </p>
              </div>
            </div>

            {/* Size Options Section */}
            <div data-testid="sizes-section">
              <div className="flex items-center gap-3 mb-4">
                <GiCoffeeBeans className="text-3xl text-coffee-600" />
                <h2 className="text-3xl font-serif font-bold text-coffee-800">Available Sizes</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {item.sizeOptions.map((size, index) => (
                  <div
                    key={index}
                    className="bg-coffee-600 text-white rounded-lg p-4 text-center font-semibold hover:bg-coffee-700 transition-colors"
                    data-testid={`size-option-${index}`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/')}
            className="bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            data-testid="explore-more-button"
          >
            Explore More Menu Items
          </button>
        </div>
      </div>
    </div>
  );
});

export default MenuItemDetail;
