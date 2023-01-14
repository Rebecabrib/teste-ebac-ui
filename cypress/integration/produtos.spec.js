/// <reference types="cypress" />



describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    })

    it('Validar seleção de produtos', () => {
        cy.get('[class="product-block grid"]')
            .last()
            .click()
    })

    it('Validar adição de produtos no carrinho', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

    })

it.only('Adicionar produtos - custom commands',()=>{
    cy.addProdutos('Ajax Full-Zip Sweatshirt', 'M', 'Green', 1)
})

});

