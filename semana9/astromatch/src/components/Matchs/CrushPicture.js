import React from 'react';
import colors from '../../utils/colors';
import styled from 'styled-components';

const CrushPictureContainer = styled.div`
    width: 60%;
    height: 100%;
    position: relative;

    @media (min-width: 320px) and (max-width: 420px) {
        width: 90%;
    }
`

const PictureContainer = styled.div`
    background-color: ${colors.purple};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    color: ${colors.white};
`

const CrushInfoContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
`

const CrushInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 30%;
    color: ${colors.white};
`

const CrushPicture = () => {
    return (
        <CrushPictureContainer>
            <PictureContainer>
                <h1>FOTO</h1>
            </PictureContainer>
            <CrushInfoContainer>
                <CrushInfo>
                    <h3>Nome, idade</h3>
                    <p>Texto de descrição do pretendente</p>
                </CrushInfo>
            </CrushInfoContainer>
        </CrushPictureContainer>
    )
}

export default CrushPicture;