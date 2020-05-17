import React, { useEffect, useLayoutEffect, useState } from 'react';
import Container from '../Container/Container';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Menu from './Menu';
import Crushs from './Crushs';
import axios from 'axios';
import styled from 'styled-components';

const MatchsContent = styled(Content)`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Matchs = () => {
    const [ mobileScreen, setMobileScreen ] = useState(false);
    const [matchs, setMatchs] = useState([]);
    const [crushProfile, setCrushProfile] = useState({});
    const [newCrush, setNewCrush] = useState(true);

    useLayoutEffect(() => {
        if(!mobileScreen) {
            if(window.innerWidth >= 320 && window.innerWidth <= 420) {
                setMobileScreen(true);
            }
        } else {
            if(window.innerWidth > 420) {
                setMobileScreen(false);
            }
        }
    })

    useEffect(() => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wagner/matches")
            .then( (response) => {
                setMatchs(response.data.matches);
            })
            .catch(() => {
                console.log("deu ruim");
            })
    }, [setMatchs, setCrushProfile]);

    useEffect(() => {
        if(newCrush) {
            axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wagner/person")
                .then((response) => {
                    setCrushProfile(response.data.profile);
                })
                .catch((response) => {
                    return response.status;
                })
                setNewCrush(false)
        }
    }, [setCrushProfile, newCrush]);

    const likeCrush = () => {
        const users = JSON.parse(localStorage.getItem("users"));
        const [ userInfo ] = users.filter( account => {
            return account.id.toString() === localStorage.getItem("actualUser");
        });

        const oldUsers = users.filter(account => {
            return account.id.toString() !== userInfo.id.toString();
        });

        const newUser = {
            ...userInfo,
            matchs: [...userInfo.matchs, crushProfile.id]
        }

        localStorage.setItem("users", JSON.stringify([...oldUsers, newUser]))

        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wagner/choose-person", {
            id: crushProfile.id,
            choice: true
        })
            .then((response) => {
                setNewCrush(true);
                return response.status;
            })
            .catch((response) => {
                return response.status
            })
    }

    const unlikeCrush = () => {
        setNewCrush(true);
    }

    console.log(matchs)

    const ScreenMatchs = mobileScreen ? () => {
        return (
            <Container>
                <Header mobileMatchs={true} matchsList={matchs} />
                <MatchsContent>
                    <Crushs
                        like={likeCrush}
                        unlike={unlikeCrush}
                        photo={crushProfile.photo}
                        name={crushProfile.name}
                        age={crushProfile.age}
                        bio={crushProfile.bio}
                    />
                </MatchsContent>
            </Container>
        )
    } : () => {
        return (
            <Container>
                <Header logoCenter={true} />
                <MatchsContent>
                    <Menu matchsList={matchs}/>
                    <Crushs
                        like={likeCrush}
                        unlike={unlikeCrush}
                        photo={crushProfile.photo}
                        name={crushProfile.name}
                        age={crushProfile.age}
                        bio={crushProfile.bio}
                    />
                </MatchsContent>
            </Container>
        )
    }

    return <ScreenMatchs />;
}

export default Matchs;