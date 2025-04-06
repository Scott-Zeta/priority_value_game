import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { ColourVariant } from '@/lib/valueData';

interface ValueCardProps {
  name: string;
  description: string;
  icon: string; // The icon name from react-icons/fa
  colorVariant?: ColourVariant;
  onClick?: () => void;
  selected?: boolean;
}

const ValueCard: React.FC<ValueCardProps> = ({
  name,
  description,
  icon,
  colorVariant = 'blue',
  onClick,
  selected = false,
}) => {
  // Dynamically get the icon from react-icons/fa
  const IconComponent = FaIcons[icon as keyof typeof FaIcons];

  // Generate color classes based on the variant
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600',
    yellow: 'bg-yellow-100 text-yellow-600',
  };

  const iconColorClass = colorClasses[colorVariant];

  // Border styling based on selection state
  const borderClass = selected
    ? 'border-red-400'
    : 'border-gray-200 hover:border-red-300';

  return (
    <div
      className={`border ${borderClass} rounded-xl p-6 text-center bg-white cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex items-center sm:flex-col">
        <div>
          <div
            className={`h-14 w-14 ${iconColorClass} rounded-full flex items-center justify-center mx-auto`}
          >
            {IconComponent ? <IconComponent className="h-6 w-6" /> : null}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center ml-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
