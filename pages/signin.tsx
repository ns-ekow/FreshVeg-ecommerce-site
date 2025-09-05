import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false
        });

        if (result?.error) {
            setError('Invalid credentials');
        } else {
            router.push('/');
        }

        setLoading(false);
    };

    return (
        <>
            <Navbar/>
            <main>
                <div className='w-full h-full flex items-center justify-center p-8'>
                    <div className="form-container w-1/2 h-fit p-8 border border-gray-300 flex flex-col rounded-md shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <form onSubmit={handleSubmit} className='w-full h-full flex flex-col'>
                            <div>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='border border-gray-300 p-4 w-full mb-4 rounded-md'
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='border border-gray-300 p-4 w-full mb-4 rounded-md'
                                    required
                                />
                            </div>
                            <div className="remember flex justify-between mb-4">
                                <div>
                                    <input type="checkbox" className='mr-1'/>
                                    <label>Remember me</label>
                                </div>
                                <Link href="#" className="text-blue-500">Forgot password?</Link>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className='w-full px-8 py-4 bg-green-500 rounded-full text-white my-4 font-semibold disabled:opacity-50'
                            >
                                {loading ? 'Signing in...' : 'Login'}
                            </button>
                        </form>

                        <p> Don't have an account? <Link href='/signup' className="text-blue-500">Register</Link></p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default SignIn;