describe('Landing Page', () => {
	it('Learn more button should scroll the view to the futures section', () => {
		cy.visit('http://localhost:3000/');
		cy.get('#hero').should('be.visible');
	});
});
