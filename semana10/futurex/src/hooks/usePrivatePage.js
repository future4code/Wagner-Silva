import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const usePrivatePage = () => {
    const history = useHistory();

    useEffect( () => {
        const token = sessionStorage.getItem("token");

        if(token === null) {
            history.push("/login");
        }
    }, [history])
}