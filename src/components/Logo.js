import React from "react";
import styled from "styled-components";
import { device } from "../cssInJs/breakpoints.js";

import logo from "../../src/assets/desktop/logo.svg";

const Image = styled.img`
	height: 56px;
	width: 135px;

	@media ${device.mobile} {
		grid-row: 1;
		margin: 60px 0;
	}

	@media ${device.tablet} {
		margin-bottom: 0;
	}
`;

const Logo = () => {
	return <Image src={logo} alt="logo" />;
};

export default Logo;
