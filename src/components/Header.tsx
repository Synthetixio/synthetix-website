import { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Menu } from './';
import { useRouter } from 'next/router';
import { Box, Flex, Image, Show } from '@chakra-ui/react';

export default function Header(props: any) {
	const { navDocs } = props || null;
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [subOpen, setSubOpen] = useState<boolean>(false);
	const { push } = useRouter();
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('fixed');
		} else {
			document.body.classList.remove('fixed');
		}
		setSubOpen(navDocs ? true : false);
	}, [isOpen, navDocs]);

	const clickMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Flex
			px="4"
			as="header"
			h={headerHeight + 'px'}
			alignItems="center"
			justifyContent="center"
			zIndex="1000"
			bg="transparent"
			w={'100%'}
			maxW="container.lg"
		>
			<Image
				src="/snx.svg"
				htmlWidth={200}
				htmlHeight={10}
				onClick={() => push('/')}
				cursor="pointer"
			/>
			<Show below="md">
				<Box
					userSelect="none"
					left="20px"
					top="30px"
					position={isOpen ? 'fixed' : 'absolute'}
					zIndex="999"
				>
					<HamburgerMenu
						isOpen={isOpen}
						menuClicked={clickMenu}
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
			<Menu
				navDocs={navDocs}
				subOpen={subOpen}
				isHeader={true}
				isOpen={isOpen}
				data-test-id="header-menu"
			/>
		</Flex>
	);
}

export const headerHeight = 80;
