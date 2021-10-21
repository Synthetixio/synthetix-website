import { generateMedia } from 'styled-media-query';

// TODO: move all the existing usage of 'styled-media-query' to use the custom media instead

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Breakpoints = Record<Breakpoint, number>;

export const breakpoints: Breakpoints = {
	xs: 0,
	sm: 480,
	md: 768,
	lg: 1170,
	xl: 1440,
};

export const media = generateMedia({
	sm: `${breakpoints.sm}px`,
	md: `${breakpoints.md}px`,
	lg: `${breakpoints.lg}px`,
	xl: `${breakpoints.xl}px`,
});

export default media;
