import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css.map';
import {Provider} from "react-redux";
import store from "./store/confugureStore";
import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import {BrowserRouter} from "react-router-dom";

moment.locale('cs');
const theme = createMuiTheme({
  zIndex: { modal: 15000, tooltip: 15200 },
  palette: { primary: { main: '#C21B17' } },
  typography: { fontSize: 22 },
});

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils} locale={'cs'}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StylesProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
