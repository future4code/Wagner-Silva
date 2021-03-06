import React from 'react';
import colors from '../utils/colors';
import styled from 'styled-components' ;
import weekDays from '../utils/weekDays';

import logo from '../assets/logo.svg';

const HeaderContainer = styled.header`
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 20% 40% 40%;
    width: 100%;
    height: 10%;
    color: ${colors.backgroundWhite}
`

const Logo = styled.img`
    width: 50%;
    height: 80%;
`

const AddTaskContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const Input = styled.input`
    width: 50%;
    height: 50%;
`

const WeekDays = styled.select`
    width: 20%;
    height: 45%;
`

const AddTaskButton = styled.button`
    width: 10%;
    height: 45%;
`

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 100%;
`

const Filter = styled.select`
    width: 75%;
    height: 30%;
`

const Header = (props) => {
    const weekDaysOptions = [
                        "Escolha o dia da semana", 
                        ...weekDays
                    ].map( (option, index) => {
                        if(index === 0) {
                            return <option key={option} value={""}>{option}</option>
                        }

                        return <option key={option} value={option}>{option}</option>
                    });

    const filterOptions = ["Todas as tarefas", "Pendentes", "Completas"].map( (option, index) => {
        if(index === 0) {
            return <option key={option} value={""}>{option}</option>
        }

        return <option key={option} value={option}>{option}</option>
    })
    return (
        <HeaderContainer data-testid={"header"}>
            <Logo src={logo} alt={"Logo WeekPlann"}/>
            <AddTaskContainer>
                <label htmlFor={'add-task'}>Nova tarefa:</label>
                <Input 
                    type={"text"}
                    value={props.taskText}
                    onChange={props.onChangeTaskText}
                    placeholder={"Adicione uma tarefa"}
                    id={"add-task"}
                />
                <WeekDays value={props.weekDay} onChange={props.onChangeWeekDay}>
                    {weekDaysOptions}
                </WeekDays>
                <AddTaskButton onClick={props.addTask} data-testid={"add-task-button"}>Adicionar</AddTaskButton>
            </AddTaskContainer>
            <FilterContainer>
                <label htmlFor={'filter'}>Filtros:</label>
                <Filter
                    value={props.filterValue}
                    onChange={props.onChangeFilterValue}
                    id={"filter"}
                >
                    {filterOptions}
                </Filter>
            </FilterContainer>
        </HeaderContainer>
    )
}

export default Header;