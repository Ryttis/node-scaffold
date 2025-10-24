import { useState } from 'react';
import { api } from '../api/client';

export default function UserForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/users/register', { username, password });
            setMsg(`✅ User created: ${res.data.data.username}`);
            setUsername('');
            setPassword('');
        } catch (err) {
            setMsg(`❌ ${err.response?.data?.error || err.message}`);
        }
    };

    return (
        <div className="flex justify-center items-center py-10">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm space-y-4 border"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                    Register
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
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition">
                    Register
                </button>
                {msg && <p className="text-sm text-center mt-2">{msg}</p>}
            </form>
        </div>
    );
}
