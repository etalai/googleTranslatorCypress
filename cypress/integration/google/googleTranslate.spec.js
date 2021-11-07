import GoogleTranslatePage from '../../support/pageObjects/GoogleTranslatePageObject';

var locData;
const googlePage = new GoogleTranslatePage();

describe('Visit Google to perfrom translation between 2 languages', () => {
  
  beforeEach('Land to google translate page', () => {
      cy.fixture('data').then(locatorsAndData => {
        locData = locatorsAndData;
      })  
  })

  it(`Translate from source language to target language`, () => {
    cy.log(`Translating from ${locData.sourceLang} language to ${locData.translationLang} language`);
    cy.visit('https://translate.google.com/')
    googlePage.getSourceLangSelectCaretIcon().first().click().type(`${locData.sourceLang}{enter}`)
    googlePage.getTransLangSelectCaretIcon().type(`${locData.translationLang}{enter}`)
    googlePage.getSourceLangPlaceholderText().type(locData.germanText).should('have.value', locData.germanText)
    googlePage.getTransLangPlaceholderText().should('contain', /locData.spanishText/ig)
  })

  it('Translate from target language to source language', () => {
    cy.log(`Translating from ${locData.translationLang} language to ${locData.sourceLang} language`);
    googlePage.getLangSwitchButton().first().click()
    googlePage.getSourceLangPlaceholderText().first().clear().type(locData.spanishText).should('have.value', locData.spanishText)
    googlePage.getTransLangPlaceholderText().should('contain', /locData.germanText/ig)
  })

  it('Enter text into screen keyboard', () => {
    googlePage.getSourceLangPlaceholderText().first().clear()
    googlePage.enterHiInKeyboard();
    googlePage.getSourceLangPlaceholderText().first().type('{shift}!')
    googlePage.getTransLangPlaceholderText().should('contain', 'Hi!')
  })
})