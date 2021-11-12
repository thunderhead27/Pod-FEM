import styled from "styled-components";
import { device } from "../cssInJs/breakpoints";
import { colors } from "../cssInJs/colors";

const Button = styled.button`
	border-radius: 28px;
	border: none;
	background-color: ${colors.green};
	color: ${colors.dark};
	margin-bottom: 8px;
	padding: 9px 27px;

	height: 46px;

	font-weight: 600;
	font-size: 14px;

	@media ${device.mobile} {
		width: 100%;
	}

	@media ${device.tablet} {
		width: 162px;
	}

	@media ${device.laptop} {
		width: 162px;
	}

	:hover {
		background-color: ${colors.lightGreen};
	}
`;

export default Button;
