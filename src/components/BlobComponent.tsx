import React from 'react';
import '@/app/css/blob.css'

const BlobComponent = (props: {cursorMove: (e: React.PointerEvent<HTMLDivElement>) => void, blobLeft: number, blobTop: number}) => {
  return (
    <>
    <div className={'h-[500px] blobBg rounded-full bg-white aspect-square absolute -translate-x-1/2 -translate-y-1/2'} style={{ top: `${props.blobTop}px`, left: `${props.blobLeft}px`}} >
    </div>
    </>
    
  )
}

export default BlobComponent
