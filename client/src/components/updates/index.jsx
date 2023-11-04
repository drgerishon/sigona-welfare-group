import { Box, Slide } from '@mui/material';
import { UpdateContainer, UpdateText } from '../../styles/updates';
import { useEffect, useState } from 'react';

const messages = [
  'Please make payment on time',
  'There will be a meeting on 27th, Nov,2023',
  'Please check all contribution on the phone',
];

const Updates = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);

      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <UpdateContainer>
      <Slide direction={show ? "left" : "right"} in={show}
      timeout={{ 
        enter: 200,
        exit: 100
      }}
      >
        <Box display={'flex'} justifyContent="center" alignItems="center">
         <UpdateText> {messages[messageIndex]}</UpdateText>
        </Box>
      </Slide>
    </UpdateContainer>
  );
};

export default Updates;
