// export default function TextCollectionItemComp(data: ICollections) {
//   const { id, box_name, box_small_description, pack_quantity, box_price } = data;
//   const { state } = useLocation();
//   const result = useSelector((state: RootState) => state.cartOrdered);
//   const [activeIndex, setActiveIndex] = useState(state ? state.currentQuantityPack : 0);
//   const dispatch = useDispatch();

//   const [currentPrice, setCurrentPrice] = useState(Number(box_price));
//   const [secondIdDoubleCollection, setSecondIdDoubleCollection] = useState<number | null>(null);
//   const [currentQuantityOrdered, setCurrentQuantityOrdered] = useState<ICurrentQuantityOrdered | null>(null);

//   const condition = box_name === RASPBERRY || box_name === SPICY || box_name === CASCADE;
//   const isBothQuantity = condition ? [6, 12] : false;

//   const handleClick = (index: number) => {
//     setActiveIndex(index);
//     if (!index) {
//       const [currentItem] = result.filter(item => item.id === id && item.box_name === box_name && item.pack_quantity < 12);
//       if (!currentItem) {
//         setCurrentQuantityOrdered(null);
//       }
//       if (currentItem) {
//         setCurrentQuantityOrdered(currentItem);
//         setSecondIdDoubleCollection(id);
//         setCurrentPrice(Number(box_price));
//       }
//     }
//     if (index) {
//       const [currentItem] = result.filter(item => item.box_name === box_name && item.pack_quantity === 12);
//       if (!currentItem) {
//         setCurrentQuantityOrdered(null);
//       }
//       if (currentItem) {
//         setSecondIdDoubleCollection(currentItem.id);
//         setCurrentQuantityOrdered(currentItem);
//       }
//     }
//     if (currentPrice !== Number(box_price) * 2) {
//       setCurrentPrice(prevState => prevState * 2);  
//     }
//   };

//   useEffect(() => {
//     if (state) {
//       setCurrentPrice(Number(box_price) * 2);  
//     }
//     if (result) {
//       for (const item of result) {
//         if (item.id === id && item.box_name === box_name) {
//           setCurrentQuantityOrdered(item);
//           setSecondIdDoubleCollection(item.id);
//           return;
//         }
//         if (item.id !== id && item.box_name === box_name) {
//           setCurrentQuantityOrdered(null);
//         }
//       }
//     }
//     if (!result.length) {
//       setCurrentQuantityOrdered(null);
//     }
//   }, [box_name, id, result, state, box_price]);

//   useEffect(() => {
//     if (activeIndex && result) {
//       for (const item of result) {
//         if (item.box_name === box_name && item.pack_quantity === 12) {
//           setCurrentQuantityOrdered(item);
//           setSecondIdDoubleCollection(item.id);
//           return;
//         } 
//         if (item.id === id && item.box_name === box_name ) {
//           setCurrentQuantityOrdered(null);
//         }
//       }
//     }
//   }, [activeIndex, box_name, id, result])

//   return (
//     <Box sx={{maxWidth: '518px'}}>
//         <Typography sx={textStockStyles} color={secondary.light}>In stock</Typography>
//         <Typography sx={titleStyle} color={success.dark}>{box_name}</Typography>
//         <Box sx={{ marginBottom: '20px'}}>
//             {isBothQuantity ? <List sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '5px'
//             }}>
//             {isBothQuantity.map((item: number, i: number) => (
//                 <ListItem key={i} sx={{width: 'auto'}}>
//                 <NumberPackBtnComp
//                     isActiveButton={activeIndex === i}
//                     onClick = {() => handleClick(i)}
//                 >{item}</NumberPackBtnComp>
//                 </ListItem>
//             ) )}
//             </List> : <StaticQuantityCollectionComp>{pack_quantity}</StaticQuantityCollectionComp>}
//         </Box>
//         <Typography sx={subTitleStyle} color={common.black}>{box_small_description}</Typography>
//         {currentQuantityOrdered && <QuantityPanelComp id={secondIdDoubleCollection ? secondIdDoubleCollection : id}>{currentQuantityOrdered.box_quantityOrder}</QuantityPanelComp>}
//         <Box sx={{marginBottom: '17px'}}>
//           <WinePriceComp>{currentPrice}</WinePriceComp>
//         </Box>
//           <Box>
//         <Box sx={{
//         display: 'flex',
//         gap: '5px'
//         }}>
//         <RouterLink to={paths.CARTPAGE} >
//           <CustomButton
//           color="primary"
//           text="Buy"
//           width="140px"
//           height="44px"
//           borderRadius="4px"
//           onClick={() => {
//           if (activeIndex) {
//             for (const item of result) {
//             if (item.id > 12 && pack_quantity === 12 && item.box_name === box_name) {
//               dispatch(addCollection(item));
//               return;
//             }
//           }
//             dispatch(addCollection({ ...data, pack_quantity: 12, box_price: currentPrice, id: RandomInteger(data.id) }));
//             return;
//           }
//             dispatch(addCollection({...data, box_price: currentPrice}));
//           }}
//         />
//         </RouterLink>
//         <SecondaryButtonComp onClick={() => {
//         if (activeIndex) {
//           for (const item of result) {
//             if (item.id > 12 && item.pack_quantity === 12 && item.box_name === box_name) {
//               dispatch(addCollection(item));
//               return;
//             }
//           }
//           dispatch(addCollection({ ...data, pack_quantity: 12, box_price: currentPrice, id: RandomInteger(data.id) }));
//           return;
//         }
//           dispatch(addCollection({...data, box_price: currentPrice}));
//         }}>{trashIcon}</SecondaryButtonComp>
//             </Box> 
//           </Box> 
//     </Box>
//   )
// }

import { Box, List, ListItem, Typography } from "@mui/material";
import { ICollections } from "../../types/collections";
import { subTitleStyle, textStockStyles, titleStyle } from "../TextWineItemComp";
import { secondary, success } from "../../theme/palette";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { common } from "@mui/material/colors";
import { RootState } from "../../store";
import QuantityPanelComp from "../QuantityPanelComp";
import StaticQuantityCollectionComp from "../StaticQuantityCollectionComp";
import NumberPackBtnComp from "../NumberPackBtnComp";
import { useEffect, useState, useCallback } from "react";
import { CASCADE, RASPBERRY, SPICY } from "../../CONST/baseConst";
import WinePriceComp from "../WinePriceComp/inedx";
import RouterLink from "../../routes/routerLink";
import { paths } from "../../config/path";
import CustomButton from "../button";
import SecondaryButtonComp from "../SecondaryButtonComp";
import trashIcon from '../../assets/icons/trash.svg';
import { addCollection } from "../../store/cartOrderedSlice";
import RandomInteger from "../../helpers/RandomInteger";

// Интерфейс для текущего количества заказанных товаров
interface ICurrentQuantityOrdered extends ICollections {
  box_quantityOrder: number;
}

// Главный компонент
export default function TextCollectionItemComp(data: ICollections) {
  const { id, box_name, box_small_description, pack_quantity, box_price } = data;
  const { state } = useLocation();
  const result = useSelector((state: RootState) => state.cartOrdered);
  const [activeIndex, setActiveIndex] = useState(state ? state.currentQuantityPack : 0);
  const dispatch = useDispatch();

  const [currentPrice, setCurrentPrice] = useState(Number(box_price));
  const [secondIdDoubleCollection, setSecondIdDoubleCollection] = useState<number | null>(null);
  const [currentQuantityOrdered, setCurrentQuantityOrdered] = useState<ICurrentQuantityOrdered | null>(null);

  const isBothQuantity = [RASPBERRY, SPICY, CASCADE].includes(box_name) ? [6, 12] : false;

  // Функция обновления текущего количества заказов
  const updateCurrentQuantityOrdered = useCallback(() => {
    if (result) {
      const currentItem = result.find(item => item.id === id && item.box_name === box_name);
      setCurrentQuantityOrdered(currentItem || null);
      setSecondIdDoubleCollection(currentItem?.id || null);
    }
  }, [box_name, id, result]);

  // Функция обработки клика
  const handleClick = useCallback((index: number) => {
    setActiveIndex(index);
    if (index === 0) {
      const currentItem = result.find(item => item.id === id && item.box_name === box_name && item.pack_quantity < 12);
      setCurrentQuantityOrdered(currentItem || null);
      setSecondIdDoubleCollection(currentItem ? id : null);
      setCurrentPrice(Number(box_price));
    } else {
      const currentItem = result.find(item => item.box_name === box_name && item.pack_quantity === 12);
      setCurrentQuantityOrdered(currentItem || null);
      setSecondIdDoubleCollection(currentItem?.id || null);
      if (currentPrice !== Number(box_price) * 2) {
        setCurrentPrice(prevState => prevState * 2);
      }
    }
  }, [box_name, box_price, currentPrice, id, result]);

  // Обновление состояния при изменении зависимостей
  useEffect(() => {
    if (state) {
      setCurrentPrice(Number(box_price) * 2);
    }
    updateCurrentQuantityOrdered();
  }, [box_name, box_price, id, result, state, updateCurrentQuantityOrdered]);

  // Ещё одно обновление состояния при изменении activeIndex
  useEffect(() => {
    if (activeIndex && result) {
      const currentItem = result.find(item => item.box_name === box_name && item.pack_quantity === 12);
      setCurrentQuantityOrdered(currentItem || null);
      setSecondIdDoubleCollection(currentItem?.id || null);
    }
  }, [activeIndex, box_name, id, result]);

  return (
    <Box sx={{ maxWidth: '518px' }}>
      <Typography sx={textStockStyles} color={secondary.light}>In stock</Typography>
      <Typography sx={titleStyle} color={success.dark}>{box_name}</Typography>
      <Box sx={{ marginBottom: '20px' }}>
        {isBothQuantity ? (
          <List sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            {isBothQuantity.map((quantity, i) => (
              <ListItem key={i} sx={{ width: 'auto' }}>
                <NumberPackBtnComp
                  isActiveButton={activeIndex === i}
                  onClick={() => handleClick(i)}
                >
                  {quantity}
                </NumberPackBtnComp>
              </ListItem>
            ))}
          </List>
        ) : (
          <StaticQuantityCollectionComp>{pack_quantity}</StaticQuantityCollectionComp>
        )}
      </Box>
      <Typography sx={subTitleStyle} color={common.black}>{box_small_description}</Typography>
      {currentQuantityOrdered && (
        <QuantityPanelComp id={secondIdDoubleCollection || id}>
          {currentQuantityOrdered.box_quantityOrder}
        </QuantityPanelComp>
      )}
      <Box sx={{ marginBottom: '17px' }}>
        <WinePriceComp>{currentPrice}</WinePriceComp>
      </Box>
      <Box sx={{ display: 'flex', gap: '5px' }}>
        <RouterLink to={paths.CARTPAGE}>
          <CustomButton
            color="primary"
            text="Buy"
            width="140px"
            height="44px"
            borderRadius="4px"
            onClick={() => {
              const newData = {
                ...data,
                pack_quantity: activeIndex ? 12 : pack_quantity,
                box_price: currentPrice,
                id: activeIndex ? RandomInteger(data.id) : id
              };
              dispatch(addCollection(newData));
            }}
          />
        </RouterLink>
        <SecondaryButtonComp onClick={() => {
          const newData = {
            ...data,
            pack_quantity: activeIndex ? 12 : pack_quantity,
            box_price: currentPrice,
            id: activeIndex ? RandomInteger(data.id) : id
          };
          dispatch(addCollection(newData));
        }}>{trashIcon}</SecondaryButtonComp>
      </Box>
    </Box>
  );
}