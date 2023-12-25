import { useContext, useState } from "react";
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useSelector } from "react-redux";

const Login = () => {
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);
    const usersList = useSelector((state) => state.users.users)


    const onFinish = (values) => {
        const user = usersList.find((user) => user.email === values.email);

        if (user && user.email.toLowerCase() === values.email.toLowerCase()) {
            localStorage.setItem('email', values.email);
            setIsAuthenticated(true);
            navigate('/contacts', { replace: true });
        } else {
            setLoginUser(null);
        }
    };

    return (
        <div className="forms">
            <h1 style={{ textAlign: 'center' }}>Sign In</h1><br />
            <div>
                <Form name='normal_login' onFinish={onFinish} >
                    <Form.Item
                        name='email'
                        rules={[{ required: true, message: 'Please input your email' }]}
                    >
                        <Input type='email' placeholder='Email' className="form-input" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType='submit'
                            className='form-button'
                        >
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
                {!loginUser && (
                    <p className="login-error-message">Такого користувача не існує, він повинен пройти реєстрацію</p>
                )}
                <button className="go-back-button" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
};

export default Login;
