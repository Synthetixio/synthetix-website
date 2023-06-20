import {
	Flex,
	Heading,
	Text,
	Image,
	Tag,
	TagLabel,
	FlexProps,
	LinkBox,
	LinkOverlay,
} from '@chakra-ui/react';

interface IntegratorCardProps extends FlexProps {
	uri: string;
	name: string;
	description: string | string[];
	link: string;
	tag: string;
}

export const IntegratorCard = ({
	uri,
	name,
	description,
	link,
	tag,
	...props
}: IntegratorCardProps) => {
	return (
		<LinkBox
			as={Flex}
			flexDir="column"
			alignItems="flex-start"
			bg="navy.900"
			borderWidth="1px"
			borderStyle="solid"
			borderRadius="base"
			borderColor="gray.900"
			{...props}
		>
			<LinkOverlay href={link} isExternal>
				<Flex justifyContent="space-between" width="100%" alignItems="center">
					<Image src={uri} h={{ base: '40px', xl: '50px' }} />
					<Tag px="8px" py="2px" background="whiteAlpha.500" borderRadius="4px">
						<TagLabel
							fontSize="12px"
							color="white"
							fontWeight={500}
							fontFamily="heading"
						>
							{tag}
						</TagLabel>
					</Tag>
				</Flex>
				<Heading my="16px" fontSize="18px">
					{name}
				</Heading>
				<Text
					mb={{ base: 'auto' }}
					fontSize="16px"
					lineHeight="24px"
					color="gray.500"
				>
					{description}
				</Text>
			</LinkOverlay>
		</LinkBox>
	);
};
