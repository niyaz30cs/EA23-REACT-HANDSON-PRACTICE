import React, { Suspense } from 'react'
import "../App.css";

const LazyComponent=React.lazy(()=>import("./LazyComponent"))
function LazyLoading() {
  return (
    <div>
      <Suspense fallback={<div className='name'>Niyaz Alam</div>}>
        <LazyComponent/>
      </Suspense>
    </div>
  )
}

export default LazyLoading
