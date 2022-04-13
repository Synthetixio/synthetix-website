describe('Synths Page', () => {
	it.only('should have at least 3 tabs', () => {
		cy.visit('http://localhost:3000/synths');
		cy.get('button[data-test-id="tab-categories"]').should('have.length.eq', 2);
	});
});
