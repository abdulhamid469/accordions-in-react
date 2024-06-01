import { useState } from "react"
import { initialAccordions } from "./data"
import { AccordionType } from "./types"
import Accordion from "./components/Accordion"

const App = () => {
  const [accordions, setAccordions] = useState<AccordionType[]>(initialAccordions)

  return (
    <div className="w-full flex flex-col gap-4 md:px-2 px-5">
      {
        accordions.map((accordion) =>(
          <Accordion key={accordion.id} setData={setAccordions} {...accordion} />
        ))
      }
    </div>
  )
}

export default App
