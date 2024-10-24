import { useReducer, FocusEvent, useRef, useEffect } from 'react';
import {
	Box,
	Flex,
	Button,
	Input,
	Text,
	Spinner,
	FlexProps,
} from '@chakra-ui/react';
import { AppEvents, initialState, reducer } from './reducer';
import { emailRegex } from 'src/utils/validation';
import { MARKETING_URI } from 'src/constants/urls';
import {
	get as localStoreGet,
	set as localStoreSet,
} from 'src/utils/localStore';

interface EmailSignupProps extends FlexProps {
	page?: string;
}

export const EmailSignup = ({ page = 'home', ...props }: EmailSignupProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const inputRef = useRef<HTMLInputElement>(null);

	const { submitted, errorMessage, valid, loading } = state;

	useEffect(() => {
		const previouslySubmitted =
			localStoreGet('marketing-form-submission') === true;

		if (previouslySubmitted) {
			dispatch({ type: AppEvents.SUBMIT });
		}
	}, []);

	const onClick = async () => {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		if (valid) {
			dispatch({ type: AppEvents.LOADING });
			try {
				await fetch(MARKETING_URI, {
					method: 'POST',
					mode: 'no-cors',
					headers,
					redirect: 'follow',
					body: JSON.stringify({
						contact: {
							email: inputRef?.current?.value,
							route: page,
						},
					}),
				});

				dispatch({ type: AppEvents.SUBMIT });
				localStoreSet('marketing-form-submission', true);
				inputRef!.current!.value = '';
			} catch (error) {
				dispatch({
					type: AppEvents.ERROR,
					payload: 'There has been an error.',
				});
			}
		}
	};

	const onBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
		if (e.target.value) {
			emailRegex.test(e.target.value)
				? dispatch({
						type: AppEvents.VALID,
				  })
				: dispatch({
						type: AppEvents.ERROR,
						payload: 'Please enter a valid email address.',
				  });
		} else {
			dispatch({ type: AppEvents.CLEAR });
		}
	};

	if (page !== '/') {
		return (
			<Flex
				direction="column"
				mt={{ base: '8px' }}
				height="100%"
				pt="36px"
				{...props}
			>
				<Flex
					as="form"
					noValidate
					onSubmit={e => e.preventDefault()}
					direction="row"
					alignItems="center"
					justifyContent="space-evenly"
					height="fit-content"
					width="100%"
				>
					<Input
						size="lg"
						py="8px"
						px="16px"
						placeholder="Enter Your Email Address"
						type="email"
						minW={['150px', '200px']}
						w="100%"
						fontFamily="heading"
						fontSize="lg"
						lineHeight="8"
						isRequired
						borderColor="gray.900"
						_placeholder={{ color: 'gray.400' }}
						onBlur={onBlur}
						ref={inputRef}
						mr="16px"
					/>
					<Button
						onClick={onClick}
						variant="outline"
						colorScheme="gray"
						size="lg"
					>
						{loading ? <Spinner /> : 'Sign Up'}
					</Button>
				</Flex>
				<Box minH="10">
					{errorMessage && <Text mt={1}>{errorMessage}</Text>}
					{submitted && typeof window !== 'undefined' && (
						<Text color="green.500" mt={1}>
							Thank you for Signing Up!
						</Text>
					)}
				</Box>
			</Flex>
		);
	}

	return (
		<Flex
			direction="column"
			justifyContent="center"
			height="100%"
			pt="36px"
			{...props}
		>
			<Flex
				as="form"
				noValidate
				onSubmit={e => e.preventDefault()}
				direction="row"
				alignItems="center"
				justifyContent="space-evenly"
				height="fit-content"
				bg="whiteAlpha.300"
				borderWidth="1px"
				borderColor="whiteAlpha.50"
				borderRadius="md"
				width="fit-content"
			>
				<Input
					placeholder="Enter Your Email Address"
					type="email"
					minW={['200px', '250px']}
					w="100%"
					fontFamily="heading"
					fontSize="lg"
					lineHeight="8"
					isRequired
					bg="transparent"
					border="none"
					my={0}
					py={6}
					_placeholder={{ color: 'gray.400' }}
					onBlur={onBlur}
					ref={inputRef}
				/>
				<Button
					onClick={onClick}
					height="44px"
					flexShrink={0}
					type="submit"
					color="cyan.500"
					fontFamily="GT America"
					fontWeight="700"
					bgGradient="none"
					bgColor="#161B44"
					fontSize="sm"
					borderRadius="md"
					boxShadow="0px 0px 10px rgba(0, 209, 255, 0.9);"
					px={8}
					_hover={{
						bgGradient: 'none',
						bgColor: '#161B4480',
					}}
					_active={{
						bgColor: '#161B4490',
					}}
				>
					{loading ? <Spinner /> : 'Sign Up'}
				</Button>
			</Flex>
			<Box minH="10">
				{errorMessage && <Text mt={1}>{errorMessage}</Text>}
				{submitted && typeof window !== 'undefined' && (
					<Text color="green.500" mt={1}>
						Thank you for Signing Up!
					</Text>
				)}
			</Box>
		</Flex>
	);
};
