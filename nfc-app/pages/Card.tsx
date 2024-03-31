// CardPage.tsx

import React from 'react';
import Image from 'next/image';
import Card from '../components/card';
import DetailCard from '../components/detailcard';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';


export default function CardPage() {
  const params = useParams
  // const paramName = params

  const router = useRouter();
  const name = Array.isArray(router.query.name) ? router.query.name[0] : router.query.name || '';

  return (
    <div className="flex flex-col justify-center items-center p-12">
      <Card name={name} />
      <p className='paragraph'><DetailCard name={name} /></p>
    </div>
  );
}
