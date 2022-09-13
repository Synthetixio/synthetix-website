import Discord from '../svg/Discord';
import Twitter from '../svg/Twitter';
import Github from '../svg/Github';
import Link from 'next/link';
import { Flex } from '@chakra-ui/react';
const data = (fill?: string) => [
	{
		link: 'https://discord.com/invite/AEdUHzt',
		label: 'discord',
		image: <Discord fill={fill} />,
	},
	{
		link: 'https://twitter.com/synthetix_io',
		label: 'twitter',
		image: <Twitter fill={fill} />,
	},
	{
		link: 'https://github.com/synthetixio',
		label: 'github',
		image: <Github fill={fill} />,
	},
];
const Socials = ({
	className,
	fill,
}: {
	fill?: string;
	className?: string;
}) => {
	return (
		<Flex as="ul" className={className} alignItems="center" gap="4" mt="20">
			{data(fill).map(s => (
				<Link href={s.link} key={s.link} passHref>
					<a target="_blank" rel="noopener noreferrer">
						{s.image}
					</a>
				</Link>
			))}
		</Flex>
	);
};

export default Socials;
