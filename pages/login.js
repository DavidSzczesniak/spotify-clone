import { getProviders, signIn } from 'next-auth/react';

function Login({ providers }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black">
            <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="Spotify logo" />
            {Object.values(providers).map((provider, idx) => (
                <div key={idx}>
                    <button
                        className="bg-[#18D860] text-white p-3 rounded-lg"
                        onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                        Login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}
