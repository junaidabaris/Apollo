import AdditionalInformation from "./AdditionalInformation"
import Companyactivity from "./Companyactivity"
import Fields from "./Fields"

function MainRow () {
  return (
    <div>
      <Fields/>
      <Companyactivity/>
      <AdditionalInformation/>
    </div>
  )
}
export default MainRow