describe("Testing the application", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });

  context("View Flow", () => {
    it('should visit the base URL', () => {
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/');
      });
    });

    it("should display the required elements", () => {
      cy.get('input[type="text"]').should('have.length', 1)
      cy.get('input[type="radio"]').should('have.length', 2)
      cy.get('.mic img').should('have.length', 1);
    });

    it('can search github list from input[USER]', () => {
      cy.get('input[type="text"]').type("Facebook");
      cy.get('form').submit();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/search/Facebook');
      });
    });

    it('should return back home after search', () => {
      cy.get('.pad__container > button').click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/');
      });
    });

    it('can search github list from input[ORGANIZATIONS]', () => {
      cy.get('input[type="text"]').type("Facebook");
      cy.get('.control-group > label').eq(1).click();
      cy.get('form').submit();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/search/Facebook');
        expect(loc.search).to.eq('?type=org');
      });
    });

    it('should return no result found if no data', () => {
      cy.get('.pad__container > button').click();
      cy.get('input[type="text"]').type("njladnfj skngjlne dgnsjn aknekgjsng");
      cy.get('form').submit();
      cy.get('.no-content').contains('No result found!');
      cy.get('.no-content button').should('have.text', "Return home");
      cy.get('.no-content button').click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/');
      });
    });
  });
})