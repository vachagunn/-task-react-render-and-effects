import React, { useState, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [data, setData] = useState(-1);

    useEffect(() => {
        const callback = (data: number) => setData(data);
        subscribe(props.sourceId, callback);
        return () => {
            unsubscribe(props.sourceId, callback);
            setData(-1);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {data}
        </div>
    );
}
