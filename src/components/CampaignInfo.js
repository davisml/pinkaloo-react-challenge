import './CampaignInfo.css'

import React from 'react'
import { connect } from 'react-redux'
import { getCampaignById } from '../modules'
import ProgressBar from './ProgressBar'
import Numeral from 'numeral'

// const renderContribution = ()

function renderContribution(contribution) {
  const { user, amount } = contribution

  return <div className="ContributionInfo">
    <img className="UserImage" src={ user.image } />
    <div className="ContributionInfo-user">
      <strong>{ user.name }</strong>
      <div>{ amount } donated</div>
    </div>
  </div>
}

function CampaignInfo({ campaign }) {
  const totalRaised = 50

  const contributions = [
    {
      amount: 25,
      user: {
        image: 'https://i.pravatar.cc/100?img=15',
        name: 'Placeholder User'
      }
    },
    {
      amount: 5,
      user: {
        image: 'https://i.pravatar.cc/100?img=16',
        name: 'Placeholder User'
      }
    },
    {
      amount: 20,
      user: {
        image: 'https://i.pravatar.cc/100?img=17',
        name: 'Placeholder User'
      }
    }
  ]

  return (
    <div className="CampaignInfo">
      <div className="CampaignInfo-details">
        <div className="CampaignInfo-logo">
          <div className="Campaign-image" style={{backgroundImage: `url('${ campaign.image }')`}} />
        </div>
        <h3>{campaign.name}</h3>
        <ProgressBar progress={ 0.98 } />
        <div className="CampaignInfo-raised">{ Numeral(totalRaised).format('$0,0.00') } raised</div>
      </div>
      <div className="CampaignInfo-contributions">
        { contributions.map(renderContribution) }
      </div>
      <div className="CampaignInfo-donate">
        <h2>Donate to { campaign.name }</h2>
        <input className="Donate-amount" placeholder="Amount" />
        <input className="Donate-message" placeholder="Message" />
        <button className="Donate-button">Donate</button>
      </div>
    </div>
  )
}

const mapStateToProps = function(state) {
  const { selectedCampaignId } = state.app

  const campaign = getCampaignById(state, selectedCampaignId )

  return { campaign }
}

const mapDispatchToProps = {
  // selectCampaignById
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignInfo)
