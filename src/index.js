import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from 'theme'
import TopNav from 'components/TopNav'
import NavSidebar from 'components/NavSidebar'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <MuiThemeProvider theme={ theme }>
    <TopNav name='Anthony' />
    <NavSidebar />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
