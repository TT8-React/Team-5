import axios from 'axios';
import React, { useContext, useReducer } from 'react'
import { Link } from 'react-router-dom';
import { API } from '../../API';
import ErrorForm from '../../components/ErrorForm';
import Input from '../../components/InputBox'
import SignParagraph from '../../components/SignParagraph';
import { AuthContext } from '../../context';
import { Container, MainButton, SignCard, Title } from '../../styled/styleComponent'
import { validationSchemaSignIn } from '../../validationSchema';
import { LogInStyled } from './styled';
// import Loading from '../../Components/Loading';
const initialState = {
    email: "",
    password: "",
    error: {},
    isLoading: false,
};
export const ACTIONS = {
    HANDLE_INPUT_CHANGE: 'handleInputChange',
    HANDLE_CHECKBOX_CHANGE: 'handleCheckboxChange',
    LOADING: 'loading',
    ERROR: 'error',
    SELECT_PHONE: 'selectPhone',
}
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.HANDLE_INPUT_CHANGE:
            return {
                ...state,
                [action.id]: action.value,
            };
        case ACTIONS.HANDLE_CHECKBOX_CHANGE:
            return {
                ...state,
                isChecked: action.checked,
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
const LogIn = () => {
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
            await validationSchemaSignIn.validate({
                email: formState.email,
                password: formState.password,
            }, { abortEarly: false });
            const res = await axios.post(`${API}/users/login`, {
                email: formState.email,
                password: formState.password
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
            <LogInStyled>
                <SignCard className='card'>
                    <Title>Log In</Title>
                    <form onSubmit={handleSubmit}>
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
                        <MainButton>LOG IN</MainButton>
                            {formState.error?.isAxiosError && <ErrorForm>{formState.error?.isAxiosError}</ErrorForm>}
                    </form> 
                    <SignParagraph p="Don’t have an account ?"link="Sign up"path="Signup"/>
                </SignCard>
            </LogInStyled>
        </Container>
    )
}

export default LogIn