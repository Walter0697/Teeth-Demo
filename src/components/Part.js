import { useMemo } from 'react'
import Position from './teethposition.json'

import Teeth1 from './images/teeth1.png'
import Teeth2 from './images/teeth2.png'
import Teeth3 from './images/teeth3.png'
import Teeth4 from './images/teeth4.png'
import Teeth5 from './images/teeth5.png'
import Teeth6 from './images/teeth6.png'
import Teeth7 from './images/teeth7.png'
import Teeth8 from './images/teeth8.png'
import Teeth9 from './images/teeth9.png'
import Teeth10 from './images/teeth10.png'
import Teeth11 from './images/teeth11.png'
import Teeth12 from './images/teeth12.png'
import Teeth13 from './images/teeth13.png'
import Teeth14 from './images/teeth14.png'
import Teeth15 from './images/teeth15.png'
import Teeth16 from './images/teeth16.png'
import Teeth17 from './images/teeth17.png'
import Teeth18 from './images/teeth18.png'
import Teeth19 from './images/teeth19.png'
import Teeth20 from './images/teeth20.png'
import Teeth21 from './images/teeth21.png'
import Teeth22 from './images/teeth22.png'
import Teeth23 from './images/teeth23.png'
import Teeth24 from './images/teeth24.png'
import Teeth25 from './images/teeth25.png'
import Teeth26 from './images/teeth26.png'
import Teeth27 from './images/teeth27.png'
import Teeth28 from './images/teeth28.png'
import Teeth29 from './images/teeth29.png'
import Teeth30 from './images/teeth30.png'
import Teeth31 from './images/teeth31.png'
import Teeth32 from './images/teeth32.png'

export default function TeethPart({
    identifier,
    shouldShow,
}) {
    const imageSource = useMemo(() => {
        switch(identifier) {
            case 1:
                return Teeth1
            case 2:
                return Teeth2
            case 3:
                return Teeth3
            case 4:
                return Teeth4
            case 5:
                return Teeth5
            case 6:
                return Teeth6
            case 7:
                return Teeth7
            case 8:
                return Teeth8
            case 9:
                return Teeth9
            case 10:
                return Teeth10
            case 11:
                return Teeth11
            case 12:
                return Teeth12
            case 13:
                return Teeth13
            case 14:
                return Teeth14
            case 15:
                return Teeth15
            case 16:
                return Teeth16
            case 17:
                return Teeth17
            case 18:
                return Teeth18
            case 19:
                return Teeth19
            case 20:
                return Teeth20
            case 21:
                return Teeth21
            case 22:
                return Teeth22
            case 23:
                return Teeth23
            case 24:
                return Teeth24
            case 25:
                return Teeth25
            case 26:
                return Teeth26
            case 27:
                return Teeth27
            case 28:
                return Teeth28
            case 29:
                return Teeth29
            case 30:
                return Teeth30
            case 31:
                return Teeth31
            case 32:
                return Teeth32
        }
        return Teeth1
    }, [identifier])

    const imagePosition = useMemo(() => {
        const pos = Position.find(s => s.identifier === identifier)
        if (pos) {
            return pos
        }
        return null
    },  [identifier])

    if (imagePosition) {
        return (
            <img 
                style={{
                    top: `${imagePosition.top}%`,
                    left: `${imagePosition.left}%`,
                    width: `${imagePosition.width}%`,
                    height: `${imagePosition.height}%`,
                    position: 'absolute',
                    pointerEvents: 'none',
                    display: shouldShow ? 'block': 'none',
                    filter: 'brightness(0.5) sepia(1) saturate(10000%)',
                }} 
                src={imageSource} 
            />
        )
    }
}