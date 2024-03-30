// import { useEffect, useState } from "react";

// import { Box } from "@mui/material";

// const itemsPerPage = 5;

// export default function WineDishWithPaginate({result}) {
//     const [allGoods, setAllGoods] = useState([]);
//     const [currentPage, setCurrentPage] = useState(0);

//     const startIndex = currentPage * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const currentItems = result.slice(startIndex, endIndex);

//     useEffect(() => {
//         if (currentItems.length !== 0) {
//           setAllGoods((prevState) => [...prevState, ...currentItems])
//         }
//     }, [currentItems])


//     const handleClickNext = () => {
//         setCurrentPage(prevPage => prevPage + 1);
//     };

//     console.dir(allGoods);

//     return (
//         <Box>Paginate
//             <button onClick={handleClickNext} type="button">next</button>
//         </Box>
      
//     )
// }
// ========================================
// import { useEffect, useState } from "react";

// import { Box } from "@mui/material";

// const itemsPerPage = 5;

// export default function WineDishWithPaginate({result}) {
//     const [allGoods, setAllGoods] = useState([]);
//     const [currentPage, setCurrentPage] = useState(0);
//     const [newArr, setNewArr] = useState([]);

//     const startIndex = currentPage * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const currentItems = allGoods.slice(startIndex, endIndex);

//     useEffect(() => {
//         if (result) {
//           setAllGoods(result)
//         }
//         if (currentItems.length === 0) {
//             setNewArr((prevState) => [...prevState, ...currentItems]);
//         }
//     }, [currentItems, result])


//     const handleClickNext = () => {
//         setCurrentPage(prevPage => prevPage + 1);
//     };

//     console.dir(newArr);

//     return (
//         <Box>Paginate
//             <button onClick={handleClickNext} type="button">next</button>
//         </Box>
      
//     )
// }