import { useState } from 'react';

export default function() {
    const [count, setCount] = useState(0)
    return <>
        <h1>Counter</h1>

        <button className="btn btn-primary"
          onClick={() => setCount(count + 1)}>
            Count is {count}
        </button>
    </>
  }