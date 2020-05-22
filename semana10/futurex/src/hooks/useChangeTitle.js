import { useLayoutEffect } from 'react';

const useChangeTitle = (title) => {
    useLayoutEffect(() => {
        document.title = `FutureX - ${title}`;
    })
}

export default useChangeTitle;