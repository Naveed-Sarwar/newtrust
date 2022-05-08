import * as axios from 'axios'
import { Button, Divider, Tooltip, Typography } from '@mui/material'
import { CheckCircleOutline } from '@mui/icons-material'
import { FunctionComponent } from 'react'
import { cloneDeep, uniqBy } from 'lodash'
import { useEffect, useState } from 'react'

import { ButtonContainer, InputContainer, ListItem, Panel, SubheaderDiv } from './components/styledComponents'
import { ChecksumService } from './checksumService'
import { UploadField } from './components/UploadField'

export const HelpTab = () => {
  return (
    
    <InputContainer>
      <Panel style={{ overflow: 'visible', height: 390, marginTop: 15, padding: 12, width: 'auto' }}>
        <Typography variant='body2'>How to Timestamp a file?</Typography>
        <Typography variant='caption'>
        Go to the ‘Register Timestamp’ tab. Drag and drop your file(s). Click ‘Time stamp file’ and store the document hash and transaction hash
        </Typography>{' '}
        <Divider style={{ marginBottom: 10 }} />
        <Typography variant='body2'>How to check a file’s timestamp?</Typography>
        <Typography variant='caption'>
        Go to the ‘Check timestamp’ tab. Drag and drop your file(s) to check. Click ‘Check timestamp’ or look up the transaction hash on the Concordium blockchain.
        </Typography>{' '}
        <Divider style={{ marginBottom: 10 }} />{' '}
        <Typography variant='body2'>What is Timestamping?</Typography>
        <Typography variant='caption'>
        Timestamp services are a type of trust services that establishes proof that the document, photo or data existed at a certain point in time. The file and therefore the data included is registered at a time in such a manner
as to reasonably preclude the possibility of the data being changed undetectably:
The date and time of the registration on the blockchain is bound to the data in such a manner that changing the data is infeasible - someone would need to control the full system and still have incentive to manipulate -
and immediately detectable if it happened.
Blockchains run an accurate internal clock to determine system state and order transactions across a decentralized network
The registration on the blockchain happens in a strictly governed, transparent process. 
        </Typography>{' '}
        <Divider style={{ marginBottom: 10 }} />{' '}
        <Typography variant='body2'>Examples of the use of Timestamps?</Typography>
        <Typography variant='caption'>
        Say two people sign a contract and register it on the blockchain right there and then, creating an indelible timestamped record of the original document. If a dispute or disagreement arose down the line, both parties
would have proof as to the integrity of the contract and that the original hadn’t been tampered with. If it had been altered in any way, it simply wouldn’t be able to be found on the registry. It works in a similar way for
recording minutes of public or private meetings. During the pandemic there was a lot of unverified information and rumour going around. In response, many countries chose to have public forums so people could see
that healthcare decisions being made were from official sources, and therefore trustworthy. And what about stakeholder or Board meetings? Verifying the minutes on the blockchain as being original would provide extra
peace of mind for anyone unable to attend – especially in potentially contentious situations.
{' '}
        </Typography>{' '}
        <Divider style={{ marginBottom: 10 }} /> <Typography variant='body2'>What is a hash and what is actually stored?</Typography>
        <Typography variant='caption'>
        A document hash is an algorithmic way to assign a unique string to a document using cryptographic functions - essentially a fingerprint of the document. The document hash allows for an easy way to verify the
authenticity of a document. The transaction stores the hash and when the file later is checked, it generates a hash the second time and checks it on the chain.
        </Typography>{' '}
        <Divider style={{ marginBottom: 10 }} />
        <Typography variant='body2'>Why use blockchains for Timestamping? </Typography>
        <Typography variant='caption'>
        Blockchain’s unique attributes make it an ideal solution for creating an instant, tamper-proof way for anyone to register, prove and verify the age and provenance of, among other things, images, files and documents.
Timestamping a document using OpenTrust is extremely simple. And once it is registered, the document’s integrity is completely transparent to anyone. Anyone can verify the original file in seconds without logging in
and relying on an intermediary. No discussion. No doubt. The balance between tamper proof and ease of access has risen to a new level. 
        </Typography>{' '}
        <Divider style={{ marginBottom: 10 }} />{' '}
        <Typography variant='body2'>Why doesn’t it cost anything? </Typography>
        <Typography variant='caption'>
        Each registration requires paying a small fee to the network of blockchain operators. Concordium foundation has decided to sponsor a certain amount of registration every day. A pay per service solution might be
offered later for anyone to set up.   </Typography>{' '}

</Panel>
    </InputContainer>
  )
}
