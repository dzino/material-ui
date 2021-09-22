import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButtom: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}))

function MenuX() {
  const classes = useStyles()
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className={classes.title}
            >
              News
            </Typography>
            <Box className={classes.menuButtom}>
              <Button color="inherit" variant="outlined">
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default MenuX
