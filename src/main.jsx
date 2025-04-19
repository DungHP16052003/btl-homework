import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './contexts/useContext.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'
createRoot(document.getElementById('root')).render(
  <UserProvider>
    <Provider store={store}>
    <App />
    </Provider>
  </UserProvider>,
)
