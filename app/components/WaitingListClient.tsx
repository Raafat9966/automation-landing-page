'use client'

import dynamic from 'next/dynamic'

const WaitingList = dynamic(() => import('./WaitingList'), { ssr: false })

export default function WaitingListClient() {
  return <WaitingList />
}
