import React from 'react';
import Fade from 'react-reveal/Fade';
import ProjectCard from './ProjectCard';
import { colors } from '../styles/themes';
// import {
// 	Swiper,
// 	SwiperSlide
// } from 'swiper/react/swiper-react';
// import { EffectCards } from 'swiper';
import styled from 'styled-components';



import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/effect-cards/effect-cards.scss';
import { EffectCards } from "swiper"

export default function Deck() {
	return (
		<DeckContainer>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards]}
				style={{ width: '240px', height: '320px' }}
			>
				<SwiperSlide
					style={{
                        display:"flex",
						width: '100px',
						height: '140px',
						border: '1px solid black',
						backgroundColor: `${colors.midnightBlue}`
					}}
				/>
				<SwiperSlide
					style={{
                        display:"flex",
						width: '100px',
						height: '140px',
						border: '1px solid black',
						backgroundColor: `${colors.midnightBlue}`
					}}
				/>
				<SwiperSlide
					style={{
                        display:"flex",
						width: '100px',
						height: '140px',
						border: '1px solid black',
						backgroundColor: `${colors.midnightBlue}`
					}}
				/>
				<SwiperSlide
					style={{
                        display:"flex",
						width: '100px',
						height: '140px',
						border: '1px solid black',
						backgroundColor: `${colors.midnightBlue}`
					}}
				/>
			</Swiper>
		</DeckContainer>
	);
}

const DeckContainer = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center; */
    margin: auto;
	height: 100vh;
`;
