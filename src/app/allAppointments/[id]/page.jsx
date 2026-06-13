import DoctorDetailsPage from '@/components/DoctorDetailsPage';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

export const metadata = {
  title: "Doctor Details | DocAppoint",
  description: "View doctor profile and appointment information.",
};

const DetailsPage =async ({ params }) => {
    const { id } = await params;
    const {token}=await auth.api.getToken({
        headers: await headers()
    });
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allAppointments/${id}`, {
        cache: 'no-store',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    // if (!res.ok) throw new Error(`Failed to fetch doctor: ${res.status}`);
    const data =await res.json();
    // console.log(data);
    return (
        <div>
            <DoctorDetailsPage doctor={data} />
        </div>
    );
};

export default DetailsPage;