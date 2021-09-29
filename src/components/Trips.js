import React from 'react'
import styled from 'styled-components'
import trip1 from '../images/trips/trip5.jpg'
import trip2 from '../images/trips/trip6.jpg'
import trip3 from '../images/trips/trip7.jpg'
import trip4 from '../images/trips/trip8.jpg'
import {Button} from './Button'
import {ImLocation} from 'react-icons/im'

const Trips = () => {

	return (
		<ProductsContainer>
			<ProductsHeading>Our Favorite Destinations</ProductsHeading>
			<ProductWrapper>
				<ProductCard>
					<Photo src={trip1} alt="image" />
					<ProductInfo>
						<TextWrap>
							<ImLocation />
							<ProductTitle>titre</ProductTitle>
						</TextWrap>
						<Button to="/trips" primary="true" round="true" css={`position: absolute; top: 47vh; font-size: 14px;`}>View Destination</Button>
					</ProductInfo>
				</ProductCard>
				<ProductCard>
					<Photo src={trip2} alt="image" />
					<ProductInfo>
						<TextWrap>
							<ImLocation />
							<ProductTitle>titre</ProductTitle>
						</TextWrap>
						<Button to="/trips" primary="true" round="true" css={`position: absolute; top: 47vh; font-size: 14px;`}>View Destination</Button>
					</ProductInfo>
				</ProductCard>
				<ProductCard>
					<Photo src={trip3} alt="image" />
					<ProductInfo>
						<TextWrap>
							<ImLocation />
							<ProductTitle>titre</ProductTitle>
						</TextWrap>
						<Button to="/trips" primary="true" round="true" css={`position: absolute; top: 47vh; font-size: 14px;`}>View Destination</Button>
					</ProductInfo>
				</ProductCard>
				<ProductCard>
					<Photo src={trip4} alt="image" />
					<ProductInfo>
						<TextWrap>
							<ImLocation />
							<ProductTitle>titre</ProductTitle>
						</TextWrap>
						<Button to="/trips" primary="true" round="true" css={`position: absolute; top: 47vh; font-size: 14px;`}>View Destination</Button>
					</ProductInfo>
				</ProductCard>
				
				
			</ProductWrapper>
		</ProductsContainer>
	)
}

export default Trips

const ProductsContainer = styled.div`
	min-height: 100vh;
	padding: 5rem calc((100vw - 1300px) / 2);
	color: #fefefe;
`

const ProductsHeading = styled.div`
	font-size: clamp(1.2rem, 5vw, 3rem);
	text-align: center;
	margin-bottom: 5rem;
	color: #000;
`

const ProductWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10px;
	justify-items: center;
	padding: 0 2rem;

	@media screen and (max-width: 1200px){
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 768px){
		grid-template-columns: 1fr;
	}
`

const ProductCard= styled.div`
	line-height: 2;
	width: 100%;
	height: 500px;
	position: relative;
	border-radius: 10px;
	transition: 0.2s ease;

	@media screen and (max-width: 768px) {
		height: auto;
	}
`

const ProductInfo= styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0 2rem;

	@media screen and (max-width: 280px) {
		padding: 0 1rem;
	}
`

const ProductTitle= styled.h2`
	font-weight: 400;
	font-size: 1rem;
	margin-left: 0.5rem;
`

const TextWrap= styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	top: 43vh;

	
`

const Photo = styled.img`
	height: 100%;
	position: relative;
	max-width: 100%;
	width: 40vw;
	margin: 1rem;
	border-radius: 10px; 
	cursor: pointer;
	filter: brightness(70%);
	transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

	&:hover {
		filter: brightness(100%);
	}

	@media screen and (max-width: 768px) {
		width: 75vw;
		height: 60vh;
	}
`

