import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';

const Root = () => {
  // const [showApp, setShowApp] = useState(false);

  // const handleIntroExit = () => {
  //   setShowApp(true);
  // };

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
