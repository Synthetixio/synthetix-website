import {
	Button,
	Flex,
	Heading,
	Hide,
	Icon,
	Link,
	Show,
	Text,
	Image,
	FlexProps,
} from '@chakra-ui/react';

interface IntegratorCardProps extends FlexProps {
	uri: string;
	name: string;
	description: string | string[];
	link: string;
}

export const IntegratorCardPerps = ({
	uri,
	name,
	description,
	link,
	...props
}: IntegratorCardProps) => {
	return (
		<Flex
			flexDir="column"
			alignItems="flex-start"
			bg="navy.900"
			borderWidth="1px"
			borderStyle="solid"
			borderRadius="base"
			borderColor="gray.900"
			{...props}
		>
			<Hide above="md">
				<Flex alignItems="center" h="40px" mb="16px">
					<Image src={uri} h={{ base: '40px', xl: '50px' }} alt="Integrator" />
					<Text
						my="16px"
						fontSize="lg"
						ml="16px"
						color="white"
						fontWeight={700}
					>
						{name}
					</Text>
				</Flex>
				<Text mb={{ base: 'auto' }} fontSize="16px" color="gray.500">
					{Array.isArray(description) ? (
						<>
							{description[0]}{' '}
							<Link href="mailto:perps@snxdao.io" color="cyan.500">
								perps@snxdao.io.
							</Link>
						</>
					) : (
						description
					)}
				</Text>
			</Hide>
			<Show above="md">
				<Image src={uri} h={{ base: '40px', xl: '50px' }} alt="Integrator" />
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
			</Show>
			<Button
				mt={{ lg: '16px' }}
				variant="outline"
				onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
				w={{ base: '100%', xl: '180px' }}
				size={{ base: 'lg', xl: 'sm' }}
				rightIcon={
					name === 'Synthetix' ? undefined : (
						<Icon
							width="14px"
							height="14px"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_4786_501)">
								<path
									d="M9.07952 4.47127L4.65444 4.47127L4.65445 3.30478L11.071 3.30478L11.071 9.7213L9.90448 9.7213L9.90448 5.29623L4.11717 11.325L3.29221 10.5001L9.07952 4.47127Z"
									fill="#00D1FF"
								/>
							</g>
							<defs>
								<clipPath id="clip0_4786_501">
									<rect width="14" height="14" fill="white" />
								</clipPath>
							</defs>
						</Icon>
					)
				}
			>
				Visit {name}
			</Button>
		</Flex>
	);
};
