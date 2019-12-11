import React from 'react'
import Numeral from 'numeral'
import ProgressBar from './ProgressBar'

function CampaignDetails({ campaign }) {
	const progress = 0.98 // Placeholder value
	const totalRaised = 50 // Placeholder value

	return <div className="CampaignInfo-details">
        <div className="CampaignInfo-logo">
          <div className="Campaign-image" style={{backgroundImage: `url('${ campaign.image }')`}} />
        </div>
        <h3>{ campaign.name }</h3>
        <ProgressBar progress={ 0.98 } />
        <div className="CampaignInfo-raised">{ Numeral(totalRaised).format('$0,0.00') } raised</div>
	</div>
}

export default CampaignDetails