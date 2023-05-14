import { Provider } from "react-redux";
import AppRoutes from "./routes/routes";
import { store } from "./store/Store";

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

export default App;
