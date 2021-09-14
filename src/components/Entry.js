import React from 'react'

function Entry({ item }) {
    console.log(item);
    return (
        <div>
            {item.name}
        </div>
    )
}

export default Entry;
