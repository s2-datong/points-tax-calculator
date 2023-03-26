import { render, screen } from '@testing-library/react'
import { TaxBracketList } from './TaxBracket'

describe('TaxBracketList component', () => {
  test('Proper Salary Bracket should be selected', () => {
    const tax_brackets = [
      {max:49020,min:0,rate:0.15},
      {max:98040,min:49020,rate:0.205},
    ]
    render(<TaxBracketList tax_brackets={tax_brackets} salary={"60000"} />)

    expect(screen.getAllByTestId("tax-bracket").length).toBe(2)
    expect(screen.getAllByTestId("tax-bracket")[1].classList.contains("selected")).toBe(true)
  })
})