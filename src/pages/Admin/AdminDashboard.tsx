import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { hotels } from '../../data/hotels';
import HotelForm from '../../components/Admin/HotelForm';
import { Hotel } from '../../types/hotel';
import { Plus, Edit, Trash2, Eye, Star, MapPin } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  const [showForm, setShowForm] = useState(false);
  const [editingHotel, setEditingHotel] = useState<Hotel | null>(null);
  const [hotelList, setHotelList] = useState(hotels);

  // Check if user is admin
  const isAdmin = user?.['https://hotelhub.com/roles']?.includes('admin');

  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  const handleAddHotel = (hotelData: Omit<Hotel, 'id'>) => {
    const newHotel: Hotel = {
      ...hotelData,
      id: Date.now().toString(),
    };
    setHotelList([...hotelList, newHotel]);
    setShowForm(false);
  };

  const handleEditHotel = (hotelData: Omit<Hotel, 'id'>) => {
    if (editingHotel) {
      const updatedHotels = hotelList.map(hotel =>
        hotel.id === editingHotel.id ? { ...hotelData, id: editingHotel.id } : hotel
      );
      setHotelList(updatedHotels);
      setEditingHotel(null);
      setShowForm(false);
    }
  };

  const handleDeleteHotel = (id: string) => {
    if (window.confirm('Are you sure you want to delete this hotel?')) {
      setHotelList(hotelList.filter(hotel => hotel.id !== id));
    }
  };

  const openEditForm = (hotel: Hotel) => {
    setEditingHotel(hotel);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingHotel(null);
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HotelForm
            hotel={editingHotel || undefined}
            onSubmit={editingHotel ? handleEditHotel : handleAddHotel}
            onCancel={closeForm}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back, {user?.name}</p>
          </div>
          
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            <Plus className="h-5 w-5" />
            <span>Add New Hotel</span>
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Hotels</p>
                <p className="text-3xl font-bold text-gray-900">{hotelList.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Featured Hotels</p>
                <p className="text-3xl font-bold text-gray-900">
                  {hotelList.filter(h => h.featured).length}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Rating</p>
                <p className="text-3xl font-bold text-gray-900">
                  {(hotelList.reduce((sum, h) => sum + h.rating, 0) / hotelList.length).toFixed(1)}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Locations</p>
                <p className="text-3xl font-bold text-gray-900">
                  {new Set(hotelList.map(h => h.location)).size}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Hotels Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">All Hotels</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hotel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price Range
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              
              <tbody className="bg-white divide-y divide-gray-200">
                {hotelList.map((hotel) => (
                  <tr key={hotel.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={hotel.images[0]}
                          alt={hotel.title}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{hotel.title}</div>
                          <div className="text-sm text-gray-500">{hotel.shortDescription}</div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{hotel.location}</div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-900">{hotel.rating}</span>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        v{hotel.priceRange.min} - ₹{hotel.priceRange.max}
                      </div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          hotel.featured
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {hotel.featured ? 'Featured' : 'Regular'}
                      </span>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => window.open(`/hotel/${hotel.id}`, '_blank')}
                          className="text-blue-600 hover:text-blue-800"
                          title="View Hotel"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => openEditForm(hotel)}
                          className="text-indigo-600 hover:text-indigo-800"
                          title="Edit Hotel"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteHotel(hotel.id)}
                          className="text-red-600 hover:text-red-800"
                          title="Delete Hotel"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;