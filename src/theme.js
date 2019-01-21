import { createMuiTheme } from '@material-ui/core/styles'
import { FfPrimaryColor, FfSecondaryColor } from 'constants/colors'

const theme = createMuiTheme({
  palette: {
    primary: FfPrimaryColor,
    secondary: FfSecondaryColor,
  },
  typography: {
    useNextVariants: true,
  },
})

export default theme