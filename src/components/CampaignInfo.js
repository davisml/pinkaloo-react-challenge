import './CampaignInfo.css'

import React from 'react'
import { connect } from 'react-redux'
import { getCampaignById, getSelectedCampaignId, getCampaignContributions } from '../modules'
import ProgressBar from './ProgressBar'
import Numeral from 'numeral'
import DonateForm from './DonateForm'

// const renderContribution = ()

function renderContribution(contribution, index) {
  const {
    user = {
      name: 'Placeholder Name',
      image: 'https://static.pinkaloo.com/static/img/profile.png'
    },
    amount
  } = contribution

  return <div className="ContributionInfo">
    <img className="UserImage" src={ user.image } />
    <div className="ContributionInfo-user">
      <strong>{ user.name }</strong>
      <div>{ amount } donated</div>
    </div>
  </div>
}

function CampaignInfo({ campaign, contributions }) {
  const totalRaised = 50

  console.info("Contributions", contributions)

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
      <DonateForm campaign={ campaign } />
    </div>
  )
}

const mapStateToProps = function(state) {
  const selectedCampaignId = getSelectedCampaignId(state)
  const campaign = getCampaignById(state, selectedCampaignId )
  const contributions = getCampaignContributions(state, selectedCampaignId)

  return { campaign, contributions }
}

const mapDispatchToProps = {
  // selectCampaignById
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignInfo)
