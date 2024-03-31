// import { useEffect, useState } from "react";

// import { Box } from "@mui/material";

// const itemsPerPage = 8;

// export default function WineDishWithPaginate({result}) {
//     const [allGoods, setAllGoods] = useState([]);
//     const [currentPage, setCurrentPage] = useState(0);

//     const startIndex = currentPage * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const currentItems = result.slice(startIndex, endIndex);

//     useEffect(() => {
//         if (allGoods.length === 0) {
//             setAllGoods(currentItems);
//             return;
//         }
//     }, [allGoods.length, currentItems])


//     const handleClickNext = () => {
//         if (allGoods.length === result.length) {
//             alert('request for new page');
//             return;
//         }
//         setCurrentPage(prevPage => prevPage + 1);
//         setAllGoods((prevState) => [...prevState, ...currentItems]);
//     };

//     console.dir(allGoods);

//     return (
//         <Box>Paginate
//             <button onClick={handleClickNext} type="button">next</button>
//         </Box>
      
//     )
// }