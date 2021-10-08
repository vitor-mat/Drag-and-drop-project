import React from 'react';

import { KanbanPage } from './pages/kanban/index'

import { GlobalStyle } from './style/globalStyle'

const App = () => {
  return(
    <>
      <GlobalStyle />
      <KanbanPage />
    </>
  )
}

export default App