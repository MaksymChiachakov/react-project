import { useState } from "react"
import { Button, Form, Input } from 'antd'
import ControlledForm from "../../form/form"
import { useNavigate } from "react-router-dom"

const Login = ({ usersList, setIsAuthenticated }) => {
    const [loginUser, setLoginUser] = useState({})
    const navigate = useNavigate();

    const onFinish = (values) => {
        const user = usersList.find((user) => user.email === values.email)
        setLoginUser(user)

        if (user.email.toLowerCase() === values.email.toLowerCase()) {
            localStorage.setItem('email', values.email)
            setIsAuthenticated(true)
            navigate('/contacts', { replace: true })
        }
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Login</h1><br />
            <div>
                <Form name='normal_login' onFinish={onFinish} style={{ width: '100%' }}>
                    <Form.Item
                        name='email'
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input type='email' placeholder='Email' />
                    </Form.Item>
                    <Form.Item >
                        <Button
                            type='primary'
                            style={{ width: '100%' }}
                            htmlType='submit'
                            className='login-form-button'
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                {!loginUser && (
                    <p>Такого користувача не існує, він повинен пройти реєстрацію</p>
                )}
            </div>
            {/* <ControlledForm /> */}
        </>
    )

}

export default Login