import Head from 'next/head';
import { Button, Code, Heading, Text } from '@chakra-ui/react'
import { useAuth } from '@/lib/auth';

const Home = () => {
   const auth = useAuth();
   return (
      <>
         <Head>
            <title>Fast Feed Back</title>
         </Head>
         <Heading>Fast Feed Back</Heading>
         <Text>
            User :<Code>{auth.user ? auth.user.email : "none"}</Code>
         </Text>
         {auth.user ?
            <Button onClick={() => auth.signout()}> Sign Out </Button>
            :
            <Button onClick={() => auth.signinWithGithub()}> Sign In </Button>
         }
      </>
   );
};

export default Home;
