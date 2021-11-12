const size = {
  mobile: 325,
  tablet: 768,
  laptop: 1440,
  desktop: 2560,
};

export const device = {
  mobile: `(min-width: ${size.mobile}px) and (max-width: ${size.tablet - 1}px)`,
  tablet: `(min-width: ${size.tablet}px) and (max-width: ${size.laptop - 1}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktop}px)`,
};
