import React, { useEffect } from 'react';

const Alert: React.FC<{
    message: string;
    type: 'success' | 'warn' | 'error';
    autoClose?: boolean;
    autoCloseDuration?: number;
    onClose?: () => void;
    show: boolean;
}> = ({ message, type, autoClose = true, autoCloseDuration = 3000, onClose, show }) => {

    useEffect(() => {
        if (autoClose) {
            const timer = setTimeout(() => {
                if (onClose) {
                    onClose();
                }
            }, autoCloseDuration);

            return () => clearTimeout(timer);
        }
    }, [autoClose, autoCloseDuration, onClose, show]);

    const typeStyles = {
        success: 'bg-green-500 text-white',
        warn: 'bg-yellow-500 text-black',
        error: 'bg-red-600 text-white'
    };

    return (
        <div className={`fixed z-[999]  top-0 left-0 flex justify-center w-full transition ${show ? 'translate-y-0' : 'translate-y-[-10rem]'}`}>
            <div className={`flex items-center m-2 absolute shadow-md p-2 rounded-[var(--borderRadiusPrimary)] ${typeStyles[type]}`}>
                <img
                    className='invert-[100] w-5'
                    src={type === 'success' ? './icons/success.svg' : './icons/error.svg'} />
                <p className='font-semibold px-2 tracking-tight text-sm'>{message}</p>
            </div>
        </div>
    );
}

export default Alert;
