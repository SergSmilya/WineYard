import { Backdrop, Box, Typography } from "@mui/material";
import CustomButton from "../button";

interface AdultVerify {
  isOpen: boolean;
  handleChangeModalShow: (type:boolean) => void;
}

export default function AdultVerify({isOpen, handleChangeModalShow} : AdultVerify) {
  return (
    <Backdrop open={isOpen} sx={{ backdropFilter: 'blur(15px)', height:'100%', width:'100%', textAlign: 'center'}}>
      <Box sx={{ backgroundColor: '#F5EBE2', width:'60%', display:'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '97px', paddingTop:'40px', paddingBottom: '60px', rowGap: '60px' }}>
        <Typography variant='h3'>Logo</Typography>
        <Box>
          <Typography variant='h2' sx={{marginBottom: '30px'}}>Verify your age</Typography>
          <Typography variant='h1'>Are you 18?</Typography>
        </Box>
        <Box sx={{ display:'flex', columnGap: '16px'}}>
          <CustomButton text={'YES'} onClick={() => handleChangeModalShow(false)} color={'primary'} width={'128px'} type={'button'}></CustomButton>
        <CustomButton text={'NO'} onClick={() => alert('Go out')} color={'secondary'} width={'128px'} type={'button'}></CustomButton>
        </Box>
      </Box>
    </Backdrop>
  )
}


// import { Box, Container, Typography } from "@mui/material";
// import CustomButton from "../button";

// export default function AdultVerify() {
//   return (
//     <Container sx={{ backdropFilter: 'blur(15px)', height:'100%', width:'60%', textAlign: 'center'}}>
//       <Box sx={{ backgroundColor: '#F5EBE2', display:'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '97px', paddingTop:'40px', paddingBottom: '60px', rowGap: '60px' }}>
//         <Typography variant='h3'>Logo</Typography>
//         <Box>
//           <Typography variant='h2' sx={{marginBottom: '30px'}}>Verify your age</Typography>
//           <Typography variant='h1'>Are you 18?</Typography>
//         </Box>
//         <Box sx={{ display:'flex', columnGap: '16px'}}>
//           <CustomButton text={'YES'}></CustomButton>
//           <CustomButton text={'NO'}></CustomButton>
//         </Box>
//       </Box>
//     </Container>
//   )
// }
