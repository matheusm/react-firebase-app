import React from 'react'

export default function Error({ children, type }) {
  return <div className={`alert-error ${type}`}>{children}</div>
}
