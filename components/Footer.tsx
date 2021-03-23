import React, { FC, ReactElement } from 'react'
import { Typography } from '@material-ui/core'

export const Footer: FC = ({}): ReactElement => {
    return (
        <div>
            <Typography variant="body1" display="inline">
                © 2021
                <a href="https://www.blueskylabs.com.au/" target="_blank" rel="noreferrer">
                     BlueSky Digital Labs
                </a>
            </Typography>
        </div>
    )
}