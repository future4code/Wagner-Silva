import React, { useEffect, useState } from 'react';
import CrushPicture from './CrushPicture';
import { Clear, Favorite } from '@material-ui/icons';
import axios from 'axios';
import colors from '../../utils/colors';
import styled from 'styled-components';

const CrushsContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 70% 20%;
    background-color: ${colors.white};
    color: ${colors.blackText};
    width: 40%;
    height: 90%;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (min-width: 320px) and (max-width: 420px) {
        width: 90%;
    }
`

const CrushsTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${colors.purple};

    @media (min-width: 320px) and (max-width: 420px) {
        font-size: 0.7em;
    }
`

const CrushContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const ChooseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`

const OptionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
`

const ChooseButton = styled.button`
    background-color: ${colors.white};
    width: 40%;
    height: 50%;
    border: 1px solid ${props => props.color};
    border-radius: 5px;
`

const LikeIcon = styled(Favorite)`
    width: 100%;
    height: 100%;
    color: ${colors.green};
`

const UnlikeIcon = styled(Clear)`
    width: 70%;
    height: 70%;
    color: ${colors.red};
`

const ImageLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.white};
    width: 60%;
    height: 100%;
    color: ${colors.blackText};
`

const Crushs = (props) => {
    return (
        <CrushsContainer>
            <CrushsTitleContainer>
                <h2>PRETENDENTE DA VEZ</h2>
            </CrushsTitleContainer>
            <CrushContainer>
                <CrushPicture
                    crushPicture={props.photo}
                    crushName={props.name}
                    crushAge={props.age}
                    crushBio={props.bio}
                />
            </CrushContainer>
            <ChooseContainer>
                <OptionContainer>
                    <ChooseButton color={colors.red} onClick={props.unlike}>
                        <UnlikeIcon fontSize={"large"} />
                    </ChooseButton>
                </OptionContainer>
                <OptionContainer>
                    <ChooseButton color={colors.green} onClick={props.like}>
                        <LikeIcon fontSize={"large"} />
                    </ChooseButton>
                </OptionContainer>
            </ChooseContainer>
        </CrushsContainer>
    )
}

export default Crushs;