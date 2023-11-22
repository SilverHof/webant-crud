import { NavigatorListProps } from './NavigatorList.props'
import './NavigatorList.scss'


export const NavigatorList = ({ children }: NavigatorListProps) => {

   return (
      <ul className="navigator-list">
         {children}
      </ul>
   )
}
