import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
    background: linear-gradient(180deg, #2F3BAB 0%, rgba(47, 59, 171, 0.9) 52.08%);
    color: #FFFFFF;
    width: 100%;
    height: 90%;
`

const Content = (props) => {
    return (
        <ContentContainer className={props.className}>
            {props.children}
        </ContentContainer>
    )
}

export default Content;