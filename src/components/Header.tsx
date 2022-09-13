import { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Menu } from './';
import { useRouter } from 'next/router';
import { Image, Flex, Show, Box } from '@chakra-ui/react';
import { NavDocs } from 'src/typings/cms-types';

export interface HeaderProps {
	config?: {
		label: string;
		navTitle: string;
		items: NavDocs[];
	};
}

const HeaderComponent = ({ config }: HeaderProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [subOpen, setSubOpen] = useState<boolean>(false);
	const { push } = useRouter();
	const itemsToString = config?.toString();
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('fixed');
		} else {
			document.body.classList.remove('fixed');
		}
		setSubOpen(!!config?.items?.length);
	}, [isOpen, itemsToString]);

	return (
		<Flex
			as="header"
			height={headerHeight.toString().concat('px')}
			alignItems="center"
			justifyContent={{ base: 'center', md: 'space-between' }}
			zIndex="1000"
			w="100%"
			maxW="8xl"
			background="transparent"
			px="2"
		>
			<Image
				src="/snx.svg"
				width={200}
				height={12}
				onClick={() => push('/')}
				cursor="pointer"
			/>
			<Show below="md">
				<Box
					cursor="pointer"
					userSelect="none"
					top="39px"
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
			<Menu
				items={config?.items}
				subOpen={subOpen}
				isHeader={true}
				isOpen={isOpen}
				data-test-id="header-menu"
			/>
		</Flex>
	);
};

export const headerHeight = 100;

export default HeaderComponent;
