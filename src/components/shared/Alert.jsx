import React from 'react'

export const Alert = props => {
  const { type, msg } = props
  return <div className={`alert ${type}`}>{<p>{msg}</p>}</div>
}
