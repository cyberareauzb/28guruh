import { Button, Form, Input } from 'antd';
import { useUsers } from './PostStore';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';

function Edit() {
    let { updateUser, ed } = useUsers()
    let [form] = useForm()
    useEffect(() => {
        form.setFieldsValue(ed)
    }, [ed])

    return (
        <>
            <Form form={form} layout='vertical' onFinish={updateUser}>
                <Form.Item hidden={true} name={'id'}>
                    <Input />
                </Form.Item> n
                <Form.Item label="Ismi" name={'firstname'}>
                    <Input />
                </Form.Item>
                <Form.Item label="Familya" name={'lastname'}>
                    <Input />
                </Form.Item>
                <Form.Item label="Telefon" name={'tel'}>
                    <Input />
                </Form.Item>
                <Form.Item label="Yoshi" name={'age'}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Saqlash</Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Edit;