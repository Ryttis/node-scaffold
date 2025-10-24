import { useState } from 'react';
import { api } from '../api/client';

export default function PromptForm() {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
    const [msg, setMsg] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/prompts', { prompt_text: prompt, result_text: result });
            setMsg('✅ Prompt saved');
            setPrompt('');
            setResult('');
        } catch (err) {
            setMsg(`❌ ${err.response?.data?.error || err.message}`);
        }
    };

    return (
        <div className="flex justify-center items-center py-10">
            <form
                onSubmit={submit}
                className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-4 border"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                    Add Prompt
                </h2>
                <textarea
                    className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 w-full p-2 rounded-md outline-none"
                    rows="3"
                    placeholder="Prompt text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <textarea
                    className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 w-full p-2 rounded-md outline-none"
                    rows="3"
                    placeholder="Result text"
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
                    Save Prompt
                </button>
                {msg && <p className="text-sm text-center mt-2">{msg}</p>}
            </form>
        </div>
    );
}
