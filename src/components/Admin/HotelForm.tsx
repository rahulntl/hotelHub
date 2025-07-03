import React, { useState } from 'react';
import { Hotel, TariffPlan } from '../../types/hotel';
import { Plus, X, Upload } from 'lucide-react';

interface HotelFormProps {
  hotel?: Hotel;
  onSubmit: (hotel: Omit<Hotel, 'id'>) => void;
  onCancel: () => void;
}

const HotelForm: React.FC<HotelFormProps> = ({ hotel, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: hotel?.title || '',
    description: hotel?.description || '',
    shortDescription: hotel?.shortDescription || '',
    location: hotel?.location || '',
    rating: hotel?.rating || 4.0,
    priceRange: hotel?.priceRange || { min: 100, max: 500 },
    amenities: hotel?.amenities || ['Free WiFi'],
    images: hotel?.images || [''],
    contactDetails: hotel?.contactDetails || {
      phone: '',
      email: '',
      address: ''
    },
    tariffPlans: hotel?.tariffPlans || [
      {
        id: '1',
        name: 'Standard Room',
        price: 100,
        period: 'night' as const,
        features: ['Free WiFi', 'Breakfast Included']
      }
    ],
    featured: hotel?.featured || false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addAmenity = () => {
    setFormData(prev => ({
      ...prev,
      amenities: [...prev.amenities, '']
    }));
  };

  const removeAmenity = (index: number) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.filter((_, i) => i !== index)
    }));
  };

  const updateAmenity = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.map((amenity, i) => i === index ? value : amenity)
    }));
  };

  const addImage = () => {
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, '']
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const updateImage = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.map((image, i) => i === index ? value : image)
    }));
  };

  const addTariffPlan = () => {
    const newPlan: TariffPlan = {
      id: Date.now().toString(),
      name: 'New Plan',
      price: 100,
      period: 'night',
      features: ['Free WiFi']
    };
    setFormData(prev => ({
      ...prev,
      tariffPlans: [...prev.tariffPlans, newPlan]
    }));
  };

  const removeTariffPlan = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tariffPlans: prev.tariffPlans.filter((_, i) => i !== index)
    }));
  };

  const updateTariffPlan = (index: number, field: keyof TariffPlan, value: any) => {
    setFormData(prev => ({
      ...prev,
      tariffPlans: prev.tariffPlans.map((plan, i) => 
        i === index ? { ...plan, [field]: value } : plan
      )
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {hotel ? 'Edit Hotel' : 'Add New Hotel'}
        </h2>
        
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hotel Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Short Description
          </label>
          <input
            type="text"
            value={formData.shortDescription}
            onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={(e) => setFormData(prev => ({ ...prev, rating: Number(e.target.value) }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Min Price
            </label>
            <input
              type="number"
              min="0"
              value={formData.priceRange.min}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                priceRange: { ...prev.priceRange, min: Number(e.target.value) }
              }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Price
            </label>
            <input
              type="number"
              min="0"
              value={formData.priceRange.max}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                priceRange: { ...prev.priceRange, max: Number(e.target.value) }
              }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">Featured Hotel</span>
          </label>
        </div>
        
        {/* Contact Details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.contactDetails.phone}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  contactDetails: { ...prev.contactDetails, phone: e.target.value }
                }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.contactDetails.email}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  contactDetails: { ...prev.contactDetails, email: e.target.value }
                }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                value={formData.contactDetails.address}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  contactDetails: { ...prev.contactDetails, address: e.target.value }
                }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>
        
        {/* Amenities */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Amenities</h3>
            <button
              type="button"
              onClick={addAmenity}
              className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
          
          <div className="space-y-2">
            {formData.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={amenity}
                  onChange={(e) => updateAmenity(index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter amenity"
                />
                <button
                  type="button"
                  onClick={() => removeAmenity(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Images */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Images</h3>
            <button
              type="button"
              onClick={addImage}
              className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Image</span>
            </button>
          </div>
          
          <div className="space-y-2">
            {formData.images.map((image, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="url"
                  value={image}
                  onChange={(e) => updateImage(index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter image URL"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tariff Plans */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Tariff Plans</h3>
            <button
              type="button"
              onClick={addTariffPlan}
              className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Plan</span>
            </button>
          </div>
          
          <div className="space-y-4">
            {formData.tariffPlans.map((plan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-md font-medium text-gray-900">Plan {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeTariffPlan(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Plan Name
                    </label>
                    <input
                      type="text"
                      value={plan.name}
                      onChange={(e) => updateTariffPlan(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={plan.price}
                      onChange={(e) => updateTariffPlan(index, 'price', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Period
                    </label>
                    <select
                      value={plan.period}
                      onChange={(e) => updateTariffPlan(index, 'period', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="night">Per Night</option>
                      <option value="week">Per Week</option>
                      <option value="month">Per Month</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-2 mt-6">
                      <input
                        type="checkbox"
                        checked={plan.popular || false}
                        onChange={(e) => updateTariffPlan(index, 'popular', e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">Popular</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Features (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={plan.features.join(', ')}
                    onChange={(e) => updateTariffPlan(index, 'features', e.target.value.split(', '))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Free WiFi, Breakfast Included, Pool Access"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            {hotel ? 'Update Hotel' : 'Add Hotel'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default HotelForm;