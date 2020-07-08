import React, {useState, useMemo} from 'react'
import styled from 'styled-components'
import { createContainer } from 'react-tracked'

import {Canvas} from './Canvas'
import {LeftSidebar} from './LeftSidebar'
import {RightSidebar} from './RightSidebar'
import {GlobalStyles} from './ui'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`

type Element = {
    id: number
    top: number
    left: number
    color: string
}

const {
    Provider,
    useTrackedState,
} = createContainer(() => {
    const [elements, setElements] = useState<Element[]>([])
    const [selectedElement, setSelectedElement] = useState<number | undefined>()
    const state = useMemo(() => ({
        elements,
        selectedElement,
        setElements,
        setSelectedElement,
    }), [elements, selectedElement])
    return [state, undefined] as const
})
export const useMyContext = useTrackedState

const App: React.FC = () => (
    <Provider>
        <Container>
            <LeftSidebar />
            <Canvas />
            <RightSidebar />
            <GlobalStyles />
        </Container>
    </Provider>
)

function Root() {
    return <App />
}

export default Root
