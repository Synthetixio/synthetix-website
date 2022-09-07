import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { OrderedDoc } from './Build/BuildPageLayout';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const SideBarItem = function ({ props, label }: any) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const router = useRouter();
	useEffect(() => {
		const currentSlug = router.query.slug;

		props.docs.forEach((doc: any) => {
			if (doc.slug.current === currentSlug) {
				setIsOpen(true);
			}
		});
	}, [props, router]);

	return (
		<AccordionSection>
			<Wrap onClick={() => toggle()}>
				<h2 className={isOpen ? 'active' : ''}>{props.title}</h2>
				<span>{isOpen === true ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
			</Wrap>
			{isOpen && (
				<Dropdown>
					{props.docs.map((doc: any, i: number) => (
						<li key={i}>
							<a
								href={`/${label}/${doc.slug.current}`}
								className={
									router.query.slug === doc.slug.current ? 'active' : ''
								}
							>
								{doc.title}
							</a>
						</li>
					))}
				</Dropdown>
			)}
		</AccordionSection>
	);
};

interface MenuProps {
	items?: OrderedDoc[];
}

const SubMenu = ({ items }: MenuProps) => {
	return (
		<>
			{items &&
				items.map((item, i) => (
					<SideBarItem props={item} label={item.title} key={i} />
				))}
		</>
	);
};

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
