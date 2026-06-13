import DashboardPage from '@/app/dashboard/page';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaCalendarCheck, FaEdit, FaTrash } from 'react-icons/fa';

const BookingCard = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`);
    const data = await res.json();
    console.log(data);
    return (
      <div>
        {data.map((booking) => ( <DashboardPage key={booking._id} booking={booking}/>))}
                  </div>
    );
};

export default BookingCard;