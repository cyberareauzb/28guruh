import { Button, Divider, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({setLoader}) {
    let navigate = useNavigate()
    let handleLogin = (values)=>{
        axios.post('/login', values).then(res=>{
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            navigate('/dashboard')
        }).catch(error=>{
            alert("Login yoki parol hato")
            setLoader(false)
        })
    }

  
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'aliceblue'
        }}>
            <div style={{
                borderRadius: '20px',
                padding: '25px',
                width: '400px',
                backgroundColor: '#fff'
            }}>
                <h2>TIZIMGA KIRISH</h2>
                <Divider />
                <Form onFinish={handleLogin} layout='vertical'>
                    <Form.Item name={"email"} label="Emailni kiriting">
                        <Input />
                    </Form.Item>
                    <Form.Item name={"password"} label={'Parolni kiriting'}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit' type='primary'>Kirish</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;