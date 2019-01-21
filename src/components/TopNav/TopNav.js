import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  content: {
    marginLeft: 225,
  },
  logout: {
    position: 'fixed',
    left: '90%',
  }
})

const TopNav =  ({
  name,
  classes,
}) =>   
    <AppBar color='primary'>
      <Toolbar >
        <Typography className={ classes.content } variant='h6' color='inherit'>
          Welcome back, { name }
        </Typography>
        <Button className={ classes.logout } color='inherit'>
          Logout
        </Button>
      </Toolbar>
    </AppBar>

TopNav.propTypes = {
  name: PropTypes.string.isRequired,
}

export default withStyles(styles)(TopNav)