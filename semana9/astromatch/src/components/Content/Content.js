import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

const ContentContainer = styled.div`
    background: ${colors.blueEffect};
    color: ${colors.white};
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