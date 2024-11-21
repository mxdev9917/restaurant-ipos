import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    data: any | null;
    token: string | null;
    setAuthData: (token: string, data: any) => void;
    logout: () => void;
}

const AuthContext = createContext < AuthContextType | undefined > (undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState < string | null > (localStorage.getItem('authToken'));
    const [data, setData] = useState < any > (JSON.parse(localStorage.getItem('Data') || 'null'));

    const setAuthData = (token: string, data: any) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('Data', JSON.stringify(data));
        setToken(token);
        setData(data);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('Data');
        setToken(null);
        setData(null);
    };

    return (
        <AuthContext.Provider value={{ data, token, setAuthData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
