import React from 'react'

const Flag = porps => {
    return <i className={porps.nationalityCode + ' flag'}></i>;
};

export default Flag;