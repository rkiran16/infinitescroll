import React, { Component, Fragment } from 'react'
import Lottie from 'react-lottie'
import animationData from './webDev.json'

class UncontrolledLottie extends Component {
	render(){
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: animationData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			}
		};

		return(
			<Fragment>
				<Lottie options={defaultOptions}
				        height={400}
				        width={400}
				/>
			</Fragment>
		)
	}
}

export default UncontrolledLottie;