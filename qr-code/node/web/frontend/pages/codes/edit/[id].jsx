import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CodeEditForm } from 'components/CodeEditForm'
import { useAuthenticatedFetch } from 'hooks/useAuthenticatedFetch'

export default function CodeEdit() {
  const [initialValues, setInitialValues] = useState(null)
  const fetch = useAuthenticatedFetch()
  const { id } = useParams()

  useEffect(async () => {
    const response = await fetch(`/api/qrcodes/${id}`, { method: 'GET' })

    if (response.ok) {
      const body = await response.json()
      setInitialValues(body)
    }
  }, [])

  if (initialValues === null) {
    return null
  }

  return <CodeEditForm id={id} initialValues={initialValues} />
}
