// import React, { useEffect } from 'react';
// import axios, { AxiosResponse } from 'axios';

// export default function DashboardPage() {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response: AxiosResponse<unknown> = await axios.get('http://210.246.215.173:8000/report', {
//           headers: {
//             'accept': 'application/json',
//             'Content-Type': 'application/json',
//           },
//         });
//         console.log(response.data);
//         // Handle the response data here
//       } catch (error) {
//         console.error('Error:', error);
//         // Handle errors here
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to ensure useEffect runs only once

//   return (
//     <div className="flex flex-col justify-center items-center p-12">
   
//     </div>
//   );
// }
