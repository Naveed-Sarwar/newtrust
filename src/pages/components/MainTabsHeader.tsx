import FindInPageIcon from '@mui/icons-material/FindInPage'
import GavelIcon from '@mui/icons-material/Gavel'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import React, { FunctionComponent } from 'react'
import { Tab, Tabs } from '@mui/material'
import FlightLandIcon from '@mui/icons-material/FlightLand';
interface Props {
  pageState: number
  handleTabChange: any
}

export const MainTabsHeader: FunctionComponent<Props> = ({ pageState, handleTabChange }) => {
  return (

    <Tabs
      TabIndicatorProps={{
        style: {
          background: '#ffffff',
        
          
        }
      }}
      style={{
        background: '#3C3C50',
      }}
      value={pageState}
      onChange={handleTabChange}
      aria-label='icon tabs example'
    >
  
      <Tab
        icon={<FlightLandIcon />}
        style={{
          width: '20%',
          textTransform: 'none',
          fontWeight: 200,
          backgroundColor: pageState === 0 ? '#ffffff' : '#3c3c50',
          color: pageState !== 0 ? '#ffffff' : '#3c3c50'
        }}
        label='Start'
      />
          <Tab
        icon={<GavelIcon />}
        style={{
          width: '20%',
          textTransform: 'none',
          fontWeight: 200,
          // marginBottom: '25px',
          backgroundColor: pageState === 1 ? '#ffffff' : '#3c3c50',
          color: pageState !== 1 ? '#ffffff' : '#3c3c50'
        }}
        label='Register'
      />
      <Tab
        icon={<FindInPageIcon />}
        style={{
          width: '20%',
          textTransform: 'none',
          // marginBottom: '25px',
          fontWeight: 200,
          backgroundColor: pageState === 2 ? '#ffffff' : '#3c3c50',
          color: pageState !== 2 ? '#ffffff' : '#3c3c50'
        }}
        label='Check'
      />
      <Tab
        icon={<HelpOutlineIcon />}
        style={{
          width: '20%',
          textTransform: 'none',
          fontWeight: 200,
          backgroundColor: pageState === 3 ? '#ffffff' : '#3c3c50',
          color: pageState !== 3 ? '#ffffff' : '#3c3c50'
        }}
        label='Faq'
      />
 
      <Tab
        icon={<IntegrationInstructionsIcon />}
        style={{
          width: '20%',
          textTransform: 'none',
          fontWeight: 200,
          backgroundColor: pageState === 4 ? '#ffffff' : '#3c3c50',
          color: pageState !== 4 ? '#ffffff' : '#3c3c50'
        }}
        label='Developers'
      />
    </Tabs>
  )
}
