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
	Box,
	Show,
} from '@chakra-ui/react';

interface IntegratorCardProps extends FlexProps {
	uri?: string;
	name?: string;
	description?: string;
	largestDescription?: string;
	link?: string;
	tag?: string;
	enabled?: boolean;
}

export const IntegratorCard = ({
	uri,
	name,
	description,
	largestDescription,
	link,
	tag,
	enabled = true,
	...props
}: IntegratorCardProps) => {
	return (
		<LinkBox
			as={Flex}
			flexDir="column"
			alignItems="flex-start"
			bg="navy.700"
			borderWidth="1px"
			borderStyle="solid"
			borderRadius="5px"
			borderColor="gray.900"
			{...props}
			cursor={enabled ? 'pointer' : 'default'}
			pointerEvents={enabled ? 'auto' : 'none'}
		>
			<LinkOverlay href={link} isExternal width="100%">
				<Flex justifyContent="space-between" width="100%">
					<Image
						alt={`${name}-logo`}
						src={uri}
						h={{ base: '40px', xl: '50px' }}
					/>
					<Tag
						px="8px"
						height="fit-content"
						py="2px"
						background="whiteAlpha.300"
						borderRadius="4px"
					>
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
				<Show above="md">
					<Box position="relative">
						<Text
							fontSize="16px"
							lineHeight="24px"
							color="gray.500"
							fontWeight={400}
							position="absolute"
						>
							{description}
						</Text>
						{/* NOTE: Hack to make items same height. */}
						<Text
							fontSize="16px"
							lineHeight="24px"
							fontWeight={400}
							color="transparent"
						>
							{largestDescription}
						</Text>
					</Box>
				</Show>
			</LinkOverlay>
		</LinkBox>
	);
};
