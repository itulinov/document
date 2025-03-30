import React from 'react'
import Main from '../Main'
import Classes from './Other.module.css'

function Other({docs, type}) {
    // делим маcсив на подмассивы по три элемента
    const chunks = ((array, size) => {
        const result = []
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size))
        }

        return result
    })(docs, 3)


    return (
        <div className={Classes.Other}>
            {chunks.map((chunk, i) => {
                return <Main key={i} docs={chunk} type={type}/>
            })}
        </div>
    )
}

export default Other
