import testdata from "../../fixtures/testdata.json"
import { Addtocart} from "../../Pages/Addtocart"

describe('add to cart',()=>{
    const addtocart = new Addtocart();

  before(()=>{
   
   cy.login(testdata.login.username,testdata.login.password)    
})


  it('add to cart',()=>{

     addtocart.getsearch(testdata.product.productname)
     addtocart.clickbutton()
     addtocart.getmac()
     addtocart.selecttocart()
     addtocart.getalert().should('contain', "Success: You have added iMac to your shopping cart!")
  })

})