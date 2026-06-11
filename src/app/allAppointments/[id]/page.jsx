import DoctorDetailsPage from '@/components/DoctorDetailsPage';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DetailsPage =async ({ params }) => {
    const { id } = await params;
    const {token} = await auth.api.getToken({
        headers: await headers()
    });
    // console.log(token);
    const res =await fetch(`http://localhost:5000/allAppointments/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    // if (!res.ok) throw new Error(`Failed to fetch doctor: ${res.status}`);
    const data =await res.json();
    console.log(data);
    return (
        <div>
            <DoctorDetailsPage doctor={data} />
        </div>
    );
};

export default DetailsPage;