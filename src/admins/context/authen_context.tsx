import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    user: any | null;
    token: string | null;
    setAuthData: (token: string, user: any) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('authToken'));
    const [user, setUser] = useState<any>(JSON.parse(localStorage.getItem('userData') || 'null'));

    const setAuthData = (token: string, user: any) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('userData', JSON.stringify(user));
        setToken(token);
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, setAuthData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
