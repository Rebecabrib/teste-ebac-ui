/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page'


describe('Funcionalidade Endereços - Faturamento e entrega', ()=>{
beforeEach(() => {
    cy.visit('minha-conta'),
    // cy.login('aluno_ebac@teste.com','teste@teste.com')
    cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario,dados.senha)
    })
});

it.only('Deve fazer cadastro de faturamento com sucesso',()=>{
enderecoPage.editarEnderecoFaturamento()
cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

})


})