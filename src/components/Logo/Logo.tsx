import { Link, LinkProps } from '@chakra-ui/react';

interface LogoProps extends LinkProps {
	small?: boolean;
}

export const Logo = ({ small, ...rest }: LogoProps) => {
	const src = small ? '/logo-x.svg' : '/logo.svg';

	return (
		<Link href="/" {...rest}>
			<img src={src} alt="synthetix" />
		</Link>
	);
};
