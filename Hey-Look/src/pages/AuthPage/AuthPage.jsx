import { Box, Container, Flex ,Image, VStack} from '@chakra-ui/react';
import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
       <Flex justifyContent={"Center"}alignItems={"Center"}gap={10}>
       {/*left side */}
       <Box display={{base:"none",md:"block"}}>
        <Image src='/auth.png' h={650} alt='phone img'/>
        </Box>
        {/*right side form */}
        <VStack spacing={4} align={"stretch"}>
          <AuthForm/>
        </VStack>
        </Flex>
        

       
      </Container>
    </Flex>
  );
};

export default AuthPage;