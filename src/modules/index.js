import sampleData from './sampleData'

const initialState = { ...sampleData }

export const MERGE_STATE = 'app/MERGE_STATE'

//- Redux
export const app = (state = initialState, action) => {
	console.log(action)

	const { type, payload } = action

	switch (type) {
		case MERGE_STATE: {
			return {
				...state,
				...payload
			}
		}

		default: {
			return state
		}
	}
}

//- Actions

export const selectCampaignById = campaignId => {
	return {
		type: MERGE_STATE,
		payload: { selectedCampaignId: campaignId }
	}
}

//- Selectors
export const getContributions = state => {
	// console.info("State", state)
	return state.app.contributions
}

export const getCampaigns = state => {
	return state.app.campaigns
}

export const getCampaignById = (state, campaignId) => {
	const campaigns = getCampaigns(state)
	
	return campaigns.find(campaign => campaign.id === campaignId)
}

export const getCampaignContributions = (state, campaignId) => {
	console.info("State", state.app)
	const contributions = getContributions(state)

	return contributions.reduce((array, contribution) => {
		if (contribution.campaignId !== campaignId) {
			return array
		}

		return [...array, contribution]
	}, [])
}

export const getCampaignContributionsTotal = (state, campaignId) =>
	getCampaignContributions(state, campaignId)
	.reduce((total, { amount }) => {
		return (total + amount)
	}, 0)
