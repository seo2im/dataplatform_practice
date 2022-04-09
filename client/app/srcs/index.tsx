import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
  useEffect(() => {
    fetch('/api/hello',
    {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>Start</div>
  )
};

/* fix ver 17 -> 18 */
const root = createRoot(document.getElementById('root'));
root.render(<App />);
