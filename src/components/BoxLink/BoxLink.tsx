import { Flex, FlexProps, Heading, Link, Button, Text } from '@chakra-ui/react';

interface BoxLinkProps extends FlexProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	href: string;
	linkText: string;
}

export const BoxLink = ({
	icon,
	title,
	description,
	href,
	linkText,
}: BoxLinkProps) => {
	return (
		<Flex>
			{icon}
			<Heading>{title}</Heading>
			<Text>{description}</Text>
			<Link as={Button}>{linkText}</Link>
		</Flex>
	);
};
