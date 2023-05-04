import React from 'react'

const Message = ({ variant, children }) => {
	return (
			<div style={{margin:'1rem auto 0'}} className={`alert alert-${variant}`} role="alert">
                {children}
            </div>
		)
}

Message.defaultProps = {
	variant : 'info'
}


export default Message
