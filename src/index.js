import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import { ThemeProvider, createTheme} from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            main: '#483D8B'
        },
        secondary: {
            main: '#F08080'
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
