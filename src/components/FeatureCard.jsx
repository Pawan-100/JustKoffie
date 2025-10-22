import { memo } from 'react';

const FeatureCard = memo(function FeatureCard({ feature, index }) {
  const IconComponent = feature.icon;
  
  return (
    <div
      className="bg-white p-8 rounded-lg shadow-lg text-center hover-scale"
      data-testid={`feature-${index}`}
    >
      <div className="flex justify-center mb-4">
        <IconComponent className="text-6xl text-coffee-600" />
      </div>
      <h3 className="text-xl font-bold text-coffee-800 mb-3">{feature.title}</h3>
      <p className="text-coffee-700">{feature.description}</p>
    </div>
  );
});

export default FeatureCard;
