import { useState } from 'react'
import { UilSun } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'
import './ToggleTheme.scss'


export const ToggleTheme = () => {

   const [theme, setTheme] = useState<string>('dark')
   
   const setDarkMode = () => {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
      setTheme('dark');
   }

   const setLightMode = () => {
      document.querySelector("body")?.setAttribute("data-theme", "light");
      setTheme('light');
   }


   return (
      <div className="toggle-theme">
         { 
         theme === 'dark' 
         && 
         <button className="toggle-theme__light-button" onClick={setLightMode}>
            <UilSun className="toggle-theme__light-button-icon" />
         </button>
         }
         { 
         theme === 'light' 
         && 
         <button className="toggle-theme__dark-button" onClick={setDarkMode}>
            <UilMoon className="toggle-theme__dark-button-icon" />
         </button>
         }
      </div>
   )
}
