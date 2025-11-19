import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/imgs/logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Backend validation logic would go here
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
                <div className="text-center">
                    <Link to="/" className="inline-block">
                        <img
                            className="mx-auto h-20 w-auto hover:scale-105 transition-transform duration-300"
                            src={logo}
                            alt="NeoTrash"
                        />
                    </Link>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Bem-vindo de volta!
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Acesse sua conta para continuar
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#49A75D] focus:border-[#49A75D] focus:z-10 sm:text-sm transition-all duration-200"
                                placeholder="Endereço de email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Senha
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-[#49A75D] focus:border-[#49A75D] focus:z-10 sm:text-sm transition-all duration-200"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-[#49A75D] hover:text-[#3d8b4d] transition-colors">
                                Esqueci a senha
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#49A75D] hover:bg-[#3d8b4d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#49A75D] transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                        >
                            Entrar
                        </button>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Não tem uma conta?{' '}
                        <Link to="/register" className="font-medium text-[#49A75D] hover:text-[#3d8b4d] transition-colors">
                            Cadastrar-se
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
