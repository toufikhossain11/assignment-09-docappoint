
import Link from "next/link";

export default function NotFound() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8E7] px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl md:text-9xl font-bold text-slate-900">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-3 text-slate-800">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href={'/'}> 
            <button
          
          className="mt-8 px-7 py-3 rounded-full border border-cyan-400
text-cyan-400
hover:bg-cyan-400
hover:text-black font-medium transition-all duration-300 hover:scale-105 shadow-lg"
        >
          ← Back to Home
        </button>
        </Link>
        
      </div>
    </div>
  );
}