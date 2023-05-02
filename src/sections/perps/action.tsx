import { Button, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';

export default function Action() {
	return (
		<Flex
			maxW={{
				base: '100vw',
				md: '48rem',
				lg: '62rem',
				xl: '80rem',
				'2xl': '96rem',
			}}
			w="100%"
			h="292px"
			borderWidth="1px"
			borderStyle="solid"
			borderColor="gray.900"
			position="relative"
			borderRadius="base"
			m="24px 0px 68px"
			bg="navy.900"
		>
			<Flex flexDir="column" p={{ md: '42px 16px' }} maxW="800px" w="100%">
				<Heading fontSize={{ lg: '36px' }}>
					Want to integrate Synthetix Perps <br /> with your Platform?
				</Heading>
				<Text mt="16px" color="gray.500" fontSize={{ lg: '16px' }}>
					Learn more about how to integrate Perps and other Synthetix markets in
					our developer documentation and reach out to the developers at&nbsp;
					<Link href="mailto: perps@snxdao.io" color="cyan.500">
						perps@snxdao.io.
					</Link>
				</Text>
				<Button
					size="md"
					maxW="180px"
					mt="24px"
					onClick={() =>
						window.open(
							'https://discord.com/invite/AEdUHzt',
							'_blank',
							'noopener noreferrer',
						)
					}
				>
					Integrate with Synthetix
				</Button>
			</Flex>
			<Ornament />
		</Flex>
	);
}

function Ornament() {
	return (
		<Icon
			width="526"
			height="292"
			viewBox="0 0 526 292"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			position={{ md: 'absolute' }}
			right="0"
		>
			<mask
				id="mask0_4390_47611"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="526"
				height="292"
			>
				<rect x="0.700012" width="525.3" height="292" rx="5" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_4390_47611)">
				<path
					d="M349.301 136.702L353.121 131.132L356.902 125.417L359.716 131.637L362.529 137.857L355.934 137.352L349.301 136.702Z"
					stroke="url(#paint0_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M348.843 136.689L353.186 130.819L357.388 124.987L360.174 131.681L362.998 138.52L355.869 137.697L348.843 136.689Z"
					stroke="url(#paint1_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M348.249 136.716L353.115 130.544L357.982 124.373L360.637 131.725L363.471 139.184L355.949 138.003L348.249 136.716Z"
					stroke="url(#paint2_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M347.789 136.697L353.179 130.225L358.569 123.753L361.273 131.87L363.938 139.842L355.883 138.342L347.789 136.697Z"
					stroke="url(#paint3_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M347.163 136.577L353.254 129.911L359.308 123.099L361.881 131.875L364.454 140.65L355.827 138.686L347.163 136.577Z"
					stroke="url(#paint4_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M346.491 136.306L353.246 129.3L360.039 122.439L362.482 131.872L364.963 141.451L355.727 138.878L346.491 136.306Z"
					stroke="url(#paint5_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M345.851 136.192L353.308 128.992L360.904 121.752L363.114 132.028L365.502 142.41L355.696 139.374L345.851 136.192Z"
					stroke="url(#paint6_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M345.089 136.098L353.49 128.481L361.788 121.047L363.943 132.271L365.958 143.535L355.505 139.744L345.089 136.098Z"
					stroke="url(#paint7_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M344.411 135.84L353.551 128.173L362.793 120.322L364.613 132.572L366.535 144.639L355.473 140.239L344.411 135.84Z"
					stroke="url(#paint8_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M343.601 135.582L353.723 127.642L363.985 119.664L365.431 132.796L367.018 145.889L355.31 140.735L343.601 135.582Z"
					stroke="url(#paint9_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M342.772 135.263L353.913 127.197L365.194 119.092L366.408 133.066L367.519 147.224L355.164 141.316L342.772 135.263Z"
					stroke="url(#paint10_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M341.765 134.906L354.206 126.635L366.469 118.257L367.282 133.587L368.058 148.772L354.841 141.858L341.765 134.906Z"
					stroke="url(#paint11_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M340.743 134.412L354.344 125.975L367.944 117.538L368.281 133.933L368.478 150.367L354.681 142.37L340.743 134.412Z"
					stroke="url(#paint12_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M339.707 133.92L354.646 125.423L369.584 116.926L369.305 134.425L368.923 152.108L354.404 143.067L339.707 133.92Z"
					stroke="url(#paint13_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M338.692 133.434L355.071 124.694L371.347 116.137L370.387 135.069L369.426 154.002L354.111 143.626L338.692 133.434Z"
					stroke="url(#paint14_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M337.573 132.639L355.364 124.129L373.259 115.435L371.477 135.839L369.798 156.06L353.685 144.349L337.573 132.639Z"
					stroke="url(#paint15_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M336.301 131.823L355.748 123.321L375.298 114.634L372.694 136.511L370.194 158.203L353.247 145.013L336.301 131.823Z"
					stroke="url(#paint16_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M335.034 130.93L356.315 122.541L377.558 114.008L373.993 137.395L370.39 160.638L352.712 145.784L335.034 130.93Z"
					stroke="url(#paint17_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M333.73 129.971L356.882 121.842L379.996 113.567L375.292 138.359L370.625 163.297L352.177 146.634L333.73 129.971Z"
					stroke="url(#paint18_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M332.279 128.99L357.545 120.897L382.708 112.987L376.799 139.514L370.889 166.04L351.635 147.423L332.279 128.99Z"
					stroke="url(#paint19_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M330.868 127.659L358.221 120.076L385.574 112.493L378.179 140.831L370.925 169.13L350.826 148.414L330.868 127.659Z"
					stroke="url(#paint20_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M329.283 126.198L359.04 119.192L388.62 112.081L379.74 142.231L370.822 172.235L350.123 149.197L329.283 126.198Z"
					stroke="url(#paint21_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M327.683 124.623L359.845 118.196L392.007 111.768L381.362 143.807L370.716 175.847L349.2 150.235L327.683 124.623Z"
					stroke="url(#paint22_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M326.017 122.85L360.761 117.106L395.684 111.469L382.992 145.475L370.44 179.443L348.247 151.219L326.017 122.85Z"
					stroke="url(#paint23_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M324.321 120.944L361.902 116.281L399.585 111.434L384.706 147.446L370.006 183.565L347.163 152.255L324.321 120.944Z"
					stroke="url(#paint24_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M322.559 118.804L363.115 115.182L403.672 111.561L386.504 149.764L369.299 187.821L345.948 153.385L322.559 118.804Z"
					stroke="url(#paint25_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M320.759 116.469L364.506 114.14L408.216 111.667L388.301 152.031L368.526 192.357L344.591 154.505L320.759 116.469Z"
					stroke="url(#paint26_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M318.89 113.917L366.007 112.987L412.983 112.097L390.217 154.807L367.414 197.372L343.203 155.552L318.89 113.917Z"
					stroke="url(#paint27_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M317.042 110.878L367.64 111.783L418.239 112.688L392.127 157.57L366.015 202.453L341.528 156.665L317.042 110.878Z"
					stroke="url(#paint28_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M315.006 107.654L369.302 110.646L423.739 113.598L394.037 160.875L364.476 208.114L339.741 157.884L315.006 107.654Z"
					stroke="url(#paint29_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M313.061 104.16L371.41 109.449L429.618 114.778L396.15 164.344L362.541 213.949L337.801 159.054L313.061 104.16Z"
					stroke="url(#paint30_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M311.008 100.27L373.486 108.149L436.001 116.172L398.026 168.076L360.229 220.087L335.689 160.159L311.008 100.27Z"
					stroke="url(#paint31_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M309.006 96.0494L375.902 107.058L442.62 117.961L400.037 172.387L357.593 226.775L333.318 161.485L309.006 96.0494Z"
					stroke="url(#paint32_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M307.057 91.4115L378.447 105.841L449.799 120.125L402.149 177.045L354.461 233.82L330.759 162.616L307.057 91.4115Z"
					stroke="url(#paint33_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M305.035 86.4695L381.312 104.677L457.449 122.924L404.095 182.203L350.844 241.298L327.958 163.956L305.035 86.4695Z"
					stroke="url(#paint34_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M303.179 81.0588L384.317 103.519L465.632 126.085L406.078 187.55L346.703 249.12L324.941 165.09L303.179 81.0588Z"
					stroke="url(#paint35_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M301.145 74.999L387.611 102.359L474.077 129.72L408.043 193.447L341.907 257.359L321.437 166.126L301.145 74.999Z"
					stroke="url(#paint36_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M299.354 68.622L391.26 101.318L483.204 134.16L409.915 200.054L336.522 266.133L317.868 167.397L299.354 68.622Z"
					stroke="url(#paint37_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M297.646 61.5101L395.181 100.268L492.857 138.987L411.572 207.098L330.287 275.209L313.896 168.379L297.646 61.5101Z"
					stroke="url(#paint38_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M295.986 53.9104L399.442 99.2711L502.934 144.777L413.12 214.786L323.447 284.757L309.628 169.28L295.986 53.9104Z"
					stroke="url(#paint39_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M294.569 45.5347L404.029 98.4083L513.63 151.243L414.65 223.015L315.671 294.788L305.05 170.181L294.569 45.5347Z"
					stroke="url(#paint40_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M293.318 36.6396L409.111 97.7126L524.904 158.786L415.946 232.08L306.809 305.269L300.153 171.007L293.318 36.6396Z"
					stroke="url(#paint41_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M292.171 27.0114L414.523 97.1547L536.734 167.337L416.945 241.768L297.155 316.198L294.733 171.585L292.171 27.0114Z"
					stroke="url(#paint42_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M291.421 16.5563L420.276 96.7184L549.093 176.735L417.659 252.061L286.262 327.532L288.841 172.044L291.421 16.5563Z"
					stroke="url(#paint43_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M291.074 5.30258L426.658 96.3544L562.102 187.445L418.208 263.425L274.137 339.299L282.624 172.373L291.074 5.30258Z"
					stroke="url(#paint44_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M290.953 -6.77039L433.286 96.4099L575.759 199.551L418.199 275.587L260.741 351.439L275.866 172.407L290.953 -6.77039Z"
					stroke="url(#paint45_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M291.363 -19.6719L440.568 96.6916L589.914 213.016L417.797 288.576L245.821 364.098L268.592 172.213L291.363 -19.6719Z"
					stroke="url(#paint46_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M292.296 -33.5096L448.394 97.276L604.491 228.062L416.929 302.615L229.368 377.168L260.832 171.829L292.296 -33.5096Z"
					stroke="url(#paint47_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M293.668 -48.5288L456.753 98.2079L619.8 244.8L415.548 317.602L211.296 390.405L252.463 170.866L293.668 -48.5288Z"
					stroke="url(#paint48_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M295.829 -64.5358L465.641 99.4686L635.555 263.289L413.368 333.598L191.182 403.906L243.557 169.593L295.829 -64.5358Z"
					stroke="url(#paint49_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
				<path
					d="M298.614 -81.6609L475.248 101.14L651.882 283.942L410.618 350.829L169.354 417.715L233.984 168.027L298.614 -81.6609Z"
					stroke="url(#paint50_linear_4390_47611)"
					strokeWidth="0.5"
					strokeMiterlimit="10"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_4390_47611"
					x1="348.775"
					y1="134.67"
					x2="360.892"
					y2="131.532"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_4390_47611"
					x1="348.411"
					y1="135.02"
					x2="361.232"
					y2="131.7"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint2_linear_4390_47611"
					x1="347.892"
					y1="135.337"
					x2="361.558"
					y2="131.798"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint3_linear_4390_47611"
					x1="347.507"
					y1="135.609"
					x2="361.878"
					y2="131.887"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint4_linear_4390_47611"
					x1="347.012"
					y1="135.997"
					x2="362.229"
					y2="132.056"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint5_linear_4390_47611"
					x1="346.51"
					y1="136.378"
					x2="362.572"
					y2="132.219"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint6_linear_4390_47611"
					x1="346.02"
					y1="136.845"
					x2="363.632"
					y2="132.284"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint7_linear_4390_47611"
					x1="345.427"
					y1="137.405"
					x2="364.73"
					y2="132.406"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint8_linear_4390_47611"
					x1="344.956"
					y1="137.944"
					x2="365.949"
					y2="132.507"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint9_linear_4390_47611"
					x1="344.391"
					y1="138.629"
					x2="367.356"
					y2="132.682"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint10_linear_4390_47611"
					x1="343.843"
					y1="139.399"
					x2="368.781"
					y2="132.941"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint11_linear_4390_47611"
					x1="343.137"
					y1="140.203"
					x2="370.329"
					y2="133.161"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint12_linear_4390_47611"
					x1="342.472"
					y1="141.088"
					x2="372.059"
					y2="133.426"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint13_linear_4390_47611"
					x1="341.831"
					y1="142.12"
					x2="373.954"
					y2="133.801"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint14_linear_4390_47611"
					x1="341.211"
					y1="143.158"
					x2="376.011"
					y2="134.146"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint15_linear_4390_47611"
					x1="340.599"
					y1="144.322"
					x2="378.217"
					y2="134.58"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint16_linear_4390_47611"
					x1="339.852"
					y1="145.538"
					x2="380.57"
					y2="134.993"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint17_linear_4390_47611"
					x1="339.187"
					y1="146.967"
					x2="383.145"
					y2="135.583"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint18_linear_4390_47611"
					x1="338.56"
					y1="148.62"
					x2="385.899"
					y2="136.361"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint19_linear_4390_47611"
					x1="337.804"
					y1="150.325"
					x2="388.947"
					y2="137.08"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint20_linear_4390_47611"
					x1="337.22"
					y1="152.186"
					x2="392.168"
					y2="137.956"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint21_linear_4390_47611"
					x1="336.236"
					y1="153.047"
					x2="395.27"
					y2="137.759"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint22_linear_4390_47611"
					x1="335.313"
					y1="154.085"
					x2="398.714"
					y2="137.666"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint23_linear_4390_47611"
					x1="334.342"
					y1="154.996"
					x2="402.392"
					y2="137.373"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint24_linear_4390_47611"
					x1="333.417"
					y1="156.066"
					x2="406.258"
					y2="137.202"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint25_linear_4390_47611"
					x1="332.463"
					y1="157.046"
					x2="410.235"
					y2="136.905"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint26_linear_4390_47611"
					x1="331.527"
					y1="158.049"
					x2="414.653"
					y2="136.521"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint27_linear_4390_47611"
					x1="330.598"
					y1="159.125"
					x2="419.219"
					y2="136.174"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint28_linear_4390_47611"
					x1="329.746"
					y1="159.932"
					x2="424.143"
					y2="135.485"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint29_linear_4390_47611"
					x1="328.8"
					y1="160.917"
					x2="429.256"
					y2="134.902"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint30_linear_4390_47611"
					x1="327.982"
					y1="161.777"
					x2="434.637"
					y2="134.156"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint31_linear_4390_47611"
					x1="327.133"
					y1="162.531"
					x2="440.409"
					y2="133.196"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint32_linear_4390_47611"
					x1="326.426"
					y1="163.318"
					x2="446.325"
					y2="132.267"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint33_linear_4390_47611"
					x1="325.849"
					y1="163.977"
					x2="452.652"
					y2="131.138"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint34_linear_4390_47611"
					x1="325.274"
					y1="164.622"
					x2="459.262"
					y2="129.923"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint35_linear_4390_47611"
					x1="324.941"
					y1="165.09"
					x2="466.255"
					y2="128.493"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint36_linear_4390_47611"
					x1="318.511"
					y1="167.015"
					x2="473.35"
					y2="126.915"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint37_linear_4390_47611"
					x1="311.415"
					y1="169.186"
					x2="480.908"
					y2="125.292"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint38_linear_4390_47611"
					x1="303.376"
					y1="171.296"
					x2="488.789"
					y2="123.278"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint39_linear_4390_47611"
					x1="294.638"
					y1="173.514"
					x2="496.817"
					y2="121.155"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint40_linear_4390_47611"
					x1="284.851"
					y1="175.78"
					x2="505.205"
					y2="118.714"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint41_linear_4390_47611"
					x1="273.904"
					y1="178.207"
					x2="513.842"
					y2="116.069"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint42_linear_4390_47611"
					x1="262.051"
					y1="180.646"
					x2="522.7"
					y2="113.145"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint43_linear_4390_47611"
					x1="248.864"
					y1="183.127"
					x2="531.774"
					y2="109.861"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint44_linear_4390_47611"
					x1="234.353"
					y1="185.678"
					x2="541.073"
					y2="106.245"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint45_linear_4390_47611"
					x1="218.476"
					y1="188.239"
					x2="550.558"
					y2="102.239"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint46_linear_4390_47611"
					x1="200.982"
					y1="190.957"
					x2="560.115"
					y2="97.9506"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint47_linear_4390_47611"
					x1="181.86"
					y1="193.723"
					x2="569.594"
					y2="93.31"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint48_linear_4390_47611"
					x1="161.026"
					y1="196.293"
					x2="579.192"
					y2="87.9986"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint49_linear_4390_47611"
					x1="138.093"
					y1="198.909"
					x2="588.663"
					y2="82.2229"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
				<linearGradient
					id="paint50_linear_4390_47611"
					x1="113.352"
					y1="201.471"
					x2="598.019"
					y2="75.9542"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#ED1EFF" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
			</defs>
		</Icon>
	);
}
