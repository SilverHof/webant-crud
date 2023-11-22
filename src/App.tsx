import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { privateRoutesArray } from "./routes/private/privateRoutesArray";
import { publicRoutesArray } from "./routes/public/publicRoutesArray";
import { PrivateRoute } from "./routes/PrivateRoute";
import { CommentDetails } from "./pages/private/CommentDetails/CommentDetails";

const App = () => {
   return (
      <Routes>
         {/* Public Routes */}
         {publicRoutesArray.map(({ path, Component }) => (
            <Route
               key={path}
               path={path}
               element={<Component />}
            />
         ))}
         
         {/* Private Routes */}
         <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
               {privateRoutesArray.map(({ path, Component }) => (
                  <Route
                     key={path}
                     path={path}
                     element={<Component />}
                  />
               ))}
               <Route 
                  path="comments/:commentId"
                  element={<CommentDetails />}
               />
            </Route>
         </Route>
      </Routes>
   );
};

export default App;
