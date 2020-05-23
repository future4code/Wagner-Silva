import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 70%;
`

const FormContainer = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default FormContainer;