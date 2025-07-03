import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative group">
        <img
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-96 object-cover rounded-xl cursor-pointer"
          onClick={() => openModal(currentIndex)}
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </>
        )}
        
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2">
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className={`relative cursor-pointer rounded-lg overflow-hidden ${
              index === currentIndex ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`${title} - Thumbnail ${index + 1}`}
              className="w-full h-20 object-cover hover:scale-105 transition-transform duration-200"
            />
            {index === 3 && images.length > 4 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold">
                +{images.length - 4}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <img
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;