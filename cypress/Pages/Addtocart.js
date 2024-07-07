 export class Addtocart{

 weblocator={
    
     search : '.form-control',
     button : '.input-group-btn > .btn > .fa',

     mac : ':nth-child(1) > .product-thumb > .image > a > .img-responsive',
     card : '#button-cart',
     success : '.alert'





 }

 getsearch(text){
 
     cy.get(this.weblocator.search).type(text)
 }

 clickbutton(){
    cy.get(this.weblocator.button).click()
 }

getmac()
{
     cy.get(this.weblocator.mac).click()
}

selecttocart(){
    cy.get(this.weblocator.card).click()
}

getalert(){
  const t=  cy.get(this.weblocator.success)
  return t
}
 }