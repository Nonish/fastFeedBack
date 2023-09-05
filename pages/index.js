import { useAuth } from '@/lib/auth';

const Home = () => {
   const auth = useAuth();
   return (
      <>
         <button onClick={() => auth?.signinWithGitHub()}> Sign In </button>
         <div>{auth?.user?.email}</div>
         {auth?.user && <button onClick={() => auth?.signout()}> Sign Out </button>}

      </>
   );
};

export default Home;
