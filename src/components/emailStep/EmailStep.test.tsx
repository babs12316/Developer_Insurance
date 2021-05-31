import { render, screen } from '@testing-library/react'
import EmailStep from './EmailStep'

test('renders Age text', () => {
  const getStepCallback = jest.fn()
  render(<EmailStep cb={getStepCallback('summary')} />)
  const email = screen.getByText('Email:')
  expect(email).toBeInTheDocument()
})
