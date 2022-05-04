import { useState } from 'react'
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {
  // const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  // function toggleWidgetVisibility() {
  //   setIsWidgetOpen(!isWidgetOpen)
  // } // Popover take care of it

  return (
    <Popover className='absolute bottom-4 right-4 md:bottom-8 right-5 flex flex-col items-end' >
      {/* {isWidgetOpen ? <p>Hello</p> : null} */}
      {/* {isWidgetOpen && <p>Hello</p>} */}
      <Popover.Panel><WidgetForm></WidgetForm></Popover.Panel>
      {/* <button onClick={toggleWidgetVisibility} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group' > */}
      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group' >
        <h1><ChatTeardropDots className='w-6 h-6' /></h1>
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear' >
          <span className='pl-2'></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
