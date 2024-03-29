/// <reference types="cypress" />

// const perfil = require('../fixtures/perfil.json')

context('Funcionalidade login', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Jenkins (não é Jenkins? Sair)')

    })

    //     it('Deve fazer login com sucesso-massa de dados', () => {

    //     cy.get('#username').type(perfil.usuario) 
    //     cy.get('#password').type(perfil.senha)
    //     cy.get('.woocommerce-form > .button').click()
    //     cy.get('.page-title').should('contain', 'Minha conta')
    //     cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Jenkins (não é Jenkins? Sair)')

    // })

        it.only('Deve fazer login com sucesso- sem criar a const fixture', () => {

        cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario) 
        cy.get('#password').type(dados.senha, {log:false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
       
    })
    });


    it('Deve exibir mensagem de erro ao inserir email invalido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('#username').type('alu_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    })

    it('Deve exibir mensagem de erro ao inserir senha invalido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('tte@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')


})
}) 