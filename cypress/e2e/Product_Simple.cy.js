const INPUT_ADDRESS = '[type ="text"]';
const INPUT_NUMBER = '[type ="number"]';
describe('Logout', () => {
  beforeEach(() => {
    // Login before each test
    cy.visit('https://develop.dgzeoqrwzv2nf.amplifyapp.com/');
    cy.get('input[name="email"]').type('dev@gmail.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('form').submit();
    cy.url().should('include', 'https://develop.dgzeoqrwzv2nf.amplifyapp.com/');
  });


  it('Click successfully', () => {

    cy.get('.MuiButtonBase-root').eq(2).click({ force: true });

    cy.wait(2000);
    
    cy.get('.MuiButtonBase-root').eq(0).click({ force: true });

    cy.get(".simplebar-content-wrapper").scrollTo(0, 1120, {ensureScrollable: false}).then(()=>{
     cy.wait(2000);

      cy.get('p').contains('Sản phẩm V2').click();

    cy.get('p').contains('Danh sách sản phẩm').click().then(() => {
      cy.wait(2000);
      cy.get('a').contains('Thêm sản phẩm mới').click();
      cy.get('p').contains('Kéo files vào hoặc click vào').click().then(() => {
        cy.get('input[type="file"]').attachFile('kem.jpg');
      });
      cy.get('input[name="common.name"]').type('kem').wait(2000);
      cy.get('input[name="common.slug"]').type('kem').wait(2000);
      cy.get('input[name="common.shortDescription"]').type('kem');
      cy.get('div[data-placeholder="Viết về sản phẩm của bạn..."]').type('kem');
      cy.get(INPUT_ADDRESS).eq(4).click().wait(2000);
        cy.get('.MuiAutocomplete-listbox')
      .find('li')
      .then(() => {
        cy.get('p').contains('Thực phẩm chức năng').click().wait(2000);
      });
      cy.get('label').contains('Danh mục sản phẩm').click();
      cy.wait(2000);
      cy.get(INPUT_ADDRESS).eq(8).click().wait(2000);
        cy.get('.MuiAutocomplete-listbox')
      .find('li')
      .then(() => {
        cy.get('input[id=":rk:"]').type('12345,').wait(2000);
      });
      cy.get(INPUT_ADDRESS).eq(9).type('10000');
      cy.get(INPUT_ADDRESS).eq(10).type('8000');
      cy.get(INPUT_ADDRESS).eq(11).type('10');
      cy.get(INPUT_ADDRESS).eq(12).type('8');
      cy.get('p').contains('Kho').click();
      cy.get(INPUT_ADDRESS).eq(9).type('123');
      cy.get(INPUT_NUMBER).type('123');
      cy.get('p').contains('Vận chuyển').click();
      cy.get(INPUT_ADDRESS).eq(9).type('10');
      cy.get(INPUT_NUMBER).eq(0).type('10');
      cy.get(INPUT_NUMBER).eq(1).type('10');
      cy.get(INPUT_NUMBER).eq(2).type('10');
      cy.get('p').contains('Thuộc tính').click();
      cy.get(INPUT_ADDRESS).eq(9).click();
        cy.get('.MuiAutocomplete-listbox')
      .find('li')
      .then(() => {
        cy.get('p').contains('Nước ngọt').click().wait(2000);
      });
      cy.get(INPUT_ADDRESS).eq(10).click().wait(2000);
        cy.get('.MuiAutocomplete-listbox')
      .find('li')
      .then(() => {
        cy.get('p').contains('20').click().wait(2000);
      });
      cy.get('button[id=":r10:"]').click();
    });
   
    });
   
    // // Assert that the user is redirected to the login page
    // cy.url().should('include','https://develop.dgzeoqrwzv2nf.amplifyapp.com/dashboard/tag/list');
    // cy.get('h4').should('contain', 'Danh sách tag');
    
  });

}); 