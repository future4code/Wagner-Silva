import React from 'react';
import colors from '../utils/colors';
import styled from 'styled-components';

import monday from '../assets/monday.svg';
import tuesday from '../assets/tuesday.svg';
import wednesday from '../assets/wednesday.svg';
import thursday from '../assets/thursday.svg';
import friday from '../assets/friday.svg';
import saturday from '../assets/saturday.svg';
import sunday from '../assets/sunday.svg';

const PlannerContainer = styled.section`
    background-color: ${colors.backgroundWhite};
    display: grid;
    align-items: center;
    grid-template-columns: repeat(7, 1fr);
    width: 90%;
    height: 80%;
`

const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 95%;
    border-right: ${props => props.border ? "1px solid black" : "none"};
`

const DayHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    width: 90%;
    height: 15%;
`

const DayIcon = styled.img`
    width: 25%;
    height: 25%;
`

const TaskContainer = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    width: 100%;
    height: 80%;
    overflow: scroll;
    overflow-x: hidden;
`

const Task = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 10%;
`

const Planner = (props) => {
    const setTasksOfDay = (day) => {
        const dayFiltering = props.tasks.filter( task => {
            return task.day === day;
        });

        const dayTasks = dayFiltering.map( task => {
            return (
                <Task>{task.text}</Task>
            )
        });

        return dayTasks;

    }

    console.log(props.tasks);

    const mondayTasks = setTasksOfDay("Segunda");
    const tuesdayTasks = setTasksOfDay("Terça");
    const wednesdayTasks = setTasksOfDay("Quarta");
    const thursdayTasks = setTasksOfDay("Quinta");
    const fridayTasks = setTasksOfDay("Sexta");
    const saturdayTasks = setTasksOfDay("Sábado");
    const sundayTasks = setTasksOfDay("Domingo");

    return (
        <PlannerContainer data-testid={"planner"}>
            <DayContainer border>
                <DayHeader>
                    <h3>Segunda</h3>
                    <DayIcon src={monday} alt={"Segunda"} />
                </DayHeader>
                <TaskContainer>
                    {() => {
                        const mondayFiltering = props.tasks.filter( task => {
                            return task.day === "Segunda";
                        });

                        const mondayTasks = mondayFiltering.map( task => {
                            return (
                                <Task>{task.text}</Task>
                            )
                        });

                        return mondayTasks;
                    }}
                </TaskContainer>
            </DayContainer>
            <DayContainer border>
                <DayHeader>
                    <h3>Terça</h3>
                    <DayIcon src={tuesday} alt={"Terça"} />
                </DayHeader>
                <TaskContainer>
                    {() => {
                        const tuesdayFiltering = props.tasks.filter( task => {
                            return task.day === "Terça";
                        });

                        const tuesdayTasks = tuesdayFiltering.map( task => {
                            return (
                                <Task>{task.text}</Task>
                            )
                        });

                        return tuesdayTasks;
                    }}
                </TaskContainer>
            </DayContainer>
            <DayContainer border>
                <DayHeader>
                    <h3>Quarta</h3>
                    <DayIcon src={wednesday} alt={"Quarta"} />
                </DayHeader>
                <TaskContainer>
                    {() => {
                        const wednesdayFiltering = props.tasks.filter( task => {
                            return task.day === "Quarta";
                        });

                        const wednesdayTasks = wednesdayFiltering.map( task => {
                            return (
                                <Task>{task.text}</Task>
                            )
                        });

                        return wednesdayTasks;
                    }}
                </TaskContainer>
            </DayContainer>
            <DayContainer border>
                <DayHeader>
                    <h3>Quinta</h3>
                    <DayIcon src={thursday} alt={"Quinta"} />
                </DayHeader>
                <TaskContainer>
                    {() => {
                        const thursdayFiltering = props.tasks.filter( task => {
                            return task.day === "Quinta";
                        });

                        const thursdayTasks = thursdayFiltering.map( task => {
                            return (
                                <Task>{task.text}</Task>
                            )
                        });

                        return thursdayTasks;
                    }}
                </TaskContainer>
            </DayContainer>
            <DayContainer border>
                <DayHeader>
                    <h3>Sexta</h3>
                    <DayIcon src={friday} alt={"Sexta"} />
                </DayHeader>
                <TaskContainer>
                    {fridayTasks}
                </TaskContainer>
            </DayContainer>
            <DayContainer border>
                <DayHeader>
                    <h3>Sábado</h3>
                    <DayIcon src={saturday} alt={"Sábado"} />
                </DayHeader>
                <TaskContainer>
                    {() => {
                        const saturdayFiltering = props.tasks.filter( task => {
                            return task.day === "Sábado";
                        });

                        const saturdayTasks = saturdayFiltering.map( task => {
                            return (
                                <Task>{task.text}</Task>
                            )
                        });

                        return saturdayTasks;
                    }}
                </TaskContainer>
            </DayContainer>
            <DayContainer>
                <DayHeader>
                    <h3>Domingo</h3>
                    <DayIcon src={sunday} alt={"Domingo"} />
                </DayHeader>
                <TaskContainer>
                    {() => {
                        const sundayFiltering = props.tasks.filter( task => {
                            return task.day === "Domingo";
                        });

                        const sundayTasks = sundayFiltering.map( task => {
                            return (
                                <Task>{task.text}</Task>
                            )
                        });

                        return sundayTasks;
                    }}
                </TaskContainer>
            </DayContainer>
        </PlannerContainer>
    )
}

export default Planner;