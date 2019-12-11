import './App.css'

import React from 'react'
import { connect } from 'react-redux'
import { selectCampaignById, getSession, getCampaigns } from './modules'
import CampaignItem from './components/CampaignItem'
import CampaignInfo from './components/CampaignInfo'
import UserBalance from './components/UserBalance'

function App({ campaigns, session, selectCampaignById }) {
  // Generate component click handler for campaignId
  const campaignClickHandler = campaignId => event =>
    selectCampaignById(campaignId, event)

  const { user: { balance }, selectedCampaignId } = session
  
  const renderCampaignItem = campaign => {
    const { id } = campaign

    const key = `campaign-${ id }`
    const active = (id === selectedCampaignId)
    const onClick = campaignClickHandler(id)

    const itemProps = {
      key, active, campaign, onClick
    }

    return <CampaignItem { ...itemProps } />
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src="/icons/Code.svg" width={ 48 } />
        <h1>Stack Showdown</h1>
        <div style={{flex: 1}} />
        <UserBalance balance={ balance } />
      </div>
      <div className="Campaigns">
        { campaigns.map(renderCampaignItem) }
      </div>
      <CampaignInfo />
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    campaigns: getCampaigns(state),
    session: getSession(state)
  }
}

const mapDispatchToProps = {
  selectCampaignById
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
