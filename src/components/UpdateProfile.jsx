"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { FaUser, FaImage, FaTimes } from "react-icons/fa";

export function UpdateProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    await authClient.updateUser({ name, image });
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onPress={() => setIsOpen(true)}
        radius="lg"
        className="rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
      >
        Update Profile
      </Button>

      {isOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                  <BiUser size={18} />
                </div>
                <span className="text-base font-bold text-gray-800">Update Your Profile</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <FaTimes size={12} />
              </button>
            </div>

            {/* Body */}
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-4 px-6 py-5">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <div className="flex h-11 items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 transition focus-within:border-cyan-500">
                    <FaUser size={12} className="shrink-0 text-cyan-500" />
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Image URL */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Image URL</label>
                  <div className="flex h-11 items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 transition focus-within:border-cyan-500">
                    <FaImage size={12} className="shrink-0 text-cyan-500" />
                    <input
                      name="image"
                      type="url"
                      placeholder="Enter image url"
                      className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="flex gap-3 border-t border-gray-100 px-6 py-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] py-2.5 text-sm font-bold text-white shadow-md transition hover:scale-[1.02]"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}