import React from 'react'
import styled from 'styled-components'

const Trips = () => {
	return (
		<ProductsContainer>
			<ProductsHeading>Heading</ProductsHeading>
			<ProductWrapper>Wrapper</ProductWrapper>
		</ProductsContainer>
	)
}

export default Trips

const ProductsContainer = styled.div`
	min-height: 100vh;
	padding: 5rem calc((100vw - 1300px) / 2);
	background: #51151E;
	color: #fefefe;
`

const ProductsHeading = styled.div`
	font-size: clamp(1.2rem, 5vw, 3rem);
	text-align: center;
	margin-bottom: 5rem;
	color: #000;
`

const ProductWrapper = styled.div`

`
