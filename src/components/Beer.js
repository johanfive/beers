import React from 'react';
import Name from './Name';
import Food from './Food';
import Like from './Like';
//______________________________________________________________________________


const Beer = ({id}) => (
    <div>
        <Name id={id} />
        <span>Drink it with:</span>
        <Food id={id} />
        <Like id={id} />
    </div>
);

export default Beer;
