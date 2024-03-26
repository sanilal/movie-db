"use client"

import { MdLightMode, MddarkMode} from 'react-icons/md'
import {useTheme} from 'next-themes'

export default function DarkModeSwitch() {
  const {theme, setTheme} = useTheme();
  const currentTheme = theme === 'system' ? stystemTheme : theme;
  return (
    <div>{currentTheme === 'dark' ? <MdLightMode onClick={()=>setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500' /> : <MddarkMode onClick={()=>setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500' />}</div>
  )
}
