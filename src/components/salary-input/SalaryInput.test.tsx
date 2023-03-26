import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { SalaryInput } from './SalaryInput'

describe("SalaryInput Component", () => {
  test("input validation should expect numbers", () => {
    render(<SalaryInput /> )

    act(() => {
      userEvent.click(screen.getByPlaceholderText('Salary'))
      userEvent.keyboard("abcd")
    })
    
    expect(screen.getByText("Number input expected")).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeDisabled()
  })

  test("button disabled when loading", () => {
    render(<SalaryInput loading={true} /> )
    expect(screen.getByRole('button')).toBeDisabled()
  })
})