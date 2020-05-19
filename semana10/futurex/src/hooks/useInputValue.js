import { useState } from 'react';

const useInputValue = () => {
    const [ value, setValue ] = useState("");

    const onChangeValue = (event) => {
        setValue(event.target.value);
    }

    return [value, onChangeValue]
}

export default useInputValue;