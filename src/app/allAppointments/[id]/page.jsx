import DoctorDetailsPage from '@/components/DoctorDetailsPage';
import React from 'react';

const DetailsPage =async ({ params }) => {
    const { id } = await params;
    console.log(id);
    const res =await fetch(`http://localhost:5000/allAppointments/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch doctor: ${res.status}`);
    const data =await res.json();
    console.log(data);
    return (
        <div>
            <DoctorDetailsPage doctor={data} />
        </div>
    );
};

export default DetailsPage;