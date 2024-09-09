'use client';

import { useState } from 'react';

type Props = {};
function Counter({ users }: Props) {
  const [count, setCount] = useState(0);

  console.log(users);

  return (
    <>
      <p>there are {users.length} users </p>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </>
  );
}
export default Counter;
