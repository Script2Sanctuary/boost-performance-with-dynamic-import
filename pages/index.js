// pages/index.js

import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamic import of the HeavyComponent
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  ssr: false, // Menonaktifkan server-side rendering untuk komponen ini
  loading: () => <p>Loading...</p>, // Placeholder saat loading
});

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setShowComponent(true)}>Load Heavy Component</button>
      {showComponent && <HeavyComponent />}
      {/* <HeavyComponent /> */}
    </div>
  );
}
