import { useState, useRef } from 'react'
import Background from './images/background.png'
import Position from './teethposition.json'
import TeethPart from './Part'
import _ from 'lodash'

export default function Teeth({
    items,
    setItems
}) {
    const imageRef = useRef(null)

    const onIdentifierClick = (identifier) => {
        let selected = _.clone(items)
        if (selected.includes(identifier)) {
            selected = selected.filter(s => s !== identifier)
            setItems(selected)
        } else {
            selected.push(identifier)
            setItems(selected)
        }
    }

    const onClickHandler = (e) => {
        const x = e.clientX * 100 / imageRef.current.offsetWidth
        const y = e.clientY * 100 / imageRef.current.offsetHeight

        for (let i = 0; i < Position.length; i++) {
            const current = Position[i]
            if (x < current.left) continue
            if (x > current.left + current.width) continue
            if (y < current.top) continue
            if (y > current.top + current.height) continue

            onIdentifierClick(current.identifier)
            break
        }        
    }

    return (
        <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
        }}>
            <img 
                ref={imageRef}
                style={{
                    top: '0px',
                    left: '0px',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }} 
                src={Background} 
                onClick={onClickHandler}
            />    

            {Position.map((s, index) => (
                <TeethPart 
                    identifier={s.identifier}
                    shouldShow={items.includes(s.identifier)}
                    key={index}
                />
            ))}
        </div>
    )
}