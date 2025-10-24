import { useEffect, useState } from 'react';
import { api } from '../api/client';

export default function PromptList() {
    const [prompts, setPrompts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        api
            .get('/prompts')
            .then((res) => setPrompts(res.data.data))
            .catch((err) =>
                setError(`❌ ${err.response?.data?.error || err.message}`)
            );
    }, []);

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Saved Prompts
            </h2>
            {error && <p className="text-red-600 text-center">{error}</p>}
            <div className="space-y-4">
                {prompts.map((p) => (
                    <div
                        key={p.id}
                        className="bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition"
                    >
                        <p className="font-medium text-gray-900">{p.prompt_text}</p>
                        {p.result_text && (
                            <p className="text-gray-600 mt-2">{p.result_text}</p>
                        )}
                    </div>
                ))}
                {prompts.length === 0 && (
                    <p className="text-gray-500 text-center">No prompts saved yet.</p>
                )}
            </div>
        </div>
    );
}
