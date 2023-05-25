const totalRevenue = (bookings) => {
  const totalRevenue = bookings.reduce((acc, booking) => {
    const bookingEnd = new Date(booking.dateTo);
    const today = new Date();
    if (today >= bookingEnd && today.getMonth() === bookingEnd.getMonth()) {
      return (acc += booking.price);
    }
    return acc;
  }, 0);
  return totalRevenue;
};

export default totalRevenue;
