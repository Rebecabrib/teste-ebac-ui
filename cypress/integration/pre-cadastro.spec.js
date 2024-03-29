/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade pré-cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    })

    it('Validar cadastro completo com sucesso', () => {
        let emailFaker = faker.internet.email()
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

    it('Validar mensagem de erro ao realizar cadastro usando email já cadastrado', () => {
        cy.get('#reg_email').type('aluno_ebac@teste.com')
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')

    });

    it.only('pre-cadastro custom commands',() => {
        let emailFaker1 = faker.internet.email()
        cy.preCadastro(emailFaker1, 'senha!#@forte', 'Rebeca', 'Beltrami')

    })

})