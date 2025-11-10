
import React, { useState, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary.js';

// Lazy-loaded components
const Home = React.lazy(() => import('./components/Home.js'));
const LazyLoading = React.lazy(() => import('./components/LazyLoading.js'));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>React Lazy Loading with Error Handling</h1>

      <ErrorBoundary>
        <Suspense fallback={<h3>⏳ Loading Components...</h3>}>
          <Home />
          {show && <LazyLoading />}
        </Suspense>
      </ErrorBoundary>

      <button onClick={() => setShow(true)}>Load Lazy Component</button>
    </div>
  );
}

export default App;