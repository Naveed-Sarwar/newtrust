import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { Link, Typography } from '@mui/material'
import { SetStateAction, useState } from 'react'
import { useEffect } from 'react'

import { CheckFiles } from './CheckFiles'
import { DeveloperTab } from './DeveloperTab'
import { Footer, MainContainer, PopupContainer} from './components/styledComponents'
import { HelpTab } from './HelpTab'
import { MainTabsHeader } from './components/MainTabsHeader'
import { Notarize } from './Notarize'
import { LandingPage } from './LandingPage'
export const Landing = () => {
  const [pageState, setPageState] = useState(0)
  const [endpoint, setEndpoint] = useState<string>('')

  //get endpoint url from chrome storage settings
  useEffect(() => {
    const url = 'https://api.northstake.dk/api'
    setEndpoint(url)
  }, [])

  const handleTabChange = (_event: any, newValue: SetStateAction<number>) => {
    setPageState(newValue)
  }

  return (
  <div>
    {/* <Heading>No Login </Heading> */}
    <PopupContainer>  
      <MainContainer>
        <MainTabsHeader pageState={pageState} handleTabChange={handleTabChange} />
        <div style={{ width: '100%', overflow: 'auto' }}>
          {pageState === 0 ? (
            <LandingPage />
          ) : pageState === 1 ? (
            <Notarize endpoint={endpoint} />  
          ) : pageState === 2 ? (
            <CheckFiles endpoint={endpoint} /> 
          ) : pageState === 3 ? (
            <HelpTab />
          )
          : (
            <DeveloperTab />
          )}
        </div>
        <Footer>
          <Typography variant='caption'>
            Powered by
            <span
              onClick={() => {
                window.location.href = 'http://www.concordium.com'
              }}
              style={{ cursor: 'pointer' }}
            >
              {' '}
              concordium
            </span>
            
          </Typography>
        </Footer>
      </MainContainer>
    </PopupContainer></div>
  )
}
