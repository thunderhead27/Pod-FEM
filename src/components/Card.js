import React from "react";
import styled from "styled-components";
import { device } from "../cssInJs/breakpoints.js";

import { useForm } from "react-hook-form";

import { colors } from "../cssInJs/colors";
import Button from "./Button";
import Form from "./Form";

import spotify from "../../src/assets/desktop/spotify.svg";
import apple from "../../src/assets/desktop/apple-podcast.svg";
import google from "../../src/assets/desktop/google-podcasts.svg";
import pocket from "../../src/assets/desktop/pocket-casts.svg";

const CardWrapper = styled.div`
	display: grid;
	grid-template-rows: repeat(4, auto);

	background-color: ${colors.dark};

	@media ${device.mobile} {
		width: 327px;
		height: 398px;
		grid-row: 2;
		margin-bottom: 94px;

		background-color: transparent;
	}

	@media ${device.tablet} {
		width: 634px;
		height: 509px;
		padding-top: 93px;
	}

	@media ${device.laptop} {
		width: 723px;
		height: 509px;
		padding-top: 93px;
	}
`;

const Title = styled.h1`
	color: ${colors.green};
	font-weight: 300;
	text-transform: uppercase;

	@media ${device.mobile} {
		text-align: center;
		font-size: 26px;
		line-height: 38px;
		margin-bottom: 16px;
	}

	@media ${device.tablet} {
		font-size: 48px;
		line-height: 56px;
		text-align: start;
		margin-bottom: 31px;
	}

	@media ${device.laptop} {
		font-size: 52px;
		line-height: 62px;
		margin-bottom: 24px;
	}
`;

const Description = styled.p`
	font-weight: 300;
	color: ${colors.lightGray};

	@media ${device.mobile} {
		text-align: center;
		font-size: 15px;
		line-height: 25px;
		margin-bottom: 33px;
	}

	@media ${device.tablet} {
		font-size: 18px;
		line-height: 28px;
		text-align: start;
		margin-right: 190px;
		margin-bottom: 40px;
	}

	@media ${device.laptop} {
		font-size: 18px;
		line-height: 28px;
		text-align: start;
		margin-right: 278px;
		margin-bottom: 40px;
	}
`;

const FormWrapper = styled.div`
	@media ${device.mobile} {
		margin-bottom: 42px;
	}
`;

const EmailForm = styled(Form)`
	@media ${device.mobile} {
		margin-bottom: 16px;
	}
`;

const ImageWrapper = styled.div`
	display: flex;
	align-items: center;

	@media ${device.mobile} {
		width: 315px;
		height: 17px;
		margin-bottom: 48px;
		grid-row: 3;
	}

	@media ${device.tablet} {
		width: 536px;
		height: 29px;
	}
`;

const Image = styled.img`
	filter: invert(80%) sepia(38%) saturate(137%) hue-rotate(187deg)
		brightness(98%) contrast(86%);

	@media ${device.mobile} {
		max-height: 15px;
		width: auto;
		height: auto;
		padding-right: 25px;
	}

	@media ${device.tablet} {
		max-height: 29px;
		width: auto;
		height: auto;
		margin-right: 40px;
	}

	@media ${device.laptop} {
		max-height: 29px;
		width: auto;
		height: auto;
		margin-right: 40px;
	}
`;

const SmallImage = styled(Image)`
	@media ${device.mobile} {
		margin-right: 16px;
	}

	@media ${device.tablet} {
		max-height: 18px;
		margin-right: 27px;
	}

	@media ${device.laptop} {
		max-height: 18px;
		margin-right: 27px;
	}
`;

const Card = ({ title, desc, btnText, message, placeholder }) => {
	return (
		<CardWrapper>
			<Title>{title}</Title>
			<Description>{desc}</Description>
			<FormWrapper>
				<EmailForm
					message={message}
					placeholder={placeholder}
					btnText={btnText}
				/>
			</FormWrapper>
			<ImageWrapper>
				<Image src={spotify} alt="spotify" />
				<Image src={apple} alt="apple" />
				<SmallImage src={google} alt="google" />
				<Image src={pocket} alt="pocket" />
			</ImageWrapper>
		</CardWrapper>
	);
};

export default Card;
