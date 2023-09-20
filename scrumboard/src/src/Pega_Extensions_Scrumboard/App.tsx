import { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import KanbanBoard from './components/KanbanBoard/index';
import { ModalProvider } from './hooks/useModal';
import store from './store';
import GlobalStyle from './styles/global';
import darkTheme from './styles/themes/dark';
import lightTheme from './styles/themes/light';

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <div className='App'>
            <GlobalStyle />
            <KanbanBoard toggleTheme={toggleTheme} />
          </div>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
