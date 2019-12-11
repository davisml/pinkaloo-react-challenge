import React, { useState } from 'react'

const DonateForm = ({ campaign }) => {
	const [amount, setAmount] = useState('')
	const [message, setMessage] = useState('')
	const [error, setError] = useState(null)

	const amountInputProps = {
		className: 'Donate-amount',
		value: amount,
		placeholder: 'Amount',
		onChange: ({ target: { value } }) => setAmount(value)
	}

	const messageInputProps = {
		className: 'Donate-message',
		value: message,
		placeholder: 'Message',
		onChange: ({ target: { value } }) => setMessage(value)
	}

	const buttonProps = {
		className: 'Donate-button',
		onClick: (event) => {
			setError('Not implemented')
		}
	}

	const errorMessage = error && (
		<div className="Donate-error">{ error }</div>
	)
	
	return <div className="CampaignInfo-donate">
		<h2>Donate to { campaign.name }</h2>
		<input { ...amountInputProps } />
		<input { ...messageInputProps } />
		{ errorMessage }
		<button { ...buttonProps }>Donate</button>
	</div>
}

export default DonateForm