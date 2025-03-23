import React from 'react'
import Main from '../Main'
import Classes from './Other.module.css'

function Other({menu, type}) {
    // делим маcсив на подмассивы по три элемента
    const chunks = ((array, size) => {
        const result = []
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size))
        }

        return result
    })(menu, 3)


    return (
        <div className={Classes.Other}>
            {chunks.map((chunk, i) => {
                return <Main key={i} menu={chunk} type={type}/>
            })}
        </div>
    )
}

export default Other
