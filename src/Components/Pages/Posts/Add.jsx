import { Button, Form, Input } from 'antd';
import { useUsers } from './PostStore';

function Add() {
  let {addUser} = useUsers()
  return (
    <>
      <Form layout='vertical' onFinish={addUser}>
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

export default Add;