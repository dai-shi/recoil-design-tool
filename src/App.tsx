import React, {useState, Suspense} from 'react'
import styled from 'styled-components'

import {Canvas} from './Canvas'
import {LeftSidebar} from './LeftSidebar'
import {RightSidebar} from './RightSidebar'
import {GlobalStyles} from './ui'
import {RecoilRoot} from 'use-atom'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`

type ElementsContext = {
    elements: number[]
    setElements: React.Dispatch<React.SetStateAction<number[]>>
}

export const ElementsContext = React.createContext<ElementsContext>({
    elements: [],
    setElements: () => {},
})

const App: React.FC = () => {
    const [elements, setElements] = useState<number[]>([])

    return (
        <ElementsContext.Provider value={{elements, setElements}}>
            <Container>
                <LeftSidebar />
                <Canvas />
                <RightSidebar />
                <GlobalStyles />
            </Container>
        </ElementsContext.Provider>
    )
}

function Root() {
    return (
        <Suspense fallback={null}>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </Suspense>
    )
}

export default Root
