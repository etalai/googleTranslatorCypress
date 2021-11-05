import GoogleTranslatePage from '../../support/pageObjects/GoogleTranslatePageObject';

var locData;
const googlePage = new GoogleTranslatePage();

describe('Visit Google translate and perform German <-> Spanish translation', () => {
  
  beforeEach('Land to google translate page', () => {
      cy.fixture('googelTranslateElements').then(locatorsAndData => {
        locData = locatorsAndData;
      })  
  })

  it('Translate from German to Spanish', () => {
    cy.visit('https://translate.google.com/')
    googlePage.getSourceLangSelectCaretIcon().first().click().type(`${locData.sourceLang}{enter}`)
    googlePage.getTransLangSelectCaretIcon().type(`${locData.translationLang}{enter}`)
    googlePage.getSourceLangPlaceholderText().type(locData.germanText).should('have.value', locData.germanText)
    googlePage.getTransLangPlaceholderText().should('contain', /locData.spanishText/ig)
  })

  it('Translate from Spanish to German', () => {
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