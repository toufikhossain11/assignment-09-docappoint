import { Spinner } from "@heroui/react";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0F172A]">
  <div className="rounded-full p-4 shadow-[0_0_30px_rgba(6,182,212,0.6)]">
    <Spinner
      size="lg"
      classNames={{
        circle1: "border-b-cyan-400",
        circle2: "border-b-cyan-400",
      }}
    />
  </div>
</div>
  );
};

export default Loading;