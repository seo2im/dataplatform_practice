import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ContextProvider from './context';
import { Home, Login } from './pages';

const App: React.FC = () => {

  return (
    <div>
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ContextProvider>
    </div>
  )
};

/* fix ver 17 -> 18 */
const root = createRoot(document.getElementById('root'));
root.render(<App />);
