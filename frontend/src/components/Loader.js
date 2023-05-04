import React from 'react'


const Loader = () => {
	return (
        <div class="spinner-border text-dark" role="status"
        style= {{width: '75px', height: '75px', margin:'1rem auto 0', display:'block'}}
        >
            <span className="sr-only">Loading...</span>
        </div>
		)
}

export default Loader