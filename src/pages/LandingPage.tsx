import * as axios from 'axios'
import { Button, Divider, Tooltip, Typography } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'
import { FunctionComponent } from 'react'
import { cloneDeep, uniqBy } from 'lodash'
import { useEffect, useState } from 'react'

import { ButtonContainer, InputContainer, ListItem, Panel, SubheaderDiv } from './components/styledComponents'
import { ChecksumService } from './checksumService'
import { UploadField } from './components/UploadField'

export const LandingPage = () => {
  return (
    
    <InputContainer>
      <Panel style={{ overflow: 'visible', height: 390, marginTop: 15, padding: 12, width: 'auto' }}>
        <Typography variant='body2'>●No Login or authentication - start right away</Typography>
        <Typography variant='caption'>
         {' '}Just drag and drop your file, then click ‘Timestamp’ and store the file’s fingerprint. It is immediately time stamped and registered on the blockchain.
        </Typography>{' '}
        <Divider style={{ marginBottom: 10 }} />
        <Typography variant='body2'>● Verify successful timestamping directly on chain</Typography>
        <Typography variant='caption'>
        Successful registration results in a positive response seconds after registration
        </Typography>{' '}
        <Divider style={{ marginBottom: 10 }} />{' '}
        <Typography variant='body2'>● Anyone can verify timestamps in seconds</Typography>
        <Typography variant='caption'>
        Go to the ‘Check’ tab. Drag and drop the file to
check. Click ‘check file’ and the date and time
of the initial registration on Concordium
Blockchain appears. If it is not found, it is
because the file is not timestamped.
        </Typography>{' '}


</Panel>
    </InputContainer>
  )
}
