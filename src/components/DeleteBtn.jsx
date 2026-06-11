"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@heroui/react";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { MdWarningAmber } from "react-icons/md";

export function DeleteBtn({ bookingId , onDeleted}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      toast.success("Booking deleted!");
      if (onDeleted) onDeleted(bookingId);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Delete Trigger Button */}
      <Button
        size="sm"
        radius="lg"
        variant="bordered"
        onPress={() => setIsOpen(true)}
        className="border-red-500/30 text-xs text-red-400 hover:bg-red-500/10"
        startContent={<FaTrash size={11} />}
      >
        Delete
      </Button>

      {/* Portal — renders outside card, directly on body */}
      {isOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl border border-white/10 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex flex-col items-center px-6 pt-6 pb-4 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
                <MdWarningAmber size={28} className="text-red-400" />
              </div>
              <h2 className="text-lg font-bold text-gray-950">Delete permanently?</h2>
              <p className="mt-2 text-sm text-gray-950/80">
                This will permanently delete this booking and all of its data.{" "}
                <span className="font-semibold text-gray-950">This action cannot be undone.</span>
              </p>
            </div>

            {/* Footer */}
            <div className="flex gap-3 border-t border-white/10 px-6 py-4">
              <Button
                onPress={() => setIsOpen(false)}
                variant="bordered"
                radius="lg"
                className="flex-1 rounded-3xl bg-cyan-500 text-sm text-white "
              >
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                radius="lg"
                className="flex-1 rounded-3xl !bg-red-500 text-sm font-semibold text-white "
              >
                Delete
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}