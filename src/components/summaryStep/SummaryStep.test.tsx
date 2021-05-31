import { render, screen } from '@testing-library/react'
import SummaryStep from './SummaryStep'

const collectedData = {
  email: 'test@test.com',
  age: 22,
  name: {
    firstName: 'John',
    lastName: 'Wick',
  },
}

test('renders user information', () => {
  render(<SummaryStep collectedData={collectedData} />)
  const email = screen.getByText('Email: test@test.com')
  expect(email).toBeInTheDocument()
  const age = screen.getByText('Age: 22')
  expect(age).toBeInTheDocument()
  const firstName = screen.getByText('FirstName: John')
  expect(firstName).toBeInTheDocument()
  const lastName = screen.getByText('LastName: Wick')
  expect(lastName).toBeInTheDocument()
})

test('renders Purchase link', () => {
  render(<SummaryStep collectedData={collectedData} />)
  const linkElement = screen.getByText('Purchase')
  expect(linkElement).toBeInTheDocument()
})
