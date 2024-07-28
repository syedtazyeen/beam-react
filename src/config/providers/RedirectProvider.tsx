import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface RedirectContextType {
    redirectPath: string | null;
    setRedirectPath: (path: string | null) => void;
}

const RedirectContext = createContext<RedirectContextType | undefined>(undefined);

export const RedirectProvider = ({ children }: { children: ReactNode }) => {
    const [redirectPath, setRedirectPath] = useState<string | null>(null);

    useEffect(()=>{console.log(redirectPath);
    },[redirectPath])

    return (
        <RedirectContext.Provider value={{ redirectPath, setRedirectPath }}>
            {children}
        </RedirectContext.Provider>
    );
};

export const useRedirect = (): RedirectContextType => {
    const context = useContext(RedirectContext);
    if (!context) {
        throw new Error('useRedirect must be used within a RedirectProvider');
    }
    return context;
};
