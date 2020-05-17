import React, { useEffect, useLayoutEffect, useState } from 'react';
import Container from '../Container/Container';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Menu from './Menu';
import Crushs from './Crushs';
import styled from 'styled-components';

const MatchsContent = styled(Content)`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Matchs = () => {
    const [ mobileScreen, setMobileScreen ] = useState(false);

    useLayoutEffect(() => {
        if(!mobileScreen) {
            if(window.innerWidth >= 320 && window.innerWidth <= 420) {
                console.log("setando width");
                setMobileScreen(true);
            }
        } else {
            if(window.innerWidth > 420) {
                setMobileScreen(false);
            }
        }
    })

    const ScreenMatchs = mobileScreen ? () => {
        return (
            <Container>
                <Header mobileMatchs={true} />
                <MatchsContent>
                    <Crushs />
                </MatchsContent>
            </Container>
        )
    } : () => {
        return (
            <Container>
                <Header logoCenter={true} />
                <MatchsContent>
                    <Menu visible={true}/>
                    <Crushs />
                </MatchsContent>
            </Container>
        )
    }

    return <ScreenMatchs />;
}

export default Matchs;