import { Link, LinkProps } from '@chakra-ui/react';
import Image from 'next/image';

interface LogoProps extends LinkProps {
	small?: boolean;
}

export const Logo = ({ small, ...rest }: LogoProps) => {
	const src = small ? '/logo-x.svg' : '/logo.svg';

	return (
		<Link href="/" {...rest}>
			<Image src={src} alt="Synthetix" />
		</Link>
	);
};
