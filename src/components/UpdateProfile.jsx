// "use client";

// import { authClient } from "@/lib/auth-client";
// // import { Envelope } from "@gravity-ui/icons";
// import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
// import { BiUser } from "react-icons/bi";

// export function UpdateProfile() {
//     const onSubmit = async (e) => {
//         e.preventDefault()
//         const name = e.target.name.value;
//         const image = e.target.image.value;
//         console.log(name, image)
//         await authClient.updateUser({
//             name,
//             image,
//         })
//     }
//     return (
//         <Modal>
//             <Button className={`text-white`} variant="secondary">Update Profile</Button>
//             <Modal.Backdrop>
//                 <Modal.Container placement="auto">
//                     <Modal.Dialog className="sm:max-w-md">
//                         <Modal.CloseTrigger />
//                         <Modal.Header>
//                             <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
//                                 <BiUser className="size-5" />
//                             </Modal.Icon>
//                             <Modal.Heading>Update Your Profile</Modal.Heading>

//                         </Modal.Header>
//                         <Modal.Body className="p-6">
//                             <Surface variant="default">
//                                 <form onSubmit={onSubmit} className="flex flex-col gap-4">
//                                     <TextField className="w-full" name="name" type="text">
//                                         <Label>Name</Label>
//                                         <Input placeholder="Enter your name" />
//                                     </TextField>
//                                     <TextField className="w-full" name="image" type="url">
//                                         <Label>Image URL</Label>
//                                         <Input placeholder="Emage url" />
//                                     </TextField>
//                                     <Modal.Footer>
//                                         <Button slot="close" variant="secondary">
//                                             Cancel
//                                         </Button>
//                                         <Button
//                                             type="submit" slot="close">Submit</Button>
//                                     </Modal.Footer>

//                                 </form>
//                             </Surface>
//                         </Modal.Body>

//                     </Modal.Dialog>
//                 </Modal.Container>
//             </Modal.Backdrop>
//         </Modal>
//     );
// }
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { FaUser, FaImage } from "react-icons/fa";

const inputStyles = {
  label: "text-slate-300 text-xs pb-0.5",
  input: "text-white placeholder:text-slate-500 text-sm",
  inputWrapper: [
    "h-11",
    "!border",
    "!border-cyan-400/30",
    "bg-[#0F172A]",
    "hover:!border-cyan-400/60",
    "focus-within:!border-cyan-400",
    "transition-all",
    "duration-300",
    "rounded-xl",
  ],
};

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
      {/* Trigger Button */}
      <Button
        onPress={() => setIsOpen(true)}
        radius="lg"
        className="h-11 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
      >
        Update Profile
      </Button>

      {/* Backdrop + Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-cyan-400/20 bg-[#111827] shadow-2xl shadow-cyan-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                  <BiUser size={18} />
                </div>
                <span className="text-lg font-bold text-white">Update Your Profile</span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-4 px-6 py-5">
                <Input
                  name="name"
                  type="text"
                  label="Name"
                  labelPlacement="outside"
                  placeholder="Enter your name"
                  startContent={<FaUser size={12} className="text-cyan-300 shrink-0" />}
                  radius="lg"
                  variant="bordered"
                  classNames={inputStyles}
                />
                <Input
                  name="image"
                  type="url"
                  label="Image URL"
                  labelPlacement="outside"
                  placeholder="Enter image url"
                  startContent={<FaImage size={12} className="text-cyan-300 shrink-0" />}
                  radius="lg"
                  variant="bordered"
                  classNames={inputStyles}
                />
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 border-t border-white/10 px-6 py-4">
                <Button
                  type="button"
                  onPress={() => setIsOpen(false)}
                  variant="bordered"
                  radius="lg"
                  className="border-white/10 text-slate-400 hover:bg-white/5"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  radius="lg"
                  className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] font-semibold text-white"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}