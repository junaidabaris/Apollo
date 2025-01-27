
import Dealactivity from "./Dealactivity"
import Dealforecast from "./Dealforecast"
import Dealrevenue from "./Dealrevenue"
import Fields from "./Fields"

function MainRow () {
  return (
    <div>
      <Fields/>
      <Dealactivity/>
      <Dealrevenue/>
      <Dealforecast/>
    </div>
  )
}
export default MainRow