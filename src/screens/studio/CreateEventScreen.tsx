import { Button } from '@/components/common/buttons';
import { Card, CardItem } from '@/components/common/cards';
import { Input, Textarea } from '@/components/common/inputs'
import { usePostEventMutation } from '@/redux/features/events/api';
import { useRouter } from '@/router/hooks';
import React, { useEffect, useState } from 'react'

interface ICreateForm {
    name: string;
    desc: string;
    categoryId: string
}

const CreateEventScreen: React.FC = () => {
    const [form, setForm] = useState<ICreateForm>({
        name: '',
        desc: '',
        categoryId: ''
    });
    const [submitEnabled, setSubmitEnabled] = useState(false)

    useEffect(() => {
        if (form.name === '') setSubmitEnabled(false)
        else setSubmitEnabled(true)
    }, [form])

    const handleUpdateForm = (id: string, value: string) => {
        setForm({ ...form, [id]: value })
    }

    const [postEvent, { isLoading, isSuccess, isError }] = usePostEventMutation()
    const handleSubmitForm = () => {
        postEvent({ event: form })
    }
    const router = useRouter()

    useEffect(() => {
        //alert(isSuccess || isError)
        if (isSuccess) {
            router.push('/studio/events')
            alert('Event created')
        }
    }, [isError, isSuccess])

    return (
        <div className='max-w-[780px] m-auto'>
            <Card>
                <CardItem label={'Event name'} size='large'>
                    <Input
                        value={form.name}
                        onChange={e => handleUpdateForm('name', e.target.value)}
                    />
                </CardItem>
                <div className='my-8' />
                <CardItem label={'Event description'} size='small'>
                    <Textarea
                        value={form.desc}
                        onChange={e => handleUpdateForm('desc', e.target.value)}
                    />
                </CardItem>
            </Card>
            <Card>
                <div className='w-full flex justify-between'>
                    <Button size='medium' type='error'>Discard</Button>
                    <Button
                        width='10rem'
                        onClick={handleSubmitForm}
                        disabled={!submitEnabled}
                        loading={isLoading}
                        loadingPlaceHolder='Creating event...'
                        size='medium'
                        variant='filled'>Create event</Button>
                </div>
            </Card>
        </div>
    )
}

export default CreateEventScreen