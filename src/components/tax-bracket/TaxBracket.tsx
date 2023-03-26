import React from 'react'
import style from "./tax-bracket.module.css"

export interface TaxBracketProps {
  min: number
  max?: number
  rate: number
}

export interface TaxBracketListProps {
  tax_brackets: TaxBracketProps[]
}

export const TaxBracket = ({ min, max, rate, selected }: TaxBracketProps & { selected: boolean }) => {
  const formatter = new Intl.NumberFormat('en-EN')
  return <div className={`${style["tax-bracket"]}${selected ? ` ${style["selected"]}` : ''}`} data-testid={"tax-bracket"}>
    <label>
      Min: <span> ${formatter.format(min)} </span>
    </label>
    <label>
      Max: <span> { max ? `$${formatter.format(max)}` : 'NA'} </span>
    </label>
    <label>
      Tax Rate: <span> {formatter.format(rate)} </span>
    </label>
  </div>
}

export const TaxBracketList = ({ tax_brackets, salary }: TaxBracketListProps & { salary: string }) => {
  const _salary = Number.parseInt(salary)
  const selected = (min: number, salary: number, max?: number) => salary >= min && salary <= (max ?? Number.MAX_SAFE_INTEGER)
  return <div className={style["tax-bracket-container"]}>
    {
      tax_brackets.map(
        (bracket, index) => <TaxBracket
          {...bracket}
          selected={
            selected(bracket.min, _salary, bracket.max)
          }
          key={index}
        />
      )}
  </div>
}
