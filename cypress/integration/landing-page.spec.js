describe('Landing Page', () => {
	it('Learn more button should scroll the view to the futures section', () => {
		cy.visit('http://localhost:3000/');
		// wait for the animation to finish
		cy.wait(500);
		cy.get('button[data-test-id="learn-more-btn"]').click();
		cy.get('section[id="futures"]').should('be.visible');
	});

	it('Slider arrows should appear on 1024x1024 viewport', () => {
		cy.viewport(1024, 1024);
	});
});
