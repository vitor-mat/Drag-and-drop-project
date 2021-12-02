import React from 'react';

import { GlobalStyle } from './style/globalStyle'

import { KanbanPage } from './pages/kanban_page/index'

function App() {
  return (
    <>
      <GlobalStyle />
      <KanbanPage />
    </>
    );
}

export default App;
