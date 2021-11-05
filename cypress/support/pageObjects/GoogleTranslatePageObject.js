class GoogleTranslatePage {
    getSourceLangSelectCaretIcon(){
        return cy.get('button[aria-label="More source languages"]');
    }
    getTransLangSelectCaretIcon(){
        return cy.get('.aCQag > .EO28P > :nth-child(5) > .VfPpkd-Bz112c-LgbsSe > .VfPpkd-Bz112c-RLmnJb');
    }
    getSourceLangPlaceholderText(){
        return cy.get('.er8xn');
    }
    getTransLangPlaceholderText() {
        return cy.get('span[jsaction="click:qtZ4nf,GFf3ac,tMZCfe; contextmenu:Nqw7Te,QP7LD; mouseout:Nqw7Te; mouseover:qtZ4nf,c2aHje"]');
    }
    getLangSwitchButton(){
        return cy.get('button[class="VfPpkd-Bz112c-LgbsSe VfPpkd-Bz112c-LgbsSe-OWXEXe-e5LLRc-SxQuSe yHy1rc eT1oJ qiN4Vb lRTpdf U2dVxe"]');
    }
    getSourceLangPlaceholderTextDeletIcon(){
        return cy.get('div[jsname="s3Eaab"]~i[class="material-icons-extended VfPpkd-kBDsod"]').get(2);
    }
    getScreenKeyboard(){
        return cy.get('#itamenu > .ita-kd-inputtools-div > .goog-container > .ita-kd-inputtool-icon > .ita-kd-img')
    }
    getLetterh(){
        return cy.get('#K72')
    }
    getLetteri(){
        return cy.get('#K73')
    }
    getShiftButton(){
        return cy.get('[style="user-select: none; width: 70.25px;"]')
    }
    enterHiInKeyboard(){
        this.getScreenKeyboard().click()
        this.getShiftButton().click()
        this.getLetterh().click()
        this.getLetteri().click()
    }
}

export default GoogleTranslatePage