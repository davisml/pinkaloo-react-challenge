import './CampaignContributions.css'
import React from 'react'
import Numeral from 'numeral'
import Moment from 'moment'

function renderContribution(contribution, index) {
  const {
    user = {
      name: 'Placeholder Name',
      image: 'https://static.pinkaloo.com/static/img/profile.png'
    },
    amount,
    date
  } = contribution

  return <div className="ContributionInfo">
    <img className="UserImage" src={ user.image } />
    <div className="ContributionInfo-user">
      <strong>{ user.name }</strong>
      <div>{ amount } donated</div>
      <div className="ContributionInfo-date">{ Moment(date).format('MMM DD, YYYY') }</div>
    </div>
  </div>
}

function Contributions({ contributions }) {
  return (
    <div className="CampaignInfo-contributions">
      { contributions.map(renderContribution) }
    </div>
  )
}

export default Contributions