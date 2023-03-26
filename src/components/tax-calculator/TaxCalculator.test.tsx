import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import { getMockedFetch } from '../../test-util'
import { TaxCalculator } from './TaxCalculator'

let spiedMock: jest.SpyInstance
beforeEach(() => {
  spiedMock = jest.spyOn(global, 'fetch').mockImplementation(getMockedFetch(
    {
      "tax_brackets":[
        {"max":49020,"min":0,"rate":0.15},
        {"max":98040,"min":49020,"rate":0.205},
        {"max":151978,"min":98040,"rate":0.26},
        {"max":216511,"min":151978,"rate":0.29},
        {"min":216511,"rate":0.33}
      ]
    }
  ))
})

afterEach(() => {
  jest.clearAllMocks()
})

describe("TaxCalculator Component", () => {
  test("should display tax brackets when button is clicked", async () => {
    render(<TaxCalculator /> )

    await act(async () => {
      userEvent.click(screen.getByPlaceholderText('Salary'))
      userEvent.keyboard("100000")
      userEvent.click(screen.getByRole('button'))
      const sleep = () =>new Promise(resolve => setTimeout(resolve, 500))
      await sleep()
    })

    expect(screen.getAllByTestId("tax-bracket").length).toBe(5)
    expect(screen.getAllByTestId("tax-bracket")[2].classList.contains("selected")).toBe(true)
  })
})