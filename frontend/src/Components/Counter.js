import React, { useEffect, useRef, useState } from "react";

const Counter = (props) => {
    const [value, setValue] = useState(null);
    const start = props.start;
    const end = props.end;

    const ref = useRef(start);
    let count = end / 160;

    if(end < 100)
    {
        count = 1
    }

    const counter = () => {
        if (ref.current < end) {
            const res = Math.ceil(ref.current + count);
            if (res > end) {
                console.log(end + '+')
                return setValue(end + '+');
            }
            setValue(res);
            ref.current = res;
        }
        else
        {
            setValue(end + '+');
        }
        setTimeout(counter, end < 100 ? 50 : 0.01);
    };

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            counter();
        }
        return () => {
            mounted = false;
        };
    }, [end]);

    return (
        <>
            <span className="footer-number">{value}</span>
        </>
    );
};

export default Counter;
