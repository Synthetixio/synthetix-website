import { render, screen } from '@testing-library/react';
import { theme } from '../../../styles/theme';
import { ThemeProvider } from 'styled-components';
import Accordion, { AccordionItemsType } from '../Accordion';
import userEvent from '@testing-library/user-event';

const queryTextsDictionary = {
	titles: {
		first: 'Find Me title',
		second: 'Im visible at the beginning',
	},
	descriptions: {
		notVisible: 'Find Me description',
		visible: 'Im visible at the beginning description',
	},
};

const items: AccordionItemsType[] = [
	{
		descriptions: [<span key="test-key1">{queryTextsDictionary.descriptions.notVisible}</span>],
		title: queryTextsDictionary.titles.first,
	},
	{
		descriptions: [<span key="test-key2">{queryTextsDictionary.descriptions.visible}</span>],
		title: queryTextsDictionary.titles.second,
	},
];
let activeIndex = 1;
const onAccordionItemChange = (index: number) => {
	activeIndex = index;
};

describe('Accordion', () => {
	beforeEach(() => {
		activeIndex = 1;
	});

	test('should hide accordion item description if it does not have the active index', () => {
		render(
			<ThemeProvider theme={theme}>
				<Accordion
					activeIndex={activeIndex}
					onAccordionItemChange={onAccordionItemChange}
					items={items}
				/>
			</ThemeProvider>
		);

		expect(screen.queryByText(queryTextsDictionary.descriptions.notVisible)).toBeNull();
	});

	test('should render the accordion item description if it have the active index', () => {
		activeIndex = 0;
		render(
			<ThemeProvider theme={theme}>
				<Accordion
					activeIndex={activeIndex}
					onAccordionItemChange={onAccordionItemChange}
					items={items}
				/>
			</ThemeProvider>
		);

		expect(screen.queryByText(queryTextsDictionary.descriptions.notVisible)).toBeInTheDocument();
	});

	test('should render the all the existing titles', () => {
		render(
			<ThemeProvider theme={theme}>
				<Accordion
					activeIndex={activeIndex}
					onAccordionItemChange={onAccordionItemChange}
					items={items}
				/>
			</ThemeProvider>
		);
		const allTitles = items.map((item) => screen.queryByText(item.title));
		expect(allTitles.length).toBe(2);
		allTitles.forEach((title) => expect(title).toBeInTheDocument());
	});

	test('should call the onAccordionItemChange when the title of the accordion item is clicked', async () => {
		const mockHandleClick = jest.fn();
		render(
			<ThemeProvider theme={theme}>
				<Accordion
					activeIndex={activeIndex}
					onAccordionItemChange={mockHandleClick}
					items={items}
				/>
			</ThemeProvider>
		);

		userEvent.click(screen.queryByText(queryTextsDictionary.titles.first)!);
		expect(mockHandleClick).toHaveBeenCalledTimes(1);
		expect(mockHandleClick).toHaveBeenCalledWith(0);
	});

	test('should render the accordion item description when the corresponding title is clicked', async () => {
		const { rerender } = render(
			<ThemeProvider theme={theme}>
				<Accordion
					activeIndex={activeIndex}
					onAccordionItemChange={onAccordionItemChange}
					items={items}
				/>
			</ThemeProvider>
		);
		expect(
			screen.queryByText(queryTextsDictionary.descriptions.notVisible)
		).not.toBeInTheDocument();
		userEvent.click(screen.queryByText(queryTextsDictionary.titles.first)!);

		rerender(
			<ThemeProvider theme={theme}>
				<Accordion
					activeIndex={activeIndex}
					onAccordionItemChange={onAccordionItemChange}
					items={items}
				/>
			</ThemeProvider>
		);

		expect(screen.queryByText(queryTextsDictionary.descriptions.notVisible)).toBeInTheDocument();
	});

	test('should not render any other description when the already active title is clicked', async () => {
		const { rerender } = render(
			<ThemeProvider theme={theme}>
				<Accordion
					activeIndex={activeIndex}
					onAccordionItemChange={onAccordionItemChange}
					items={items}
				/>
			</ThemeProvider>
		);
		expect(screen.queryByText(queryTextsDictionary.descriptions.visible)).toBeInTheDocument();
		userEvent.click(screen.queryByText(queryTextsDictionary.titles.second)!);

		rerender(
			<ThemeProvider theme={theme}>
				<Accordion
					activeIndex={activeIndex}
					onAccordionItemChange={onAccordionItemChange}
					items={items}
				/>
			</ThemeProvider>
		);
		expect(
			screen.queryByText(queryTextsDictionary.descriptions.notVisible)
		).not.toBeInTheDocument();

		expect(screen.queryByText(queryTextsDictionary.descriptions.visible)).toBeInTheDocument();
	});
});
