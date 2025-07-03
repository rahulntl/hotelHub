export interface BookingDetails {
  hotelName: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  selectedPlan?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
}

export const sendWhatsAppMessage = (bookingDetails: BookingDetails) => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  
  if (!whatsappNumber) {
    alert('WhatsApp number not configured. Please contact the administrator.');
    return;
  }

  const message = formatBookingMessage(bookingDetails);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

const formatBookingMessage = (details: BookingDetails): string => {
  const {
    hotelName,
    checkIn,
    checkOut,
    guests,
    selectedPlan,
    customerName,
    customerEmail,
    customerPhone
  } = details;

  let message = `🏨 *Hotel Booking Inquiry*\n\n`;
  message += `*Hotel:* ${hotelName}\n`;
  message += `*Check-in:* ${formatDate(checkIn)}\n`;
  message += `*Check-out:* ${formatDate(checkOut)}\n`;
  message += `*Guests:* ${guests}\n`;
  
  if (selectedPlan) {
    message += `*Selected Plan:* ${selectedPlan}\n`;
  }
  
  message += `\n*Customer Details:*\n`;
  
  if (customerName) {
    message += `*Name:* ${customerName}\n`;
  }
  
  if (customerEmail) {
    message += `*Email:* ${customerEmail}\n`;
  }
  
  if (customerPhone) {
    message += `*Phone:* ${customerPhone}\n`;
  }
  
  message += `\nI would like to make a reservation. Please provide availability and pricing details.\n\n`;
  message += `Thank you! 🙏`;
  
  return message;
};

const formatDate = (dateString: string): string => {
  if (!dateString) return 'Not selected';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const calculateNights = (checkIn: string, checkOut: string): number => {
  if (!checkIn || !checkOut) return 0;
  
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};