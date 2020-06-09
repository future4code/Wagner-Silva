import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Container = (props) => {
    return (
        <PageContainer>
            {props.children}
        </PageContainer>
    )
}

export default Container;