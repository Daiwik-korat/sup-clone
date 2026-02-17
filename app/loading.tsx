import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  return (
     <div className="p-10">
        <Skeleton height={400} />
        <Skeleton count={10} />    
     </div>
  )
}