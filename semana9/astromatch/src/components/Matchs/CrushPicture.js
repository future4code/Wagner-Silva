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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    color: ${colors.white};
`

const CrushImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
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

const CrushPicture = (props) => {
    return (
        <CrushPictureContainer>
            <PictureContainer>
                <CrushImage src={props.crushPicture} alt={"Crush image"} />
            </PictureContainer>
            <CrushInfoContainer>
                <CrushInfo>
                    <h3>{`${props.crushName}, ${props.crushAge}`}</h3>
                    <p>{props.crushBio}</p>
                </CrushInfo>
            </CrushInfoContainer>
        </CrushPictureContainer>
    )
}

export default CrushPicture;