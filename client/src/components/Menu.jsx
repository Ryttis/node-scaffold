export default function Menu({ active, onChange }) {
    const items = [
        { key: 'login', label: 'Login' },
        { key: 'register', label: 'Register' },
        { key: 'prompt', label: 'Add Prompt' },
        { key: 'list', label: 'Saved Prompts' },
    ];

    return (
        <nav className="flex justify-center space-x-4 bg-gray-900 text-white py-3">
            {items.map((item) => (
                <button
                    key={item.key}
                    onClick={() => onChange(item.key)}
                    className={`px-4 py-2 rounded-md transition ${
                        active === item.key ? 'bg-blue-600' : 'hover:bg-gray-700'
                    }`}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    );
}
