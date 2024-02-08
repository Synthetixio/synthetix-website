import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { InterestedLooper } from 'src/svg/InterestedLooper';

const COUNCILS = [
	{
		title: 'Spartan Council',
		icon: (
			<svg
				width="41"
				height="52"
				viewBox="0 0 41 52"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="flatten">
					<path
						id="Vector"
						d="M14.3347 51.1178L10.6531 48.8817L0.682105 43.2059V42.3976C0.682105 42.0436 0.640805 35.0993 0.599505 28.3851C0.558205 21.8479 0.522804 15.4287 0.522804 15.1101C0.505104 12.4315 1.1718 9.74701 2.4462 7.33981C3.71471 4.94441 5.59091 2.83221 7.87421 1.21561L8.23411 0.961914H32.7486L33.1085 1.21561C35.3918 2.82631 37.268 4.94441 38.5424 7.33391C39.8168 9.74111 40.4835 12.4315 40.4658 15.1101C40.4658 41.8961 40.3242 42.4861 40.2711 42.7103L40.1354 43.2826L30.6187 48.9171L26.766 50.9467V33.76L31.5804 31.3469V24.1076L24.4886 27.4942V36.9755L23.3027 37.1466C21.4442 37.418 19.5562 37.418 17.6977 37.1466L16.5118 36.9755V27.4942L9.52031 24.1194V31.3469L14.3347 33.76V51.1178ZM29.539 35.471V46.3388L37.5807 41.5775C37.6574 38.598 37.6987 26.2847 37.6987 15.1042C37.7164 12.8681 37.1618 10.632 36.0998 8.63191C35.0968 6.74391 33.6395 5.05651 31.8695 3.72901H9.13681C7.36681 5.05651 5.90951 6.74391 4.90651 8.63191C3.84451 10.632 3.28991 12.8681 3.30171 15.0924C3.30171 15.4228 3.33711 21.8302 3.37841 28.3615C3.40791 33.8603 3.44331 39.5125 3.45511 41.5775L11.5676 46.1972V35.4592L6.75321 33.0461V19.6885L19.2907 25.736V34.5211C20.099 34.5801 20.9132 34.5801 21.7215 34.5211V25.7301L34.3593 19.6944V33.0402L29.5449 35.4533L29.539 35.471Z"
						fill="#00D1FF"
					/>
					<path
						id="Vector_2"
						d="M16.5353 10.1482C16.4291 10.0243 16.2934 9.96535 16.14 9.96535H12.9245C12.9245 9.96535 12.8714 9.95355 12.8537 9.93585C12.836 9.91815 12.8242 9.90045 12.8242 9.87685V7.71155C12.8242 7.71155 12.836 7.67025 12.8537 7.65255C12.8714 7.63485 12.895 7.62305 12.9245 7.62305H16.3229C17.1784 7.62305 17.9218 7.97115 18.5413 8.67325L19.3673 9.68215L17.7625 11.6409L16.5412 10.1482H16.5353ZM22.4707 8.66735C23.0902 7.97705 23.8336 7.62895 24.7009 7.62895H28.0875C28.0875 7.62895 28.1347 7.63485 28.1524 7.65255C28.1642 7.66435 28.176 7.68795 28.176 7.71745V9.88275C28.176 9.88275 28.1701 9.92405 28.1524 9.94175C28.1406 9.95945 28.117 9.97125 28.0875 9.97125H24.872C24.7127 9.97125 24.5829 10.0302 24.4767 10.1541L22.1108 13.0333L24.4885 15.9361C24.5947 16.0541 24.7245 16.1072 24.872 16.1072H28.0875C28.0875 16.1072 28.1347 16.119 28.1524 16.1367C28.1642 16.1544 28.176 16.178 28.176 16.2075V18.3728C28.176 18.3728 28.1701 18.4141 28.1524 18.4318C28.1406 18.4495 28.117 18.4613 28.0875 18.4613H24.7009C23.8395 18.4613 23.0961 18.1132 22.4825 17.4111L20.5119 15.0098L18.5413 17.4111C17.9218 18.1132 17.1784 18.4613 16.3111 18.4613H12.9245C12.9245 18.4613 12.8714 18.4495 12.8596 18.4318C12.8478 18.4141 12.836 18.3905 12.836 18.361V16.1957C12.836 16.1957 12.8419 16.1544 12.8596 16.1367C12.8714 16.119 12.895 16.1072 12.9245 16.1072H16.14C16.2875 16.1072 16.4232 16.0482 16.5353 15.9243L18.8599 13.0864L22.4707 8.66735Z"
						fill="#00D1FF"
					/>
				</g>
			</svg>
		),
		description: [
			'The Spartan Council (SC), established via ',
			{ link: 'https://sips.synthetix.io/sips/sip-93/', text: 'SIP-93' },
			', is the central governing body of the Synthetix protocol. The SC votes on Synthetix Improvement Proposals (SIPs) and Synthetix Configuration Change Proposal (SCCPs). The SC is responsible for conducting SIP/SCCP interviews, debating the implications of proposed changes, coordinating protocol changes with core contributors, and hosting periodic community governance meetings.',
		],
		link: 'https://governance.synthetix.io/#/councils/spartan',
	},
	{
		title: 'Grants Council',
		icon: (
			<svg
				width="49"
				height="48"
				viewBox="0 0 49 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="flatten">
					<path
						id="Vector"
						d="M24.5121 0.0476074C11.1043 0.0476074 0.191406 10.6027 0.191406 23.5709C0.191406 27.1522 1.03321 30.704 2.63141 33.8487C2.79611 34.1791 2.97301 34.5036 3.15601 34.8222C3.17431 34.8576 3.19261 34.893 3.21701 34.9284C4.26621 36.7692 5.5777 38.4625 7.1088 39.967C11.696 44.5454 17.8814 47.0706 24.5121 47.0706C31.1428 47.0706 37.2977 44.5513 41.9154 39.967C43.4526 38.433 44.758 36.7279 45.8011 34.8871C45.9292 34.6747 46.0451 34.4623 46.1549 34.244C46.2342 34.1142 46.3013 33.9844 46.3684 33.8487C47.9666 30.704 48.8084 27.1522 48.8084 23.5709C48.8084 10.6027 37.9077 0.0476074 24.5121 0.0476074ZM24.5121 44.2976C19.4186 44.2976 14.6301 42.6102 10.7993 39.5068L24.5487 28.5682L38.2554 39.4773C34.4124 42.5984 29.6056 44.2976 24.5121 44.2976ZM44.5079 31.0462L37.3953 25.3704L35.5714 27.5121L43.2452 33.6304C42.4461 35.0346 41.4701 36.3444 40.3355 37.5421L26.2994 26.3675C25.2868 25.5651 23.8167 25.5651 22.8041 26.3675L8.7192 37.5775C7.5785 36.3975 6.5964 35.0936 5.7851 33.6894L13.5382 27.5121L11.7143 25.3704L4.5163 31.1052C3.55861 28.7393 3.05841 26.1669 3.05841 23.5709C3.05841 12.1308 12.6842 2.82061 24.5121 2.82061C36.34 2.82061 45.9414 12.1308 45.9414 23.5709C45.9414 26.1433 45.4473 28.6921 44.5079 31.0462Z"
						fill="#00D1FF"
					/>
					<path
						id="Vector_2"
						d="M3.21725 34.9285H3.21115C3.21115 34.9285 3.16845 34.8577 3.15625 34.8223C3.17455 34.8577 3.19285 34.8931 3.21725 34.9285Z"
						fill="#00D1FF"
					/>
					<path
						id="Vector_3"
						d="M46.1546 34.2439C46.1058 34.4799 46.0204 34.71 45.8923 34.9342L45.8008 34.887C45.9289 34.6746 46.0448 34.4622 46.1546 34.2439Z"
						fill="#00D1FF"
					/>
					<path
						id="Vector_4"
						d="M20.0894 13.4406C19.9674 13.3108 19.821 13.24 19.6502 13.24H16.0756C16.0451 13.24 16.0207 13.2282 15.9963 13.2105C15.978 13.1928 15.9658 13.1692 15.9658 13.1456V10.8151C15.9658 10.8151 15.978 10.7679 15.9963 10.7502C16.0146 10.7325 16.039 10.7207 16.0756 10.7207H19.8576C20.8092 10.7207 21.6327 11.0983 22.3281 11.8535L23.2492 12.9391L21.4619 15.0513L20.1016 13.4406H20.0894ZM26.6957 11.8417C27.385 11.0983 28.2146 10.7207 29.1784 10.7207H32.9482C32.9787 10.7207 33.0031 10.7266 33.0214 10.7443C33.0397 10.762 33.0458 10.7856 33.0458 10.8151V13.1456C33.0458 13.1456 33.0397 13.1928 33.0214 13.2105C33.0031 13.2282 32.9787 13.24 32.9482 13.24H29.3736C29.1967 13.24 29.0503 13.3049 28.9344 13.4406L26.2992 16.544L28.9466 19.6651C29.0686 19.789 29.2089 19.8539 29.3736 19.8539H32.9482C32.9787 19.8539 33.0031 19.8657 33.0214 19.8834C33.0397 19.9011 33.0458 19.9306 33.0458 19.9601V22.2906C33.0458 22.2906 33.0397 22.3378 33.0214 22.3555C33.0031 22.3732 32.9787 22.385 32.9482 22.385H29.1784C28.2146 22.385 27.3911 22.0074 26.7079 21.2522L24.5119 18.6621L22.3159 21.2522C21.6266 22.0074 20.797 22.385 19.8332 22.385H16.0634C16.0329 22.385 16.0085 22.3732 15.9902 22.3555C15.9719 22.3378 15.9658 22.3083 15.9658 22.2788V19.9483C15.9658 19.9483 15.9719 19.9011 15.9902 19.8834C16.0085 19.8657 16.0329 19.8539 16.0634 19.8539H19.638C19.8027 19.8539 19.9491 19.789 20.0772 19.6533L22.6636 16.5971L26.6835 11.8417H26.6957Z"
						fill="#00D1FF"
					/>
				</g>
			</svg>
		),
		description: [
			'The Grants Council, established via ',
			{ link: 'https://sips.synthetix.io/sips/sip-39/', text: 'SIP-39' },
			', is responsible for public goods funding through grants, initiative bounties, or competition prizes. It is a value-based entity, whose ultimate goal in funding projects is to produce publicly accessible, beneficial, high-quality work where profit margins are not the priority. Projects are chosen not based on the value they can extract but instead on the value they can add to the community.',
		],
		link: 'https://governance.synthetix.io/#/councils/grants',
	},
	{
		title: 'Treasury Council',
		icon: (
			<svg
				width="47"
				height="48"
				viewBox="0 0 47 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="flatten">
					<path
						id="Vector"
						d="M23.5006 39.942C19.4827 39.942 15.4648 38.388 12.4027 35.274C9.44094 32.262 7.80664 28.254 7.80664 23.988C7.80664 19.722 9.44094 15.72 12.4027 12.708C18.521 6.486 28.4743 6.486 34.5926 12.708C37.5544 15.72 39.1887 19.728 39.1887 23.988C39.1887 28.248 37.5544 32.256 34.5926 35.274C31.5364 38.382 27.5126 39.942 23.4947 39.942H23.5006ZM23.5006 10.866C20.1907 10.866 16.8867 12.144 14.3674 14.706C11.9307 17.184 10.5855 20.484 10.5855 23.994C10.5855 27.504 11.9307 30.804 14.3674 33.282C19.406 38.406 27.6011 38.406 32.6397 33.282C35.0764 30.804 36.4216 27.504 36.4216 23.994C36.4216 20.484 35.0764 17.184 32.6397 14.706C30.1204 12.144 26.8105 10.866 23.5065 10.866H23.5006Z"
						fill="#00D1FF"
					/>
					<path
						id="Vector_2"
						d="M14.0307 47.5081L13.954 47.4781C7.47583 44.4601 2.77353 39.7561 0.348633 33.8701L2.90923 32.7841C5.05683 38.0041 9.27533 42.2041 15.1045 44.9161L14.0307 47.5141V47.5081ZM33.1349 47.4361L32.067 44.8321C37.5363 42.5041 41.7902 38.1541 44.044 32.5741L44.0735 32.4961L46.6341 33.5761L46.6046 33.6481C44.0735 39.9181 39.2886 44.8141 33.1349 47.4301V47.4361ZM3.04493 15.4921L0.478432 14.4241C3.03313 8.07606 7.87703 2.98206 13.777 0.456055L14.8508 3.05406C9.62343 5.29206 5.32233 9.82206 3.03903 15.4921H3.04493ZM43.9673 15.2221C41.6781 9.69006 37.4124 5.38806 31.9549 3.10206L31.9136 3.09005L32.9048 0.456055L32.9874 0.486055C39.1352 3.05406 43.9437 7.89606 46.522 14.1301L43.9673 15.2221Z"
						fill="#00D1FF"
					/>
					<path
						id="Vector_3"
						d="M19.5353 21.0599C19.4291 20.9339 19.2934 20.8739 19.14 20.8739H15.9245C15.9245 20.8739 15.8714 20.8619 15.8537 20.8439C15.836 20.8259 15.8242 20.8079 15.8242 20.7839V18.5819C15.8242 18.5819 15.836 18.5399 15.8537 18.5219C15.8714 18.5039 15.895 18.4919 15.9245 18.4919H19.3229C20.1784 18.4919 20.9218 18.8459 21.5413 19.5599L22.3673 20.5859L20.7625 22.5779L19.5412 21.0599H19.5353ZM25.4707 19.5539C26.0902 18.8519 26.8336 18.4979 27.7009 18.4979H31.0875C31.0875 18.4979 31.1347 18.5039 31.1524 18.5219C31.1642 18.5339 31.176 18.5579 31.176 18.5879V20.7899C31.176 20.7899 31.1701 20.8319 31.1524 20.8499C31.1406 20.8679 31.117 20.8799 31.0875 20.8799H27.872C27.7127 20.8799 27.5829 20.9399 27.4767 21.0659L25.1108 23.9939L27.4885 26.9459C27.5947 27.0659 27.7245 27.1199 27.872 27.1199H31.0875C31.0875 27.1199 31.1347 27.1319 31.1524 27.1499C31.1642 27.1679 31.176 27.1919 31.176 27.2219V29.4239C31.176 29.4239 31.1701 29.4659 31.1524 29.4839C31.1406 29.5019 31.117 29.5139 31.0875 29.5139H27.7009C26.8395 29.5139 26.0961 29.1599 25.4825 28.4459L23.5119 26.0039L21.5413 28.4459C20.9218 29.1599 20.1784 29.5139 19.3111 29.5139H15.9245C15.9245 29.5139 15.8714 29.5019 15.8596 29.4839C15.8478 29.4659 15.836 29.4419 15.836 29.4119V27.2099C15.836 27.2099 15.8419 27.1679 15.8596 27.1499C15.8714 27.1319 15.895 27.1199 15.9245 27.1199H19.14C19.2875 27.1199 19.4232 27.0599 19.5353 26.9339L21.8599 24.0479L25.4707 19.5539Z"
						fill="#00D1FF"
					/>
				</g>
			</svg>
		),
		description: [
			'The Treasury Council, established via ',
			{ link: 'https://sips.synthetix.io/sips/sip-155/', text: 'SIP-155' },
			", provides resources for the protocol's growth and expansion. This includes managing the treasury in a way that allows continuity of funding for protocol costs (on-chain/off-chain), council and Core Contributor Stipends, ecosystem incentives, including Grants Council funding, and other discretionary incentives. The members of the council manage the treasury through a gnosis-safe multi-sig.",
		],
		link: 'https://governance.synthetix.io/#/councils/treasury',
	},
	{
		title: 'Ambassador Council',
		icon: (
			<svg
				width="49"
				height="43"
				viewBox="0 0 49 43"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="flatten">
					<path
						id="Vector"
						d="M0.900391 0.48999V3.26299H5.24279V23.2522C5.24279 33.8663 13.8804 42.5098 24.5004 42.5098C35.1204 42.5098 43.758 33.8663 43.758 23.2522V3.26299H48.1004V0.48999H0.900391ZM40.985 23.2522C40.985 32.3382 33.5923 39.7368 24.5004 39.7368C15.4085 39.7368 8.01579 32.3382 8.01579 23.2522V3.26299H40.985V23.2522Z"
						fill="#00D1FF"
					/>
					<path
						id="Vector_2"
						d="M20.2345 15.8654C20.1165 15.7356 19.9749 15.6648 19.8097 15.6648H16.3523C16.3228 15.6648 16.2992 15.653 16.2756 15.6353C16.2579 15.6176 16.2461 15.594 16.2461 15.5704V13.2399C16.2461 13.2399 16.2579 13.1927 16.2756 13.175C16.2933 13.1573 16.3169 13.1455 16.3523 13.1455H20.0103C20.9307 13.1455 21.7272 13.5231 22.3998 14.2783L23.2907 15.3639L21.562 17.4761L20.2463 15.8654H20.2345ZM26.6242 14.2665C27.2909 13.5231 28.0933 13.1455 29.0255 13.1455H32.6717C32.7012 13.1455 32.7248 13.1514 32.7425 13.1691C32.7602 13.1868 32.7661 13.2104 32.7661 13.2399V15.5704C32.7661 15.5704 32.7602 15.6176 32.7425 15.6353C32.7248 15.653 32.7012 15.6648 32.6717 15.6648H29.2143C29.0432 15.6648 28.9016 15.7297 28.7895 15.8654L26.2407 18.9688L28.8013 22.0899C28.9193 22.2138 29.055 22.2787 29.2143 22.2787H32.6717C32.7012 22.2787 32.7248 22.2905 32.7425 22.3082C32.7602 22.3259 32.7661 22.3554 32.7661 22.3849V24.7154C32.7661 24.7154 32.7602 24.7626 32.7425 24.7803C32.7248 24.798 32.7012 24.8098 32.6717 24.8098H29.0255C28.0933 24.8098 27.2968 24.4322 26.636 23.677L24.512 21.0869L22.388 23.677C21.7213 24.4322 20.9189 24.8098 19.9867 24.8098H16.3405C16.311 24.8098 16.2874 24.798 16.2697 24.7803C16.252 24.7626 16.2461 24.7331 16.2461 24.7036V22.3731C16.2461 22.3731 16.252 22.3259 16.2697 22.3082C16.2874 22.2905 16.311 22.2787 16.3405 22.2787H19.7979C19.9572 22.2787 20.0988 22.2138 20.2227 22.0781L22.7243 19.0219L26.6124 14.2665H26.6242Z"
						fill="#00D1FF"
					/>
				</g>
			</svg>
		),
		description: [
			'The Ambassador Council, established via ',
			{ link: 'https://sips.synthetix.io/sips/sip-157/', text: 'SIP-157' },
			"is responsible for promoting Synthetix's interest in the DeFi ecosystem. This advocation comes through two primary means: governance and partnerships. Governance includes seeking governance power in protocols that may be beneficial for Synthetix, and voting for proposals in the interest of the community. Partnerships include working with Synthetix integrators to help them integrate within the Synthetix Ecosystem.",
		],
		link: 'https://governance.synthetix.io/#/councils/ambassador',
	},
];

export default function GovernanceEcosystem() {
	return (
		<Flex
			flexDir="column"
			w="100%"
			my={{ base: 10 }}
			position="relative"
			alignItems="center"
		>
			<Box
				position="absolute"
				bgGradient="linear-gradient(44deg, #EE2EFF 0%, #5744EA 100%)"
				width="584px"
				height="536px"
				zIndex={0}
				borderRadius="100%"
				filter="blur(250px)"
				top="300px"
				left={{ base: '-200px', md: '-100px' }}
			/>
			<Text
				color="gray.500"
				fontSize={{ base: '16px' }}
				mb={{ base: 1 }}
				zIndex={10}
				w="100%"
			>
				SYNTHETIX ECOSYSTEM
			</Text>
			<Heading
				fontSize={{ base: '48px' }}
				lineHeight={{ base: '120%' }}
				mb={{ base: 1 }}
				zIndex={10}
				w="100%"
			>
				Governing Councils
			</Heading>
			<Text
				w="100%"
				color="gray.500"
				fontSize={{ base: '14px' }}
				mb={{ base: 4 }}
				zIndex={10}
			>
				The Synthetix Protocol is governed by four councils, each responsible
				for a core aspect of a DAO.
			</Text>
			<Flex
				flexDir={{ base: 'column', md: 'row' }}
				flexWrap={{ md: 'wrap' }}
				gap={{ md: 4 }}
				alignItems="center"
				justifyContent="center"
			>
				{COUNCILS.map(council => {
					return (
						<Flex
							maxW={{ md: '360px', lg: '414px', xl: '606px' }}
							key={council.title.concat(council.link)}
							flexDir="column"
							rounded="base"
							boxShadow="dark-lg"
							bg="navy.700"
							border="1px solid"
							borderColor="gray.900"
							p={{ base: '6' }}
							mb={{ base: '4' }}
							zIndex={1}
							height={{ xl: '486px' }}
						>
							{council.icon}
							<Heading my={{ base: 4 }}>{council.title}</Heading>
							<Box>
								{council.description.map(description => {
									if (typeof description === 'object')
										return (
											<Link
												href={description.link}
												key={description.link.concat(description.text)}
												style={{ display: 'inline' }}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Text
													fontSize={{ base: '16px' }}
													color="cyan.500"
													display="inline"
												>
													{description.text}
												</Text>
											</Link>
										);
									return (
										<Text
											display="inline"
											fontSize={{ base: '16px' }}
											color="gray.500"
											key={description}
										>
											{description}
										</Text>
									);
								})}
							</Box>
							<Link
								href={council.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button
									mt={{ base: '6' }}
									variant="outline"
									colorScheme="gray"
									color="white"
									rightIcon={
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 18 18"
											fill="none"
										>
											<g clip-path="url(#clip0_6845_45)">
												<path
													d="M11.6733 5.7487L5.98387 5.7487L5.98387 4.24892L14.2337 4.24892L14.2337 12.4987L12.7339 12.4987L12.7339 6.80936L5.29308 14.5607L4.23242 13.5L11.6733 5.7487Z"
													fill="white"
												/>
											</g>
											<defs>
												<clipPath id="clip0_6845_45">
													<rect width="18" height="18" fill="white" />
												</clipPath>
											</defs>
										</svg>
									}
								>
									View Council
								</Button>
							</Link>
						</Flex>
					);
				})}
			</Flex>

			<Flex
				flexDir="column"
				rounded="base"
				boxShadow="dark-lg"
				bg="navy.700"
				border="1px solid"
				borderColor="gray.900"
				p={{ base: '6' }}
				mb={{ base: '4' }}
				zIndex={10}
				pos="relative"
				overflow="hidden"
				maxW="1236px"
				w="100%"
			>
				<InterestedLooper
					position="absolute"
					top="0"
					right="0"
					bottom="0"
					zIndex={0}
				/>
				<Heading my={{ base: 4 }} mt={{ base: '341px', xl: 12 }} maxW="700px">
					Learn more about Synthetix Governance
				</Heading>

				<Text
					display="inline"
					fontSize={{ base: '16px' }}
					color="gray.500"
					maxW="700px"
				>
					Explore Synthetix&apos;s governance system. Learn how decisions are
					made through our community-elected councils and proposals (SIPs and
					SCCPs) by visiting our documentation and joining the conversation on
					Discord.
				</Text>

				<Link
					href="https://docs.synthetix.io/dao/governance-framework"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button mt={{ base: '6' }}>Governance Docs</Button>
				</Link>
			</Flex>
		</Flex>
	);
}
