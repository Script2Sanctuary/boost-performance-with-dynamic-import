// components/HeavyComponent.js

import React, { useEffect } from 'react';
import _ from 'lodash'; // Menggunakan lodash sebagai dependensi besar untuk contoh
import Image from 'next/image'; // Menggunakan komponen Image untuk memperbesar ukuran bundle
import massiveData from '../data/massiveData.json'; // Misalkan ada file JSON besar

const HeavyComponent = () => {
  useEffect(() => {
    // Menggunakan lodash untuk melakukan sesuatu dengan data besar
    const sortedData = _.sortBy(massiveData, 'value');
    console.log(sortedData);
  }, []);

  return (
    <div>
      <h1>Heavy Component</h1>
      {massiveData.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <Image src={item.imageUrl} alt={item.name} width={500} height={300} />
        </div>
      ))}
    </div>
  );
};

export default HeavyComponent;
