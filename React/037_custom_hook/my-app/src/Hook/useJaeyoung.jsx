import { useState } from 'react';

function useJaeyoung(initState) {
    const [value, setValue] = useState(initState);
    function onChange(e) {
        setValue(e.target.value);
    }
    return [value, onChange];
}

export default useJaeyoung;