import { NavigatorLink } from "../../components/common/Navigator/NavigatorLink/NavigatorLink";
import { NavigatorList } from "../../components/common/Navigator/NavigatorList/NavigatorList";
import "./Header.scss";


export const Header = () => {
   return (
      <header className="header">
         <div className="header__container container">
            <div className="header__inner">
               <NavigatorList>
                  <NavigatorLink 
                     to={'/'}
                     text={'Home'}
                  />
                  <NavigatorLink 
                     to={'/about'}
                     text={'About'}
                  />
                  <NavigatorLink 
                     to={'/contacts'}
                     text={'Contacts'}
                  />
               </NavigatorList>
            </div>
         </div>
      </header>
   )
};
