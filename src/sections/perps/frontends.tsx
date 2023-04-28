import {
	Flex,
	Text,
	FlexProps,
	Heading,
	Button,
	Icon,
	Link,
	Image,
} from '@chakra-ui/react';

const Polynomial = (
	<Icon
		width="50"
		height="50"
		viewBox="0 0 50 50"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<mask
			id="mask0_4553_44636"
			maskUnits="userSpaceOnUse"
			x="6"
			y="6"
			width="40"
			height="39"
		>
			<path
				d="M6.17273 43.2969C6.17273 43.0234 6.38106 42.4766 6.79773 41.6562C7.20137 40.849 7.64408 39.8138 8.12585 38.5508C8.62065 37.2878 9.0894 35.9727 9.5321 34.6055C9.97481 33.2383 10.4241 31.7734 10.8798 30.2109L12.4032 25.0547L10.372 25.6016C9.86413 25.6016 9.44747 25.3346 9.12195 24.8008C9.04382 24.6576 9.00476 24.4883 9.00476 24.293C9.00476 24.0977 9.16101 23.8698 9.47351 23.6094C9.78601 23.3359 10.1702 23.082 10.6259 22.8477C11.5374 22.3789 12.4749 22.0208 13.4384 21.7734L13.6142 21.2266C13.9657 20.1328 14.2978 19 14.6103 17.8281C14.9358 16.6432 15.2743 15.4909 15.6259 14.3711C15.9905 13.2513 16.4006 12.1901 16.8564 11.1875C17.3121 10.1719 17.8459 9.28646 18.4579 8.53125C19.8121 6.89062 21.5113 6.07031 23.5556 6.07031C25.066 6.07031 26.2639 6.47396 27.1493 7.28125C28.0347 8.08854 28.4775 9.18229 28.4775 10.5625C28.4775 11.9948 28.0673 13.2383 27.247 14.293C26.5569 15.1654 25.7887 15.6016 24.9423 15.6016C23.8876 15.6016 23.1715 15.1198 22.7939 14.1562C22.6897 13.9089 22.6376 13.7005 22.6376 13.5312C22.6376 13.2448 22.8329 12.9844 23.2235 12.75C23.9397 12.2031 24.441 11.474 24.7275 10.5625C24.8186 10.276 24.8642 9.99609 24.8642 9.72266C24.8642 8.65495 24.4475 8.12109 23.6142 8.12109C22.4683 8.12109 21.4137 9.41667 20.4501 12.0078C20.1637 12.8021 19.8772 13.6745 19.5907 14.625L17.7548 20.8555C18.9397 20.6732 19.7991 20.582 20.3329 20.582C20.8798 20.582 21.3616 20.6471 21.7782 20.7773C22.1949 20.8945 22.5725 21.0638 22.911 21.2852C23.6793 21.793 24.0634 22.418 24.0634 23.1602C24.0634 23.9023 23.6988 24.2734 22.9696 24.2734L20.4892 24.1758C19.135 24.1758 17.885 24.2344 16.7392 24.3516L15.1376 30.0156C14.0829 33.8568 13.2235 36.6497 12.5595 38.3945C11.9084 40.1393 11.2704 41.6172 10.6454 42.8281C10.0595 43.9349 9.16752 44.4883 7.9696 44.4883C6.77169 44.4883 6.17273 44.0911 6.17273 43.2969ZM26.9618 38.5703C26.4019 38.974 25.9657 39.1758 25.6532 39.1758C25.3538 39.1758 25.0999 39.1302 24.8915 39.0391C24.6962 38.9609 24.5139 38.8568 24.3446 38.7266C23.954 38.401 23.7587 38.1081 23.7587 37.8477C23.7587 37.5742 23.9019 37.3268 24.1884 37.1055C24.1884 37.1055 24.5855 36.7865 25.3798 36.1484C27.5152 34.3906 29.2795 32.4831 30.6728 30.4258C29.54 27.2487 29.0191 24.6055 29.1103 22.4961C29.1624 21.4544 29.6116 20.556 30.4579 19.8008C31.2392 19.1237 32.0725 18.7852 32.9579 18.7852C33.2183 18.7852 33.3876 18.8763 33.4657 19.0586C33.5439 19.2409 33.5829 19.5078 33.5829 19.8594C33.5829 20.1979 33.5699 20.5625 33.5439 20.9531C33.5178 21.3307 33.5113 21.7344 33.5243 22.1641C33.5504 22.5807 33.5829 23.0365 33.622 23.5312C33.7522 24.8594 33.8759 25.8945 33.9931 26.6367L34.6376 25.5625C36.122 23.2057 37.8538 21.3372 39.8329 19.957C40.9527 19.1758 41.9163 18.7852 42.7235 18.7852C43.4527 18.7852 44.0191 18.8893 44.4228 19.0977C45.178 19.4883 45.4319 19.8854 45.1845 20.2891C45.1454 20.3542 45.0673 20.4062 44.9501 20.4453L44.4618 20.6797C42.4045 21.5781 39.7808 23.7786 36.5907 27.2812C35.9267 28.0104 35.3472 28.707 34.8525 29.3711L35.536 31.6562C36.3824 34.3906 37.385 35.7578 38.5439 35.7578C39.0517 35.7578 39.4683 35.6797 39.7939 35.5234L40.497 35.2109C40.6402 35.1458 40.7769 35.1133 40.9071 35.1133C41.1806 35.1133 41.3173 35.25 41.3173 35.5234C41.3173 36.6693 40.7314 37.6328 39.5595 38.4141C38.7782 38.9349 37.8928 39.1953 36.9032 39.1953C34.9892 39.1953 33.2574 37.2227 31.7079 33.2773C30.0673 35.6862 28.4853 37.4505 26.9618 38.5703Z"
				fill="black"
			/>
		</mask>
		<g mask="url(#mask0_4553_44636)">
			<path
				d="M47.7 25.0499C47.7 11.7122 36.8877 0.899902 23.55 0.899902C10.2123 0.899902 -0.599976 11.7122 -0.599976 25.0499C-0.599976 38.3876 10.2123 49.1999 23.55 49.1999C36.8877 49.1999 47.7 38.3876 47.7 25.0499Z"
				fill="url(#paint0_linear_4553_44636)"
			/>
			<g filter="url(#filter0_f_4553_44636)">
				<path
					d="M39.1 37.7C39.1 23.6167 27.6832 12.2 13.6 12.2C-0.483286 12.2 -11.9 23.6167 -11.9 37.7C-11.9 51.7833 -0.483286 63.2 13.6 63.2C27.6832 63.2 39.1 51.7833 39.1 37.7Z"
					fill="url(#paint1_linear_4553_44636)"
				/>
			</g>
			<g filter="url(#filter1_f_4553_44636)">
				<path
					d="M34.5 43.1999C34.5 28.3987 22.5013 16.3999 7.70003 16.3999C-7.10121 16.3999 -19.1 28.3987 -19.1 43.1999C-19.1 58.0011 -7.10121 69.9999 7.70003 69.9999C22.5013 69.9999 34.5 58.0011 34.5 43.1999Z"
					fill="#4870FF"
				/>
			</g>
		</g>
		<defs>
			<filter
				id="filter0_f_4553_44636"
				x="-15.9"
				y="8.20001"
				width="59"
				height="59"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur
					stdDeviation="2"
					result="effect1_foregroundBlur_4553_44636"
				/>
			</filter>
			<filter
				id="filter1_f_4553_44636"
				x="-23.1"
				y="12.3999"
				width="61.6"
				height="61.6"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="BackgroundImageFix"
					result="shape"
				/>
				<feGaussianBlur
					stdDeviation="2"
					result="effect1_foregroundBlur_4553_44636"
				/>
			</filter>
			<linearGradient
				id="paint0_linear_4553_44636"
				x1="49.8954"
				y1="49.1999"
				x2="-6.64419"
				y2="0.605468"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#D1A3FF" />
				<stop offset="1" stop-color="#FFE298" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_4553_44636"
				x1="41.547"
				y1="66.5909"
				x2="-20.3887"
				y2="12.0113"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#4870FF" />
				<stop offset="1" stop-color="#A4DEFF" />
			</linearGradient>
		</defs>
	</Icon>
);

const Kwenta = (
	<Icon
		width="50"
		height="50"
		viewBox="0 0 50 50"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M25.043 4.375L46.875 17.6339V30.8929L25.043 17.6339V4.375Z"
			fill="url(#paint0_linear_4553_44642)"
		/>
		<path
			d="M25.043 45.625L46.875 32.5001V19.375L25.043 32.5001V45.625Z"
			fill="url(#paint1_linear_4553_44642)"
		/>
		<path
			d="M25.043 4.375L3.75 17.6339V30.8929L25.043 17.6339V4.375Z"
			fill="url(#paint2_linear_4553_44642)"
		/>
		<path
			d="M25.043 45.625L3.75 32.5001V19.375L25.043 32.5001V45.625Z"
			fill="url(#paint3_linear_4553_44642)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_4553_44642"
				x1="65.4918"
				y1="17.5599"
				x2="11.6552"
				y2="17.5599"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#996939" />
				<stop offset="1" stop-color="#D0A875" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_4553_44642"
				x1="35.959"
				y1="45.625"
				x2="41.2641"
				y2="-4.58497"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#272728" />
				<stop offset="1" stop-color="#4B4B4B" />
			</linearGradient>
			<linearGradient
				id="paint2_linear_4553_44642"
				x1="25.1744"
				y1="9.81116"
				x2="3.739"
				y2="26.6007"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#996939" />
				<stop offset="1" stop-color="#D0A875" />
			</linearGradient>
			<linearGradient
				id="paint3_linear_4553_44642"
				x1="14.3965"
				y1="45.625"
				x2="14.3965"
				y2="19.375"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#363636" />
				<stop offset="1" stop-color="#333232" />
			</linearGradient>
		</defs>
	</Icon>
);

const dHedge = (
	<Icon
		width="50"
		height="45"
		viewBox="0 0 50 45"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M28.6413 5.42572L21.5399 8.5326V38.9356L28.6413 35.6068V5.42572ZM40.625 21.8819L33.9674 18.7409V38.0114L40.625 41.3767V21.8819ZM10 27.1739L17.1014 24.067V40.9329L10 44.2617V27.1739Z"
			fill="#00A2D2"
		/>
	</Icon>
);

const Conduit = (
	<Icon
		width="50"
		height="50"
		viewBox="0 0 50 50"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M43.4287 15.2232C42.0408 12.5759 39.1213 9.77287 36.022 8.11229C33.1312 6.56262 32.3879 6.39077 28.0462 6.26478C21.8182 6.08435 18.0491 7.53829 14.219 11.5982C12.3468 13.5828 12.8437 13.599 15.5454 11.6421C21.9337 7.01417 31.9635 7.81245 37.9113 13.4221L39.8294 15.2313L35.8587 17.6277L34.4653 15.9374C33.6987 15.007 31.6778 13.5501 29.9744 12.6989C22.804 9.1157 14.3369 12.0246 10.7018 19.319C9.15818 22.4168 8.93493 27.267 10.1716 30.8421C12.064 36.3136 17.6343 41.1497 23.4697 42.3884C26.6634 43.0662 31.5372 42.7966 33.0264 41.8598C33.6246 41.4833 33.3051 41.4238 31.826 41.637C30.7173 41.7962 28.5709 41.6889 27.056 41.3986C15.2481 39.1328 8.55289 26.3704 15.0425 18.4975C19.8437 12.6727 29.1862 13.1953 33.0113 19.5019C33.7451 20.7124 34.5328 21.7098 34.7606 21.7183C34.9889 21.7274 37.1861 20.5617 39.643 19.129C44.0774 16.5426 44.1051 16.5134 43.4287 15.2232ZM20.4399 22.699C21.3073 19.8058 22.9396 18.2012 25.7956 17.4346L28.2982 16.7629L25.7784 16.7608C21.6379 16.7573 19.6492 17.9356 17.8525 21.4558C15.8337 25.4114 17.3708 31.6882 21.3269 35.6444C25.2583 39.5753 32.0885 40.8095 37.1962 38.5114C39.5512 37.4521 43.6772 33.7006 43.6595 32.6347C43.6545 32.3217 41.6225 30.898 39.145 29.4708L34.6396 26.8764L33.3328 28.5894C31.6975 30.7332 29.66 31.8087 27.1895 31.8314C25.2754 31.8495 25.2749 31.85 26.5344 32.5697C28.4152 33.6446 32.0311 33.504 34.0434 32.2774C35.7161 31.2573 35.7977 31.2543 37.4487 32.1433C38.3785 32.6443 39.0634 33.2833 38.9702 33.5635C38.7122 34.3376 35.7972 35.9059 33.6972 36.4008C25.9235 38.2312 18.1837 30.2313 20.4399 22.699Z"
			fill="white"
		/>
	</Icon>
);

const Synthetix = (
	<Icon
		width="52"
		height="45"
		viewBox="0 0 52 45"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M25.4333 22.7171L25.9421 22.2956L26.4508 21.8596L26.5671 22.5136L26.6833 23.1677L26.0583 22.9497L25.4333 22.7171Z"
			stroke="url(#paint0_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M25.3894 22.7042L25.9563 22.2681L26.5086 21.8321L26.6103 22.5298L26.7121 23.242L26.0435 22.9803L25.3894 22.7042Z"
			stroke="url(#paint1_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M25.3311 22.6911L25.9561 22.2406L26.5811 21.79L26.6537 22.5458L26.7409 23.3161L26.0433 23.0109L25.3311 22.6911Z"
			stroke="url(#paint2_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M25.2871 22.6775L25.9702 22.2124L26.6534 21.7473L26.7115 22.5757L26.7697 23.3897L26.0284 23.0409L25.2871 22.6775Z"
			stroke="url(#paint3_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M25.2297 22.6501L25.9856 22.185L26.7414 21.7054L26.7704 22.592L26.7995 23.4786L26.0146 23.0717L25.2297 22.6501Z"
			stroke="url(#paint4_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M25.1711 22.6074L25.9996 22.1278L26.8281 21.6627V22.6074V23.5667L25.9996 23.0871L25.1711 22.6074Z"
			stroke="url(#paint5_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M25.1125 22.58L26.0137 22.1004L26.9294 21.6207L26.8858 22.6382L26.8567 23.6701L25.9846 23.1324L25.1125 22.58Z"
			stroke="url(#paint6_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M25.0408 22.5518L26.0437 22.0577L27.032 21.578L26.9594 22.6827L26.8722 23.7873L25.9565 23.1623L25.0408 22.5518Z"
			stroke="url(#paint7_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.9819 22.5099L26.0575 22.0303L27.1476 21.5361L27.0168 22.7279L26.9005 23.9053L25.9412 23.2076L24.9819 22.5099Z"
			stroke="url(#paint8_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.9099 22.4649L26.0872 21.9852L27.2791 21.5056L27.0901 22.7701L26.9157 24.0346L25.9128 23.2497L24.9099 22.4649Z"
			stroke="url(#paint9_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.8379 22.4136L26.117 21.9485L27.4106 21.4834L27.178 22.8206L26.9309 24.1724L25.8844 23.3003L24.8379 22.4136Z"
			stroke="url(#paint10_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.7498 22.3541L26.1596 21.9035L27.555 21.4384L27.2498 22.8919L26.9445 24.3309L25.8399 23.3425L24.7498 22.3541Z"
			stroke="url(#paint11_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.6633 22.2815L26.1895 21.8454L27.7157 21.4094L27.3377 22.9501L26.9453 24.4908L25.8116 23.3861L24.6633 22.2815Z"
			stroke="url(#paint12_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.5754 22.2088L26.2324 21.8019L27.8894 21.3949L27.4243 23.0228L26.9446 24.6652L25.7673 23.4443L24.5754 22.2088Z"
			stroke="url(#paint13_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.4893 22.137L26.2916 21.7445L28.0794 21.3666L27.5125 23.1108L26.9457 24.855L25.7247 23.4887L24.4893 22.137Z"
			stroke="url(#paint14_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.4009 22.0337L26.334 21.6994L28.2817 21.3505L27.5986 23.211L26.9299 25.0569L25.6654 23.5453L24.4009 22.0337Z"
			stroke="url(#paint15_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.2983 21.9245L26.3914 21.6338L28.4989 21.3286L27.6995 23.3053L26.9146 25.2675L25.6065 23.596L24.2983 21.9245Z"
			stroke="url(#paint16_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.1982 21.8082L26.4657 21.5756L28.7331 21.3286L27.8029 23.4216L26.8727 25.5001L25.5355 23.6541L24.1982 21.8082Z"
			stroke="url(#paint17_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.0959 21.6848L26.5378 21.5249L28.9797 21.3505L27.9041 23.5453L26.8285 25.7546L25.4622 23.7197L24.0959 21.6848Z"
			stroke="url(#paint18_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.9807 21.5556L26.6261 21.4538L29.2569 21.3666L28.0214 23.6922L26.7859 26.0178L25.3906 23.7794L23.9807 21.5556Z"
			stroke="url(#paint19_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.8772 21.3949H26.7115H29.5458L28.1214 23.8513L26.7115 26.3077L25.2871 23.8513L23.8772 21.3949Z"
			stroke="url(#paint20_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.761 21.2171L26.8133 21.3334L29.8511 21.4351L28.2377 24.0223L26.6244 26.595L25.1999 23.9061L23.761 21.2171Z"
			stroke="url(#paint21_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.6453 21.0287L26.9156 21.2612L30.186 21.4938L28.3546 24.2118L26.5232 26.9298L25.0842 23.9793L23.6453 21.0287Z"
			stroke="url(#paint22_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.5291 20.8195L27.032 21.1829L30.5494 21.5608L28.4709 24.4096L26.407 27.2585L24.968 24.0463L23.5291 20.8195Z"
			stroke="url(#paint23_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.4124 20.5976L27.1624 21.1354L30.9269 21.6586L28.5868 24.6383L26.2612 27.6325L24.8368 24.115L23.4124 20.5976Z"
			stroke="url(#paint24_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.2961 20.352L27.3078 21.0642L31.3194 21.7764L28.7031 24.9014L26.0868 28.0119L24.6915 24.1892L23.2961 20.352Z"
			stroke="url(#paint25_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.1802 20.0871L27.468 21.0028L31.7558 21.904L28.8197 25.1598L25.8982 28.4156L24.5319 24.2586L23.1802 20.0871Z"
			stroke="url(#paint26_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.0632 19.8002L27.6417 20.934L32.2057 22.0677L28.9353 25.4688L25.665 28.8555L24.3714 24.3206L23.0632 19.8002Z"
			stroke="url(#paint27_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.9607 19.4684L27.8299 20.8638L32.6991 22.2591L29.0508 25.7766L25.4026 29.294L24.1816 24.3812L22.9607 19.4684Z"
			stroke="url(#paint28_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.8445 19.1144L28.0189 20.8005L33.2079 22.4865L29.1526 26.1348L25.1119 29.783L23.9782 24.4487L22.8445 19.1144Z"
			stroke="url(#paint29_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.7444 18.7376L28.2531 20.7434L33.7473 22.7492L29.2705 26.5138L24.7793 30.2783L23.7618 24.508L22.7444 18.7376Z"
			stroke="url(#paint30_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.6431 18.321L28.4861 20.6756L34.3291 23.0448L29.3582 26.9111L24.4018 30.7919L23.5297 24.5564L22.6431 18.321Z"
			stroke="url(#paint31_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.5552 17.8748L28.747 20.6364L34.9244 23.3835L29.4447 27.3661L23.9796 31.3486L23.2674 24.619L22.5552 17.8748Z"
			stroke="url(#paint32_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.4832 17.391L29.0238 20.5887L35.5645 23.7718L29.5326 27.8561L23.5006 31.9259L22.9919 24.6584L22.4832 17.391Z"
			stroke="url(#paint33_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.4111 16.8766L29.3297 20.554L36.2338 24.2313L29.5914 28.3883L22.9635 32.5307L22.6873 24.711L22.4111 16.8766Z"
			stroke="url(#paint34_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.3672 16.3229L29.6492 20.5235L36.9457 24.7386L29.6492 28.9392L22.3672 33.1543V24.7386V16.3229Z"
			stroke="url(#paint35_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.322 15.7042L29.9964 20.5007L37.6709 25.2972L29.6912 29.5414L21.697 33.8001L22.0023 24.7449L22.322 15.7042Z"
			stroke="url(#paint36_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.309 15.0617L30.3759 20.4978L38.4427 25.9483L29.7073 30.2071L20.9573 34.4803L21.6259 24.771L22.309 15.0617Z"
			stroke="url(#paint37_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.322 14.3531L30.7813 20.5013L39.2551 26.6496L29.6912 30.9083L20.1272 35.167L21.2173 24.7601L22.322 14.3531Z"
			stroke="url(#paint38_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.3513 13.5999L31.2176 20.5185L40.0839 27.4517L29.6478 31.6668L19.2263 35.8819L20.7816 24.7336L22.3513 13.5999Z"
			stroke="url(#paint39_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.4245 12.7806L31.6832 20.5567L40.9564 28.3329L29.5902 32.4754L18.2239 36.6178L20.3169 24.6992L22.4245 12.7806Z"
			stroke="url(#paint40_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.5262 11.9169L32.1919 20.6233L41.8576 29.3297L29.4885 33.3559L17.1047 37.3675L19.8228 24.6495L22.5262 11.9169Z"
			stroke="url(#paint41_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.6562 10.9876L32.7288 20.7114L42.787 30.4353L29.3422 34.287L15.8975 38.1387L19.2841 24.5632L22.6562 10.9876Z"
			stroke="url(#paint42_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M22.8457 9.99127L33.2962 20.8198L43.7468 31.6337L29.1538 35.2674L14.5608 38.9157L18.7032 24.4535L22.8457 9.99127Z"
			stroke="url(#paint43_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.0935 8.93073L33.922 20.9511L44.7359 32.9714L28.922 36.3435L13.0935 39.7011L18.0935 24.3232L23.0935 8.93073Z"
			stroke="url(#paint44_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.3839 7.79932L34.5612 21.1278L45.7531 34.4563L28.6165 37.4795L11.4944 40.4883L17.4392 24.1511L23.3839 7.79932Z"
			stroke="url(#paint45_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M23.747 6.60443L35.2586 21.3428L46.7848 36.0812L28.2528 38.6829L9.73535 41.2847L16.7412 23.9446L23.747 6.60443Z"
			stroke="url(#paint46_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.1839 5.33575L36.0008 21.6003L47.8176 37.8648L27.8176 39.9724L7.81763 42.0799L16.0008 23.7078L24.1839 5.33575Z"
			stroke="url(#paint47_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M24.6923 3.96771L36.7853 21.9037L48.8783 39.8253L27.3085 41.3369L5.73877 42.8485L15.2155 23.4008L24.6923 3.96771Z"
			stroke="url(#paint48_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M25.302 2.52814L37.613 22.252L49.9386 41.9613L26.6973 42.7752L3.45605 43.5892L14.3863 23.0514L25.302 2.52814Z"
			stroke="url(#paint49_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<path
			d="M26 1L38.5 22.657L51 44.3139H26H1L13.5 22.657L26 1Z"
			stroke="url(#paint50_linear_4553_44667)"
			stroke-width="0.5"
			stroke-miterlimit="10"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_4553_44667"
				x1="25.4333"
				y1="22.5136"
				x2="26.6833"
				y2="22.5136"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint1_linear_4553_44667"
				x1="25.3894"
				y1="22.537"
				x2="26.7121"
				y2="22.537"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint2_linear_4553_44667"
				x1="25.3311"
				y1="22.5531"
				x2="26.7409"
				y2="22.5531"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint3_linear_4553_44667"
				x1="25.2871"
				y1="22.5685"
				x2="26.7697"
				y2="22.5685"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint4_linear_4553_44667"
				x1="25.2297"
				y1="22.592"
				x2="26.7995"
				y2="22.592"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint5_linear_4553_44667"
				x1="25.1711"
				y1="22.6147"
				x2="26.8281"
				y2="22.6147"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint6_linear_4553_44667"
				x1="25.1125"
				y1="22.6454"
				x2="26.9294"
				y2="22.6454"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint7_linear_4553_44667"
				x1="25.0408"
				y1="22.6827"
				x2="27.032"
				y2="22.6827"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint8_linear_4553_44667"
				x1="24.9819"
				y1="22.7207"
				x2="27.1476"
				y2="22.7207"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint9_linear_4553_44667"
				x1="24.9099"
				y1="22.7701"
				x2="27.2791"
				y2="22.7701"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint10_linear_4553_44667"
				x1="24.8379"
				y1="22.8279"
				x2="27.4106"
				y2="22.8279"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint11_linear_4553_44667"
				x1="24.7498"
				y1="22.8846"
				x2="27.555"
				y2="22.8846"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint12_linear_4553_44667"
				x1="24.6633"
				y1="22.9501"
				x2="27.7157"
				y2="22.9501"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint13_linear_4553_44667"
				x1="24.5754"
				y1="23.0301"
				x2="27.8894"
				y2="23.0301"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint14_linear_4553_44667"
				x1="24.4893"
				y1="23.1108"
				x2="28.0794"
				y2="23.1108"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint15_linear_4553_44667"
				x1="24.4009"
				y1="23.2037"
				x2="28.2817"
				y2="23.2037"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint16_linear_4553_44667"
				x1="24.2983"
				y1="23.298"
				x2="28.4989"
				y2="23.298"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint17_linear_4553_44667"
				x1="24.1982"
				y1="23.4143"
				x2="28.7331"
				y2="23.4143"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint18_linear_4553_44667"
				x1="24.0959"
				y1="23.5526"
				x2="28.9797"
				y2="23.5526"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint19_linear_4553_44667"
				x1="23.9807"
				y1="23.6922"
				x2="29.2569"
				y2="23.6922"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint20_linear_4553_44667"
				x1="23.8772"
				y1="23.8513"
				x2="29.5458"
				y2="23.8513"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint21_linear_4553_44667"
				x1="23.761"
				y1="23.9061"
				x2="29.8511"
				y2="23.9061"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint22_linear_4553_44667"
				x1="23.6453"
				y1="23.9793"
				x2="30.186"
				y2="23.9793"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint23_linear_4553_44667"
				x1="23.5291"
				y1="24.039"
				x2="30.5494"
				y2="24.039"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint24_linear_4553_44667"
				x1="23.4124"
				y1="24.115"
				x2="30.9269"
				y2="24.115"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint25_linear_4553_44667"
				x1="23.2961"
				y1="24.1819"
				x2="31.3194"
				y2="24.1819"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint26_linear_4553_44667"
				x1="23.1802"
				y1="24.2513"
				x2="31.7558"
				y2="24.2513"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint27_linear_4553_44667"
				x1="23.0632"
				y1="24.3278"
				x2="32.2057"
				y2="24.3278"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint28_linear_4553_44667"
				x1="22.9607"
				y1="24.3812"
				x2="32.6991"
				y2="24.3812"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint29_linear_4553_44667"
				x1="22.8445"
				y1="24.4487"
				x2="33.2079"
				y2="24.4487"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint30_linear_4553_44667"
				x1="22.7444"
				y1="24.508"
				x2="33.7473"
				y2="24.508"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint31_linear_4553_44667"
				x1="22.6431"
				y1="24.5564"
				x2="34.3291"
				y2="24.5564"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint32_linear_4553_44667"
				x1="22.5552"
				y1="24.6117"
				x2="34.9244"
				y2="24.6117"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint33_linear_4553_44667"
				x1="22.4832"
				y1="24.6584"
				x2="35.5645"
				y2="24.6584"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint34_linear_4553_44667"
				x1="22.4111"
				y1="24.7037"
				x2="36.2338"
				y2="24.7037"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint35_linear_4553_44667"
				x1="22.3672"
				y1="24.7386"
				x2="36.9457"
				y2="24.7386"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint36_linear_4553_44667"
				x1="21.697"
				y1="24.7521"
				x2="37.6709"
				y2="24.7521"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint37_linear_4553_44667"
				x1="20.9573"
				y1="24.771"
				x2="38.4427"
				y2="24.771"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint38_linear_4553_44667"
				x1="20.1272"
				y1="24.7601"
				x2="39.2551"
				y2="24.7601"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint39_linear_4553_44667"
				x1="19.2263"
				y1="24.7409"
				x2="40.0839"
				y2="24.7409"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint40_linear_4553_44667"
				x1="18.2239"
				y1="24.6992"
				x2="40.9564"
				y2="24.6992"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint41_linear_4553_44667"
				x1="17.1047"
				y1="24.6422"
				x2="41.8576"
				y2="24.6422"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint42_linear_4553_44667"
				x1="15.8975"
				y1="24.5632"
				x2="42.787"
				y2="24.5632"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint43_linear_4553_44667"
				x1="14.5608"
				y1="24.4535"
				x2="43.7468"
				y2="24.4535"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint44_linear_4553_44667"
				x1="13.0935"
				y1="24.3159"
				x2="44.7359"
				y2="24.3159"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint45_linear_4553_44667"
				x1="11.4944"
				y1="24.1438"
				x2="45.7531"
				y2="24.1438"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint46_linear_4553_44667"
				x1="9.73535"
				y1="23.9446"
				x2="46.7848"
				y2="23.9446"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint47_linear_4553_44667"
				x1="7.81763"
				y1="23.7078"
				x2="47.8176"
				y2="23.7078"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint48_linear_4553_44667"
				x1="5.73877"
				y1="23.4081"
				x2="48.8783"
				y2="23.4081"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint49_linear_4553_44667"
				x1="3.45605"
				y1="23.0587"
				x2="49.9386"
				y2="23.0587"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
			<linearGradient
				id="paint50_linear_4553_44667"
				x1="1"
				y1="22.657"
				x2="51"
				y2="22.657"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ED1EFF" />
				<stop offset="1" stop-color="#00D1FF" />
			</linearGradient>
		</defs>
	</Icon>
);

const FrontendCards = [
	{
		logo: Polynomial,
		name: 'Polynomial',
		description:
			'Polynomial is a DeFi derivatives powerhouse that offers derivatives-based products built on top of Synthetix such as perps, power perps, and vaults. It is a one-stop solution built on top of Polynomial smart contract wallets.',
		link: 'https://www.polynomial.fi/',
	},
	{
		logo: Kwenta,
		name: 'Kwenta',
		description:
			'Kwenta is a decentralized derivatives trading platform offering perpetual futures and options trading on Optimism. Gain exposure to a variety of crypto and real-world assets, and advanced tooling through Kwenta Smart Margin.',
		link: 'https://kwenta.io/',
	},
	{
		logo: <Image src="/decentrex.png" w="50px" h="50px" />,
		name: 'Decentrex',
		description:
			'Decentrex is a decentralized perpetual futures exchange and leverage aggregator. On Decentrex, users have access to deep liquidity and lightning fast trades, thanks to the powerful infrastructure provided by Synthetix and Optimism.',
		link: 'https://kwenta.io/',
	},
	{
		logo: dHedge,
		name: 'dHedge',
		description:
			'dHEDGE is a decentralized asset management protocol. It empowers users to access high-performing vaults managed by skilled asset managers. Asset managers can utilize sophisticated DeFi instruments like Kwenta perpetual futures and Lyra options to generate returns.',
		link: 'https://www.dhedge.org/',
	},
	{
		logo: Conduit,
		name: 'Conduit',
		description:
			'Conduit is a community-centric, perpetual trading platform that provides a high performing, modular user experience. It introduces novel features that are intuitive to users, with Synthetix as the backbone. Your gateway to crypto trading.',
		link: 'https://alpha.conduit.lol/',
	},
	{
		logo: Synthetix,
		name: 'Synthetix',
		description: [
			'Learn more about how to integrate Perps and other Synthetix markets in our developer documentation and reach out to the developers at ',
			'perps@snxdao.io.',
		],
		link: 'https://discord.com/invite/AEdUHzt',
	},
];

const FrontEnds = ({ ...props }: FlexProps) => {
	return (
		<Flex
			maxW={{
				base: '100vw',
				md: '48rem',
				lg: '62rem',
				xl: '80rem',
				'2xl': '96rem',
			}}
			pt="48px"
			flexDirection="column"
			alignItems="center"
			position="relative"
			width="100%"
			{...props}
		>
			<Heading mb="16px" w="100%" fontSize="48px">
				Integrators
			</Heading>
			<Text color="gray.500" w="100%">
				Multiple front ends have chosen to integrate Synthetix’ composable and
				permissionless smart contracts
			</Text>
			<Flex w="100%" justifyContent="center" flexWrap="wrap">
				{FrontendCards.map(card => (
					<FrontendCard {...card} key={card.name} />
				))}
			</Flex>
		</Flex>
	);
};

function FrontendCard({
	logo,
	name,
	description,
	link,
}: {
	logo: JSX.Element;
	name: string;
	description: string | string[];
	link: string;
}) {
	return (
		<Flex
			flexDir="column"
			alignItems="flex-start"
			w={{ base: '100%', md: '480px' }}
			h={{ base: '100%', md: '326px' }}
			bg="navy.900"
			borderWidth="1px"
			borderStyle="solid"
			borderRadius="base"
			borderColor="gray.900"
			m="12px"
			p="24px"
		>
			{logo}
			<Heading>{name}</Heading>
			<Text mb="auto">
				{Array.isArray(description) ? (
					<>
						{description[0]}{' '}
						<Link href="mailto: perps@snxdao.io" color="cyan.500">
							perps@snxdao.io
						</Link>
					</>
				) : (
					description
				)}
			</Text>
			<Button
				variant={name !== 'Synthetix' ? 'outline' : 'solid'}
				onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
			>
				{name !== 'Synthetix' ? `Visit ${name}` : 'Integrate with Synthetix'}
			</Button>
		</Flex>
	);
}

export default FrontEnds;
