import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

// App.jsx stays intentionally tiny. Its only job is to set up the
// router. All real structure lives in routes/ and pages/ — this is
// what the prompt means by "don't put everything inside App.jsx."
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
