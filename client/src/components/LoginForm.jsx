import { useState } from 'react';
import { api } from '../api/client';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/users/login', { username, password });
            localStorage.setItem('token', data.token);
            setMsg('✅ Logged in successfully');
            setUsername('');
            setPassword('');
        } catch (err) {
            setMsg(`❌ ${err.response?.data?.error || err.message}`);
        }
    };

    return (
        <div className="flex justify-center items-center py-10">
            <form
                onSubmit={handleLogin}
                className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm space-y-4 border"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                    Login
                </h2>
                <input
                    className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 w-full p-2 rounded-md outline-none"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 w-full p-2 rounded-md outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
                    Login
                </button>
                {msg && <p className="text-sm text-center mt-2">{msg}</p>}
            </form>
        </div>
    );
}
