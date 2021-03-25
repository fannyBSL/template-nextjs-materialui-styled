import React, { ReactElement, useContext } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
import MoonIcon from '@material-ui/icons/Brightness2Outlined'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import { ToggleThemeContext } from '../public/theme/'
import Link from 'next/link'
import { Tooltip } from '@material-ui/core'



export const TopBar = (): ReactElement => {
    const { toggleTheme, isDark } = useContext(ToggleThemeContext)
   return (
       <ToggleThemeContext.Consumer>
           {render => (
               <AppBar position="sticky" >
                   <Toolbar>
                       <Link href="/">
                           <a>
                               <img
                                   src="../assets/logo.svg"
                                   height="25px"
                                   alt="BlueSky Digital Labs"
                                   style={{ paddingRight: 10, verticalAlign: 'bottom' }}
                               />
                           </a>
                       </Link>
                       <Link href="/">
                           <a>
                               <Typography variant="h6" style={!isDark ? { color: '#00156a' } : {}}>
                                   Site Name
                               </Typography>
                           </a>
                       </Link>
                       <div>
                           <Tooltip title="Toggle Theme">
                               <Button variant="text" color="inherit" onClick={toggleTheme}>
                                   {isDark ? <SunIcon /> : <MoonIcon />}
                               </Button>
                           </Tooltip>
                       </div>
                   </Toolbar>
               </AppBar>
           ) }

       </ToggleThemeContext.Consumer>
    )
}

export default TopBar