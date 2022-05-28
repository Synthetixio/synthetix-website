import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { ImArrowLeft } from 'react-icons/im';

const SideBarItem = function ({ props, label }: any) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const router = useRouter();
	useEffect(() => {
		const currentSlug = router.query.slug;

		// eslint-disable-next-line array-callback-return
		props.docs.map((doc: any) => {
			if (doc.slug.current === currentSlug) {
				setIsOpen(true);
			}
		});
	}, [props, router]);

	return (
		<IconContext.Provider value={{ color: '#ffffff', size: '15px' }}>
			<AccordionSection>
				<Wrap onClick={() => toggle()}>
					<h2 className={isOpen ? 'active' : ''}>{props.title}</h2>
					<span>{isOpen === true ? <FiChevronUp /> : <FiChevronDown />}</span>
				</Wrap>
				{isOpen === true ? (
					<Dropdown>
						{props.docs.map((doc: any, i: number) => (
							<li key={i}>
								<a
									href={`/${label}/${doc.slug.current}`}
									className={router.query.slug === doc.slug.current ? 'active' : ''}
								>
									{doc.title}
								</a>
							</li>
						))}
					</Dropdown>
				) : null}
			</AccordionSection>
		</IconContext.Provider>
	);
};

interface MenuProps {
	isOpen?: boolean;
	isHeader?: boolean;
	navDocs: any;
}

const SubMenu = ({ navDocs }: MenuProps) => {
	return (
		<SubNavWraper>
			<Link href={'/'}>
				<h1>
					<IconContext.Provider value={{ color: '#ffffff', size: '15px' }}>
						<ImArrowLeft />
					</IconContext.Provider>
					<br /> {navDocs.navtitle}{' '}
				</h1>
			</Link>
			<Rule />
			{navDocs.items.map((item: any, i: number) => (
				<SideBarItem props={item} label={navDocs.label} key={i} />
			))}
		</SubNavWraper>
	);
};

const SubNavWraper = styled.div`
	padding: 0 30px;
	display: none;
	min-width: 320px;
	${media.lessThan<{ isOpen: boolean }>('medium')`
		display: inline-block;
	`}
	h1 {
		font-family: 'GT America';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 120%;
		text-transform: uppercase;
	}
	h1:hover {
		cursor: pointer;
		color: #00d1ff;

		svg {
			fill: #00d1ff;
		}
	}

	h2 {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		line-height: 20px;
		text-transform: uppercase;
		margin-top: 10px;
	}
	h2.active {
		background: linear-gradient(73.6deg, #85ffc4 2.11%, #5cc6ff 90.45%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

const Rule = styled.div`
	background: linear-gradient(88.63deg, #00d1ff -14.83%, #ed1eff 108.22%);
	height: 2px;
	height: 2px;
	width: 100vw;
	position: relative;
	left: -30px;
	top: 5px;
`;

const AccordionSection = styled.div`
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-top: 10px;
`;

const Wrap = styled.div`
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	cursor: pointer;
	h1 {
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		color: #5cc6ff;
	}
	span {
		margin-left: 15px;
		margin-top: 5px;
	}
`;

const Dropdown = styled.ul`
	color: #808191;
	font-size: 16px;

	li {
		margin: 16px 0px;
	}

	a:hover {
		color: #5cc6ff;
	}

	a.active {
		background: linear-gradient(73.6deg, #85ffc4 2.11%, #5cc6ff 90.45%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export default SubMenu;
