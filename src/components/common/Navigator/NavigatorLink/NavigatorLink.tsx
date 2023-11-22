import { NavLink } from 'react-router-dom'
import { NavigatorLinkProps } from './NavigatorLink.props';
import './NavigatorLink.scss'


export const NavigatorLink = ({ to, isIcon, icon, text }: NavigatorLinkProps) => {

   const setActive = ({isActive}) => isActive ? `navigator-link_active` : `navigator-link`;

   return (
      <NavLink 
         to={to} 
         className={setActive}
      >
         {
            isIcon 
            &&
            <div className="navigator-link__icon-box">
               { icon }
            </div> 
         }
         {text}
      </NavLink>
   )
}
