export class registerPage{

 weblocators={

    firstname:'#input-firstname', 
    lastname :'#input-lastname',
    email : '#input-email',
    telephone : '#input-telephone',

    password : '#input-password',
    confirmpassword : '#input-confirm',
    policycheckbox : 'input[type="checkbox"]',
    continue : '.pull-right > .btn'


 }

 openUrl(){
    cy.visit(Cypress.env('URL'))
 }

 enterFirstName(Fname){
    cy.get(this.weblocators.firstname).type(Fname)
 }

 enterLastName(Lname){
    cy.get(this.weblocators.lastname).type(Lname)
 
}

enterEmail(Email){

    cy.get(this.weblocators.email).type(Email)

}

enterTelephoen(phoneno){
    cy.get(this.weblocators.telephone).type(phoneno)

}

enterPassword(pass){
    cy.get(this.weblocators.password).type(pass)
    cy.get(this.weblocators.confirmpassword).type(pass)
}


selectchecbox(){
    cy.get(this.weblocators.policycheckbox).click()

}

continuebutton(){
    cy.get(this.weblocators.continue).click()
}



}




