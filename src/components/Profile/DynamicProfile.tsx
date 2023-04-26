import dynamic from 'next/dynamic'

const DynamicProfile = dynamic(() => import('./Profile'), { ssr: false })

export default DynamicProfile
