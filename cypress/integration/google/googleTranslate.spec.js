import GoogleTranslatePage from '../../support/pageObjects/GoogleTranslatePageObject';
var data = require('../../fixtures/data.json');
const googlePage = new GoogleTranslatePage();

describe('Visit Google to perfrom translation between 2 languages', () => {

  it(`Translate from ${data.sourceLang} language to ${data.targetLang} language`, () => {
    cy.visit('https://translate.google.com/')
    googlePage.getSourceLangSelectCaretIcon().first().click().type(`${data.sourceLang}{enter}`)
    googlePage.getTransLangSelectCaretIcon().type(`${data.targetLang}{enter}`)
    googlePage.getSourceLangPlaceholderText().type(data.sourceLangText).should('have.value', data.sourceLangText)
    googlePage.getTransLangPlaceholderText().invoke('text').then(actualText => {
      expect(data.targetLangText.toUpperCase()).to.equal(actualText.toUpperCase())
    })
  })

  it(`Translate from ${data.targetLang} language to ${data.sourceLang} language`, () => {
    googlePage.getLangSwitchButton().first().click()
    googlePage.getSourceLangPlaceholderText().first().clear().type(data.targetLangText).should('have.value', data.targetLangText)
    googlePage.getTransLangPlaceholderText().invoke('text').then(actualText => {
      expect(data.sourceLangText.toUpperCase()).to.equal(actualText.toUpperCase())
    })
  })

  it('Enter text "Hi!" into screen keyboard', () => {
    googlePage.getSourceLangPlaceholderText().first().clear()
    googlePage.enterHiInKeyboard();
    googlePage.getSourceLangPlaceholderText().first().type('{shift}!')
    googlePage.getTransLangPlaceholderText().should('contain', 'Hi!')
  })
})