import { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Menu } from './';
import { useRouter } from 'next/router';
import { Image, Flex, Show, Box } from '@chakra-ui/react';

const HeaderComponent = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { push } = useRouter();

	useEffect(() => {
		if (isOpen) {
			document.documentElement.classList.add('stop-scrolling');
		} else {
			document.documentElement.classList.remove('stop-scrolling');
		}
	}, [isOpen]);

	return (
		<Flex
			as="header"
			height={headerHeight.toString().concat('px')}
			alignItems="center"
			justifyContent={{ base: 'center', md: 'space-between' }}
			zIndex="1000"
			w="100%"
			maxW="1920px"
			background="transparent"
			px="5"
			bg="navy.900"
		>
			<Image
				src="/snx.svg"
				width={200}
				height={12}
				onClick={() => push('/')}
				cursor="pointer"
				mr={{ base: '', md: '8' }}
			/>
			<Show below="md">
				<Box
					cursor="pointer"
					userSelect="none"
					top="25px"
					left="20px"
					position={isOpen ? 'fixed' : 'absolute'}
					zIndex="999"
				>
					<HamburgerMenu
						isOpen={isOpen}
						menuClicked={() => setIsOpen(!isOpen)}
						width={22}
						height={16}
						strokeWidth={2}
						rotate={0}
						color="white"
						borderRadius={0}
						animationDuration={0.3}
					/>
				</Box>
			</Show>
			<Menu isOpen={isOpen} data-test-id="header-menu" />
		</Flex>
	);
};

export const headerHeight = 65;

export default HeaderComponent;
