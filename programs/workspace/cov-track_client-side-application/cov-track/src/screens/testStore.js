import React from 'react';
import mainStore, { TimerView } from '../context/Store';

function testStore() {
    return (
        <TimerView timer={mainStore} />
    );
}

export default testStore;
