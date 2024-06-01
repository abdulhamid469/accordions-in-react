import { useEffect, useRef, useState } from "react";
import { AccordionType } from "../types";
import { CaretDownOutline } from "react-ionicons";

interface accordionProps extends AccordionType {
    setData: React.Dispatch<React.SetStateAction<AccordionType[]>>
}

const Accordion = ({ id, title, content, isOpen, setData }: accordionProps) => {
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if(contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    }, [content]);

    const handleToggle = () => {
      setData((prevData) => 
        prevData.map((accordion) => {
          return {
            ...accordion, isOpen: accordion.id === id ? !isOpen : false
          }
        }
        )
      )
    }
  return (
    <div className="w-full flex flex-col lg:max-w-[27vw] max-w-full">
      <div className="w-full flex-col bg-white shadow-md rounded-[0.5em] overflow-hidden">
        <div className="w-full flex items-center justify-between px-3 py-5 cursor-pointer" onClick={handleToggle}>
          <span className="text-gray-900 font-medium">{title}</span>
          <CaretDownOutline color={"#22325F"} cssClasses={`${ isOpen ? "rotate-0" : "rotate-[-90deg]"} transition-transform duration-300`} />
        </div>
        <div ref={contentRef} className="w-full transition-all duration-300 ease-in-out overflow-hidden px-3" style={{maxHeight: isOpen ? contentHeight: 0, marginBottom: isOpen ? 16 : 0}}>
          <p className="text-gray-900">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion;