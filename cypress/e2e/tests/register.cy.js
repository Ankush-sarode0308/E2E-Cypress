import{registerPage} from "../../Pages/registerPage"
import registerData from '../../fixtures/registerData.json'

const registerobj = new registerPage()


describe("register page automation",()=>{

    it("register flow",()=>{

       registerobj.openUrl()

       registerobj.enterFirstName(registerData.Fname)

       registerobj.enterLastName(registerData.Lname)

       registerobj.enterPassword(registerData.Pass)
       registerobj.enterEmail(registerData.Email)
       registerobj.enterTelephoen(registerData.Telephone)

       registerobj.selectchecbox()
       registerobj.continuebutton()


    })




})