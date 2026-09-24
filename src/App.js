import { RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import appRoutes from "./utils.js/Routes";
import { Provider } from "react-redux";
import appStore from "./utils.js/store";

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRoutes}>
        <AppLayout />
      </RouterProvider>
    </Provider>
  );
}

export default App;
