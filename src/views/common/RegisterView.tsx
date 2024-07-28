import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from '@/router/hooks';
import { RootState } from '@/redux/store';
import { useRedirect } from '@/config/providers';

// components 
import { Alert } from '@/components/common/alerts';
import { Button } from '@/components/common/buttons';
import { Card } from '@/components/common/cards';
import { Input } from '@/components/common/inputs';
import { usePostRegisterRequestMutation } from '@/redux/features/auth/api';
import { APP_NAME } from '@/config/app.config';

interface IRegisterForm {
    email: string;
    password: string;
    username: string;
    dob: string;
}

interface IFormErrors {
    email?: string;
    password?: string;
    username?: string;
    dob?: string;
}

const RegisterView: React.FC = () => {
    const [form, setForm] = useState<IRegisterForm>({
        email: '',
        password: '',
        username: '',
        dob: ''
    });

    //const [errors, setErrors] = useState<IFormErrors>({});
    const [alert, setAlert] = useState<any>(null);
    const [loginEnabled, setLoginEnabled] = useState(true);
    const [postRegisterRequest, { isLoading }] = usePostRegisterRequestMutation();

    const { token } = useSelector((state: RootState) => state.auth);
    const { push } = useRouter();
    const { redirectPath } = useRedirect();

    useEffect(() => {
        if (!form) return;
        setLoginEnabled(!validateForm(form));
    }, [form]);

    function validateForm(form: IRegisterForm): boolean {
        const { email, password, username } = form;
        //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const newErrors: IFormErrors = {};

        if (!email) {
            newErrors.email = 'Email is required';
        }
        // else if (!emailRegex.test(email)) {
        //     newErrors.email = 'Invalid email format';
        // }
        if (!password) {
            newErrors.password = 'Password is required';
        }

        if (!username) {
            newErrors.username = 'Username is required';
        }

       //setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    useEffect(() => {
        if (token) {
            push(redirectPath || '/home');
        }
    }, [token, push, redirectPath]);

    const handleUpdateForm = (id: string, value: string) => {
        setForm({ ...form, [id]: value })
    }
    const handleLoginSubmit = useCallback(async () => {
        if (validateForm(form)) {
            try {
                const response = await postRegisterRequest(form as IRegisterForm).unwrap();
                console.log('Registration successful:', response);
                setAlert({
                    type: 'success',
                    message: "Successfully registered"
                })
                push('/login')
            } catch (err: any) {
                console.error('Registration failed:', err);
                setAlert({
                    type: 'error',
                    message: err?.data.errorMessage || "Failed to register"
                })
            }
        }
    }, [form]);

    return (
        <>
            <Alert
                message={alert?.message!}
                type={alert?.type!}
                show={!!alert}
                autoClose
                onClose={() => setAlert(null)}
            />
            <div className='max-w-[450px] w-full'>
                <Card>
                    <div className='m-2 flex flex-col gap-4'>
                        <div className='flex flex-col justify-center my-4'>
                            <img className='w-10' src='./logo.svg' />
                            <p className='text-2xl font-semibold font-family-style1'>Join {APP_NAME} now!</p>
                        </div>
                        {inputList.map(item => (
                            <div key={item.id} className='w-full my-1'>
                                <p className='opacity-70 tracking-tight font-semibold text-sm mb-1'>{item.label}</p>
                                <Input
                                    type={item.id === 'password' ? 'password' : 'text'}
                                    value={form[item.id as keyof IRegisterForm]}
                                    onChange={e => handleUpdateForm(item.id, e.target.value)}
                                />
                            </div>
                        ))}
                        <p className='font-medium opacity-50 text-xs cursor-pointer'>
                            By creating account, you are agreeing to Terms & Conditions and are acknowledging our Privacy Notice applies.
                        </p>
                        <Button
                            loading={isLoading}
                            disabled={loginEnabled}
                            onClick={handleLoginSubmit}
                            loadingPlaceHolder='Creating account..'
                            variant='filled'
                        >
                            Create account
                        </Button>
                        <Button
                            onClick={() => push('/login')}>
                            Already have an account?
                        </Button>
                    </div>
                </Card>
            </div>
        </>
    );
}

export default RegisterView;



const inputList = [
    {
        id: 'username',
        label: 'Username',
    },
    {
        id: 'email',
        label: 'Email',
    },
    {
        id: 'password',
        label: 'Password',
    }
]