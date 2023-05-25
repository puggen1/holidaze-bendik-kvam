const filterBookings = (bookings, filter) => {
    return bookings.filter(booking => {
        const today = new Date();
        const bookingStart = new Date(booking.dateFrom);
        const bookingEnd = new Date(booking.dateTo);
        if(filter === 'all') {
            return booking;
        }
        else if(filter === 'old') {
            if(bookingEnd < today) {
                return booking;
            }
            else{
                return null;
            }
        }
        else if(filter === 'current') {
            if(bookingStart <= today && bookingEnd >= today) {
                return booking;
            }
            else{
                return null;
            }
        }
        else if(filter === 'upcoming') {
            if(bookingStart > today) {
                return booking;
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
    });

};

export default filterBookings;