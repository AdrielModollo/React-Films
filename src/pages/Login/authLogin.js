import { Container, Form, Div, Label, Input, Button } from "./styles";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Login/authContext"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { isAuthenticated, login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            });
            if (response.ok) {
                const data = await response.json();
                login({ user: data.user, token: data.token });
                isAuthenticated(true);
                navigate('/');
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Div>
                <Div>
                    <Label htmlFor="password">Senha</Label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Div>
                {error && <Div className="error">{error}</Div>}
                <Button type="submit">Entrar</Button>
            </Form>
        </Container>
    );
}

export default Login;

