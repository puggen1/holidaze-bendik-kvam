const totalGuest = (bookings) => {
    const totalGuest = bookings.reduce((acc, booking) => {
        const bookingStart = new Date(booking.dateFrom);
        const bookingEnd = new Date(booking.dateTo);
        const today = new Date();
        if(today >=bookingEnd && today.getMonth() === bookingEnd.getMonth()){
            acc += booking.guests;
        }
        return acc;
    }, 0);
    return totalGuest
}

export default totalGuest;