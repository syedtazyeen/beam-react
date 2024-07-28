import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from '@/router/hooks'
import { AppDispatch, RootState } from '@/redux/store'
import { useRedirect } from '@/config/providers'
import { loginAsync, resetError } from '@/redux/features/auth'

// components 
import { Alert } from '@/components/common/alerts'
import { Button } from '@/components/common/buttons'
import { Card } from '@/components/common/cards'
import { Input } from '@/components/common/inputs'
import { APP_NAME } from '@/config/app.config'

interface ILoginForm {
    email: string;
    password: string;
}


const LoginView: React.FC = () => {
    const [loginEnabled, setLoginEnabled] = useState(true)
    const [form, setForm] = useState<ILoginForm>({
        email: '',
        password: ''
    });

    const dispatch: AppDispatch = useDispatch()
    const { isLoading, error, token } = useSelector((state: RootState) => state.auth)
    const { push } = useRouter()
    const { redirectPath } = useRedirect()

    useEffect(() => {
        setLoginEnabled(!(form.email.length > 0 && form.password.length > 0))
    }, [form])

    useEffect(() => {
        if (token) {
            push(redirectPath || '/')
        }
    }, [token, push, redirectPath])

    const handleUpdateForm = (id: string, value: string) => {
        setForm({ ...form, [id]: value })
    }

    const handleLoginSubmit = useCallback(async () => {
        dispatch(loginAsync({ email: form.email, password: form.password }))
    }, [dispatch, form])

    return (
        <>
            {error && (
                <Alert
                    message={error}
                    type='error'
                    show={true}
                    autoClose
                    onClose={() => dispatch(resetError())}
                />
            )}
            <div className='max-w-[450px] w-full'>
                <Card>
                    <div className='m-2 flex flex-col gap-4'>
                        <div className='flex flex-col justify-center my-4'>
                            <img className='w-10' src='./logo.svg' />
                            <p className='text-2xl font-semibold font-family-style1'>Log in to {APP_NAME}!</p>
                        </div>
                        <div className='w-full my-2'>
                            <p className='opacity-90 font-semibold text-sm mb-1'>Email</p>
                            <Input
                                value={form.email}
                                onChange={e => handleUpdateForm('email', e.target.value)}
                            />
                        </div>
                        <div className='w-full my-2'>
                            <p className='opacity-90 font-semibold text-sm mb-1'>Password</p>
                            <Input
                                type='password'
                                value={form.password}
                                onChange={e => handleUpdateForm('password', e.target.value)}
                            />
                        </div>
                        <p className='font-semibold text-[var(--primaryMainColor)] opacity-80 hover:opacity-100 text-sm cursor-pointer'>
                            Forgot your password?
                        </p>
                        <Button
                            loading={isLoading}
                            disabled={loginEnabled}
                            onClick={handleLoginSubmit}
                            loadingPlaceHolder='Logging in...'
                            variant='filled'
                        >
                            Login
                        </Button>
                        <Button
                            onClick={() => push('/register')}>
                            Don't have an account?
                        </Button>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default LoginView
