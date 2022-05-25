import { CodeEditForm } from 'components/CodeEditForm'
import { useState } from 'react'

import { useAuthenticatedFetch } from 'hooks/useAuthenticatedFetch'

export default function CodeNew() {
  const [formValues, setFormValues] = useState(null)

  const fetch = useAuthenticatedFetch()

  return <CodeEditForm initialValues={formValues} submitFetch={async (parsedBody) => {
    const response = await fetch(`/api/qrcodes`, {
      method: 'POST',
      body: JSON.stringify(parsedBody),
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
      const body = await response.json()
      setFormValues(body)
    }
  }} />
}
