import { useState } from 'react';
import Menu from './components/Menu';
import LoginForm from './components/LoginForm';
import UserForm from './components/UserForm';
import PromptForm from './components/PromptForm';
import PromptList from './components/PromptList';

export default function App() {
    const [active, setActive] = useState('login');

    return (
        <div className="min-h-screen bg-gray-100">
            <Menu active={active} onChange={setActive} />

            {active === 'login' && <LoginForm />}
            {active === 'register' && <UserForm />}
            {active === 'prompt' && <PromptForm />}
            {active === 'list' && <PromptList />}
        </div>
    );
}
