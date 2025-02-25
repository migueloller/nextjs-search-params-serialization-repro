'use client'

import { use } from 'react'

export default function ClientComponent({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return <pre>{JSON.stringify(use(searchParams), null, 2)}</pre>
}
