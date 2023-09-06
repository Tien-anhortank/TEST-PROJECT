describe('Logout', () => {
    beforeEach(() => {
      // Login before each test
      cy.visit('https://develop.dgzeoqrwzv2nf.amplifyapp.com/');
      cy.get('input[name="email"]').type('dev@gmail.com');
      cy.get('input[name="password"]').type('123456');
      cy.get('form').submit();
      cy.url().should('include', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/');
    });

  
    it('Logs out successfully', () => {
      
        cy.get('.MuiAvatar-root').click().then(() => {
        cy.wait(2000);
        cy.get('.MuiMenuItem-root').contains('Đăng xuất').click();
      });
     
      // Assert that the user is redirected to the login page
      cy.url().should('include', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/');
      cy.get('h4').should('contain', 'Auto - Marketing');
      
    });
  
  });