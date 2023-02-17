import axios from 'axios';
import React, { useContext, useReducer } from 'react'
import { Link } from 'react-router-dom';
import { ACTIONS } from '../../Action';
import { API } from '../../API';
import ErrorForm from '../../components/ErrorForm';
import Input from '../../components/InputBox'
import SignParagraph from '../../components/SignParagraph';
import { AuthContext } from '../../context';
import { Container, MainButton, SignCard, Title } from '../../styled/styleComponent'
import { validationSchemaRegister } from '../../validationSchema';
import { LogInStyled } from './styled';
import Loading from '../../components/Loading';
const initialState = {
    name: "",
    email: "",
    password: "",
    error: {},
    isLoading: false,
};
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.HANDLE_INPUT_CHANGE:
            return {
                ...state,
                [action.id]: action.value,
            };
        case ACTIONS.LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case ACTIONS.ERROR:
            return {
                ...state,
                error: action.errors,
            };
        default:
            return state;
    }
};
const SignUp = () => {
    const [formState, dispatch] = useReducer(reducer, initialState);
    const [, setIsAuthenticated] = useContext(AuthContext);
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        dispatch({ type: ACTIONS.HANDLE_INPUT_CHANGE, id, value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.LOADING, isLoading: true });
        try {
            await validationSchemaRegister.validate(formState, { abortEarly: false });
            const res = await axios.post(`${API}/users/signup`, {
                name: formState.name,
                email: formState.email,
                password: formState.password,
            });
            if (res.data) {
                localStorage.setItem('token', res.data.token);
                setIsAuthenticated(true)
            }
        } catch (error) {
            if (error.isAxiosError) {
                dispatch({ type: ACTIONS.ERROR, errors: { isAxiosError: error.message } });
            } else {
                const errors = error.inner
                    ? error.inner.reduce((acc, { path, message }) => {
                        acc[path] = message;
                        return acc;
                    }, {})
                    : {};
                dispatch({ type: ACTIONS.ERROR, errors });
            }
        } finally {
            dispatch({ type: ACTIONS.LOADING, isLoading: false });
        }
    }
    return (
        <Container>
            {formState.isLoading&&<Loading/>}
            <LogInStyled>
                <SignCard className='card'>
                    <Title>SignUp</Title>
                    <form onSubmit={handleSubmit}>
                        {formState.error?.name && <ErrorForm>{formState.error?.name}</ErrorForm>}
                        <Input
                            onChange={handleInputChange}
                            id="name"
                            type="text"
                            placeholder="Enter Name"
                            label="Name"
                            value={formState.name}
                        />
                        {formState.error?.email && <ErrorForm>{formState.error?.email}</ErrorForm>}
                        <Input
                            onChange={handleInputChange}
                            id="email"
                            type="text"
                            placeholder="Enter Email ID"
                            label="Email ID"
                            value={formState.email}
                        />
                        <div className="password">
                            {formState.error?.password && <ErrorForm>{formState.error?.password}</ErrorForm>}
                            <Input
                                onChange={handleInputChange}
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                label="Password"
                                value={formState.password}
                            />
                            <Link to="forgotPassword" className="forgot">Forgotpassword ?</Link>
                        </div>
                        <MainButton>SignUp</MainButton>
                        {formState.error?.isAxiosError && <ErrorForm>{formState.error?.isAxiosError}</ErrorForm>}
                    </form>
                    <SignParagraph p="Already have an account ?" link="Login" path="Login" />
                </SignCard>
            </LogInStyled>
        </Container>
    )
}

export default SignUp