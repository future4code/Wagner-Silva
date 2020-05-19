import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const RegisterPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`

const Register = () => {
    return (
        <RegisterPageContainer>
            <Header />
            <RegisterContainer>
                <div>oi</div>
            </RegisterContainer>
        </RegisterPageContainer>
    )
}

export default Register;