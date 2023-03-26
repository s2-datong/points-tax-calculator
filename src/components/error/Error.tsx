import React from 'react'
import style from "./error.module.css"

interface ErrorItem {
  code?: string
  message?: string
}
export interface Errors {
  errors: ErrorItem[]
}

export const ErrorLine = ({ message }: ErrorItem) => {
  return <div className={style['error-message']}>
    {message}
  </div>
}

export const ErrorList = ({ errors }: Errors) => {
  return <div className={style['error-list']}>
    <p>We encountered some errors processing this request:</p>
    { errors.map(error => <ErrorLine message={error.message} key={error.message} />) }
  </div>
}
