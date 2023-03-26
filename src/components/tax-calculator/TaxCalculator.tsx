import React, { useState } from 'react'
import { useGetTaxBrackets } from '@/hooks/useGetTaxBrackets'
import { type Errors } from '@/components/error/Error'
import { SalaryInput } from '@/components/salary-input'
import { type TaxBracketListProps } from '@/components/tax-bracket'
import { TaxResult } from '@/components/TaxResult'
import style from "./tax-calculator.module.css"

export const TaxCalculator = () => {
  const [salary, setSalary] = useState('0')
  const [data, loading, error, getTaxBracket] = useGetTaxBrackets<TaxBracketListProps, Errors>()

  return (
    <div className={style["tax-calculator-container"]}>
      <div className={style["salary-input-container"]}>
        <SalaryInput
          value={salary}
          onClick={getTaxBracket}
          loading={loading}
          onInput={(evt) => { setSalary((evt.target as HTMLInputElement).value) }}
        />
      </div>
      <div className={style["result-display-container"]}>
        <TaxResult
          data={data}
          loading={loading}
          error={error}
          salary={salary}
        />
      </div>
    </div>
  )
}
