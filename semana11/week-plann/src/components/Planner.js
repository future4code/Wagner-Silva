import React from 'react';
import colors from '../utils/colors';
import styled from 'styled-components';
import weekDays from '../utils/weekDays';

import monday from '../assets/monday.svg';
import tuesday from '../assets/tuesday.svg';
import wednesday from '../assets/wednesday.svg';
import thursday from '../assets/thursday.svg';
import friday from '../assets/friday.svg';
import saturday from '../assets/saturday.svg';
import sunday from '../assets/sunday.svg';

const PlannerContainer = styled.div`
    background-color: ${colors.backgroundWhite};
    display: grid;
    grid-template-columns: repeat(1fr, 7);
    width: 90%;
    height: 80%;
`

const Planner = (props) => {
    return (
        <PlannerContainer data-testid={"planner"} />
    )
}

export default Planner;