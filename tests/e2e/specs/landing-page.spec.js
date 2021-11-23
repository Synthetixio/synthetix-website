describe('Landing Page', () => {
	it('Learn more button should scroll the view to the futures section', () => {
		cy.visit('http://localhost:3000/');
		cy.get('button[data-test-id="learn-more-btn"]').click();
		cy.get('section[id="futures"]').should('be.visible');
	});

	it('should hide slider arrows if viewport width is smaller than 750px', () => {
		cy.visit('http://localhost:3000/');
		cy.viewport(750, 750);
		cy.get('button[data-test-id="slider-arrow-next"]').should('not.exist');
		cy.get('button[data-test-id="slider-arrow-prev"]').should('not.exist');
	});

	it('should set the attribute of the slider to "x mandatory" when viewport width is below 500px', () => {
		cy.visit('http://localhost:3000/');
		cy.viewport(500, 500);
		cy.get('div[data-test-id="powered-by-slider"]').should(
			'have.css',
			'scroll-snap-type',
			'x mandatory'
		);
	});

	it('should set the attribute of the slide to "x mandatory" when viewport width is below 500px', () => {
		cy.visit('http://localhost:3000/');
		cy.viewport(500, 500);
		cy.get('div[data-test-id="powered-by-slide"]').should(
			'have.css',
			'scroll-snap-align',
			'center'
		);
	});

	it.only('should scroll the hamburger menu content if screen is not tall enough', () => {
		cy.visit('http://localhost:3000/');
		cy.viewport(500, 400);
		cy.get('header[data-test-id="header"] > div').click();
		cy.get('ul[data-test-id="header-menu"]').should('have.css', 'overflow', 'scroll');
	});
});
