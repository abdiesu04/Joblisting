// app/register/page.tsx
"use client"; // Indicates this is a client component

import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null); // To hold error messages
    const [success, setSuccess] = useState<string | null>(null); // To hold success messages

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post('http://localhost:80/api/auth/register', {
                username,
                email,
                password,
            });

            setSuccess('Registration successful!'); // Success message
            console.log('Registration successful:', response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data.message || 'An error occurred while registering.'); // Error message
                console.error('Axios error:', error.response?.data || error.message);
            } else {
                setError('Unexpected error occurred.'); // General error message
                console.error('Unexpected error:', error);
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            {success && <p style={{ color: 'green' }}>{success}</p>} {/* Display success message */}
        </div>
    );
};

export default Register;
