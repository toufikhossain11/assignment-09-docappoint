// "use client";

// import { Input, Button } from "@heroui/react";
// import { useState } from "react";

// const SearchDoctors = ({ setDoctors}) => {
//   const [search, setSearch] = useState("");

//   const handleSearch = async () => {
//     const res = await fetch(
//       `http://localhost:5000/allAppointments?search=${search}`
//     );

//     const data = await res.json();

//     setDoctors(data);
//   };

//   return (
//     <div className="flex gap-4">
//       <Input
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search doctor by name..."
//       />

//       <Button onPress={handleSearch}>
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchDoctors;