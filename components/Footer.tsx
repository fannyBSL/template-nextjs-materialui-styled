import React, { FC, ReactElement } from 'react'
import {Box, Typography} from '@material-ui/core'

export const Footer: FC = ({}): ReactElement => {
    return (
            <Typography variant="body1" align="center">
                © 2021
                <a href="https://www.blueskylabs.com.au/" target="_blank" rel="noreferrer"> BlueSky Digital Labs</a>
            </Typography>
    )
}