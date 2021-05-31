import { render, screen } from '@testing-library/react'
import AgeStep from './AgeStep'

test('renders Age text', () => {
  const getStepCallback = jest.fn()
  render(<AgeStep cb={getStepCallback('email')} />)
  const age = screen.getByText('Age:')
  expect(age).toBeInTheDocument()
})
