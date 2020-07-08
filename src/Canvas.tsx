import React from 'react'
import styled from 'styled-components'
import {Element} from './Element'
import {useMyContext} from './App'

const CanvasContainer = styled.div`
    flex: 1;
    position: relative;
`

export const Canvas: React.FC = () => {
    const {elements, setSelectedElement, setElements} = useMyContext()

    return (
        <CanvasContainer>
            {[...Array(elements.length).keys()].map((index) => {
                return (
                    <Element
                        key={index}
                        index={index}
                        onDrag={(top, left) => {
                            setElements(
                                elements.map((el) => {
                                    if (el.id === index) {
                                        return {
                                            ...el,
                                            top,
                                            left,
                                        }
                                    } else {
                                        return el
                                    }
                                }),
                            )
                        }}
                        onSelect={() => setSelectedElement(index)}
                    />
                )
            })}
        </CanvasContainer>
    )
}
