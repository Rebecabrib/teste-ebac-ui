/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')


describe('Funcionalidade Endereços - Faturamento e entrega', ()=>{
beforeEach(() => {
    cy.visit('minha-conta'),
    // cy.login('aluno_ebac@teste.com','teste@teste.com')
    cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario,dados.senha)
    })
});

it('Deve fazer cadastro de faturamento com sucesso',()=>{
enderecoPage.editarEnderecoEntrega('nome','sobrenome','company','Brasil','rua1','10', 'São Paulo', 'São Paulo', '11111111' )
cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

})

it.only('Deve fazer cadastro de entrega com sucesso - ',()=>{
enderecoPage.editarEnderecoEntrega(
    dadosEndereco[1].nome,
    dadosEndereco[1].sobrenome,
    dadosEndereco[1].company,
    dadosEndereco[1].pais,
    dadosEndereco[1].endereco,
    dadosEndereco[1].numero,
    dadosEndereco[1].cidade,
    dadosEndereco[1].estado,
    dadosEndereco[1].cep   )
cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

})


})