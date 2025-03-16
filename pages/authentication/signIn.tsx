import { getProviders, signIn } from "next-auth/react";

const SignInPage = ({ providers }: any) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
             <h1 className="text-3xl mb-4">Sign In</h1>
      {Object.values(providers).map((provider: any) => (
        <button
          key={provider.name}
          onClick={() => signIn(provider.id, { callbackUrl: "/dashboard" })}
          className="p-2 bg-blue-500 text-white rounded-md"
        >
          Sign in with {provider.name}
        </button>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
      props: { providers },
    };
  }
  
export default SignInPage;