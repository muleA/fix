import { useRouter } from 'next/router';
import React from 'react';

function SelectedServiceLlist() {
  const router = useRouter();
  const id = router.query;
  return (
    <div>
      <div>{id}</div>
    </div>
  );
}

export default SelectedServiceLlist;
