import React from 'react'
import styled from 'styled-components'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'

const Testimonials = () => {
	return (
		<TestimonialsContainer>
			<TopLine>Testimonials</TopLine>
			<Description>
				What people are saying
			</Description>
			<ContentWrapper>
				<ColumnOne>
					<Testimonial>
						<IoMdCheckmarkCircleOutline />
						<h3>Denise Villain</h3>
						<p>"Maooouuuuuuuu"</p>
					</Testimonial>
					<Testimonial>
						<FaRegLightbulb />
						<h3>Raoul Villain</h3>
						<p>"Mi"</p>
					</Testimonial>
				</ColumnOne>
				<ColumnTwo>
					<Img src="" alt=""/>
				</ColumnTwo>
			</ContentWrapper>
		</TestimonialsContainer>
	)
}

export default Testimonials

const TestimonialsContainer = styled.div`
	width: 100%;
	background: #fcfcfc;
	color: #000;
	padding: 5rem calc((100vw - 1300px) / 2);
	height: 100%;
`

const TopLine = styled.p`
	color: #077BF1;
	font-size: 1rem;
	padding-left: 2rem;
	margin-bottom: 0.75rem;
`

const Description = styled.p`
	text-align: start;
	padding-left: 2rem;
	margin-bottom: 4rem;
	font-size: clamp(1.5rem, 5vw, 2rem);
	font-weight: bold;
`

const ContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 0 2rem;

	@media screen and  (max-width: 768px){
		grid-template-columns: 1fr;
	}
`

const ColumnOne = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	

`

const ColumnTwo = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-top: 2rem;
	grid-gap: 10px;

	@media screen and ( max-width: 768px){
		grid-template-columns: 1fr;
	}
`

const Testimonial = styled.div`
	padding-top: 1rem;
	padding-right: 2rem;

	h3 {
		margin-bottom: 1rem;
		font-size: 1.5rem;
		font-style: italic;
	}

	p {
		color: #3b3b3b;
	}
`
const Img =styled.img`
	border-radius: 10px;
	height: 100%;
`
