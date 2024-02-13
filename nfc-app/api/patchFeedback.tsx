// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const MyComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/Cards/');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>My Component</h1>
//       {data ? (
//         <ul>
//           {data?.map((item) => (
//             <li key={item.id}>{item.title_card}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default MyComponent;
