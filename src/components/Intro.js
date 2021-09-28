import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import IntroVideo from '../videos/intro3.mp4'

const Intro = () => {
	return (
		<IntroContainer>
			<IntroBg>
				<VideoBg src={IntroVideo} type="video/mp4" autoPlay loop muted playsInline/>
			</IntroBg>
			<IntroContent>
				<IntroItems>
					<IntroH1>Unreal Destinations</IntroH1>
					<IntroP>Out of this world</IntroP>
					<Button primary="true" round="true" big="true" to="/trips">Travel Now</Button>
				</IntroItems>
			</IntroContent>
		</IntroContainer>
	)
}

export default Intro

const IntroContainer = styled.div`
	background: #646161;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 0 1rem;
	position: relative;
	margin-top: -80px;

	:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 2;
		background: linear-gradient(
			180deg, 
			rgba(0,0,0,0.2) 0%, 
			rgba(0,0,0,0.6) 100%
			),
			linear-gradient(
				180deg, 
				rgba(0,0,0,0.2) 0%, 
				transparent 100%
			);
	}

`

const IntroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`

const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
`

const IntroContent = styled.div`
	color: #fefefe;
	z-index: 3;
	height: calc(100vh - 80px);
	max-height: 100%;
	padding: 0rem calc((100vw - 1300px) / 2);
`
const IntroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items:center;
	text-align: center;
	height: 100vh;
	max-height: 100%;
	padding: 0;
	color: #fefefe;
	line-height: 1.1;
	font-weight: bold;
`
const IntroH1 = styled.h1`
	font-size: clamp(1.5rem, 6vw, 4rem);
	margin-bottom: 1.5rem;
	letter-spacing: 3px;
	font-weight: bold;
	padding: 0 1rem;
`
const IntroP = styled.p`
	font-size: clamp(1rem, 3vw, 3rem);
	margin-bottom: 2rem;
	font-weight: 400;
`

