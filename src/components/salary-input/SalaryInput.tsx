import React, { useState } from 'react'
import style from "./salary-input.module.css"

interface SalaryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick?: (evt?: any) => void
  loading?: boolean
}

export const SalaryInput = ({ value, onInput, onClick, loading, ...props }: SalaryInputProps) => {
  const [validationError, setValidationError] = useState<string | undefined>()
  const _onInput: React.FormEventHandler<HTMLInputElement> = (evt) => {
    setValidationError(undefined)
    const value = (evt.target as HTMLInputElement).value
    if (Number.isNaN(Number.parseInt(value))) setValidationError('Number input expected')
    onInput?.(evt)
  }
  const disabled = loading || (validationError !== undefined)
  return <>
    <input type="text" placeholder='Salary' className={style["salary-input"]} value={value} onInput={_onInput} {...props} />
    {validationError && <div style={{ color: 'red' }}>{validationError}</div>}
    <button type="button" className={style["salary-input-button"]} onClick={onClick} disabled={disabled}>
      Get Tax Bracket
    </button>
  </>
}
