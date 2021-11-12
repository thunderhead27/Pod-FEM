import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../cssInJs/colors";
import { device } from "../cssInJs/breakpoints";

import useForm from "../useForm/useForm";
import validate from "../useForm/validate";

import Button from "./Button.js";

const FormGroup = styled.form`
	position: relative;

	@media ${device.tablet} {
		width: 427px;
		margin-bottom: 64px;
	}

	@media ${device.laptop} {
		width: 427px;
		margin-bottom: 64px;
	}
`;

const Input = styled.input`
	color: ${colors.lightGray};
	background: ${colors.darkGray};
	border: none;
	border-radius: 28px;

	::placeholder {
		font-weight: 600;
	}

	@media ${device.mobile} {
		width: 327px;
		height: 46px;
		padding: 9px 32px;
		margin-bottom: 16px;
	}

	@media ${device.tablet} {
		width: 427px;
		height: 56px;
		margin-bottom: 8px;
		padding: 14px 32px;
		display: relative;
	}

	@media ${device.laptop} {
		width: 427px;
		height: 56px;
		margin-bottom: 8px;
		padding: 14px 32px;
		display: relative;
	}
`;

const Submit = styled(Button)`
	@media ${device.tablet} {
		position: absolute;
		top: 5px;
		right: 5px;
	}

	@media ${device.laptop} {
		position: absolute;
		top: 5px;
		right: 5px;
	}
`;

const Message = styled.label`
	display: block;
	color: #fb3e3e;
	font-size: 12px;
	margin-left: 32px;
`;

const Form = ({ message, placeholder, btnText }) => {
	const { values, errors, handleChange, handleSubmit } = useForm(
		login,
		validate
	);

	function login() {
		console.log("No errors, submit callback called!");
	}

	return (
		<FormGroup onSubmit={handleSubmit} noValidate>
			<Input
				type="email"
				name="email"
				placeholder={placeholder}
				onChange={handleChange}
				value={values.email || ""}
				message={errors.email}
			/>
			{errors.email && <Message>{errors.email}</Message>}
			<Submit>{btnText}</Submit>
		</FormGroup>
	);
};

export default Form;
