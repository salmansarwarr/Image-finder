import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './Redux/store'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { pink } from '@material-ui/core/colors'

const root = ReactDOM.createRoot(document.getElementById('root'))

const myTheme = createTheme({
    palette: {
        primary: pink
    }
})

root.render(
    <Provider store={store}>
        <ThemeProvider theme={myTheme}>
            <App />
        </ThemeProvider>
    </Provider>
);
