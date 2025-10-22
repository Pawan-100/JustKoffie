import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

const MenuCard = memo(function MenuCard({ item, index }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/menu/${item.id}`);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    navigate(`/menu/${item.id}`);
  };

  return (
    <div
      className="bg-coffee-50 rounded-lg overflow-hidden shadow-lg hover-scale cursor-pointer transition-all"
      data-testid={`menu-item-${index}`}
      onClick={handleCardClick}
    >
      <OptimizedImage
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-coffee-800 mb-2">{item.name}</h3>
        <p className="text-coffee-700 mb-4">{item.description}</p>
        <button
          onClick={handleButtonClick}
          className="w-full bg-coffee-600 hover:bg-coffee-700 text-white py-2 px-4 rounded-lg transition-colors font-semibold"
          data-testid={`view-details-button-${index}`}
        >
          View Details
        </button>
      </div>
    </div>
  );
});

export default MenuCard;
