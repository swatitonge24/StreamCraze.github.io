import "./App.css";
import Head from "./component/Head";
import Body from "./component/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./component/Maincontainer";
import WatchPage from "./component/WatchPage";

const aapRouter= createBrowserRouter([
  {
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>,
    },
    {
      path:"/watch",
      element:<WatchPage/>,
    },


  ]
}])

function App() {
  return (
    <Provider store ={store}>
    <div>
    <Head/>
    <RouterProvider router={aapRouter}/>
    
      
    </div>
    </Provider>
  );
}

// Header
//Body
//sidbar
    //menubar
//maincontainer;
     //buttonList;
     //VedioContainer;
     //Vediocard

export default App;
 