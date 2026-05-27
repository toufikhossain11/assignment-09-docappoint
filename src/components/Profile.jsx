import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Input } from '@heroui/react';
import Image from 'next/image';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { UpdateProfile } from './UpdateProfile';

const inputStyles = {
    label: "text-slate-300 text-xs",
    input: "text-white placeholder:text-slate-500 text-sm",
    inputWrapper: [
        "h-11",
        "border",
        "border-cyan-400/20",
        "bg-[#0F172A]/70",
        "backdrop-blur-xl",
    ],
};

const Profile = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user;
    console.log("User in Profile:", user);
    return (
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">
            <p className="text-lg font-medium text-cyan-300 mt-2">Patient Dashboard Profile</p>

            <div className="flex flex-col items-center gap-3">
                {/* <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-cyan-400/30">
                        <Image src={user?.image || "/user.jpg"} alt="user" fill className="object-cover" />
                    </div> */}

                <Avatar className=" h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-cyan-400/30 text-center text-white text-100 py-7">
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy='no-referrer' />
                    <Avatar.Fallback className='text-white'>{user?.name[0]}</Avatar.Fallback>
                </Avatar>

                <h2 className="text-sm font-bold text-white">{user?.name || "Unknown User"}</h2>

                <h2 className="text-sm font-bold text-white">{user?.email || "Unknown Email"}</h2>
                    <UpdateProfile></UpdateProfile>

            </div>
            <Button
                radius="lg"
                className="mt-2 h-11 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
            >
                Update Profile
            </Button>

            {/* <div className="mt-5 grid gap-3">
              <Input
                label="Full Name"
                labelPlacement="outside"
                placeholder="Enter your name"
                defaultValue={user?.name || "Unknown User"}
                isReadOnly
                startContent={<FaUser className="text-cyan-300" size={13} />}
                radius="lg"
                variant="bordered"
                classNames={inputStyles}
              />
              <Input
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your email"
                defaultValue={user?.email || "Unknown Email"}
                isReadOnly
                startContent={<FaEnvelope className="text-cyan-300" size={13} />}
                radius="lg"
                variant="bordered"
                classNames={inputStyles}
              />
              <Input
                label="Photo URL"
                labelPlacement="outside"
                placeholder="Enter photo URL"
                defaultValue={user?.photoUrl || "https://example.com/user.jpg"}
                isReadOnly  
                radius="lg"
                variant="bordered"
                classNames={inputStyles}
              />
              
            </div> */}
        </div>
    );
};

export default Profile;