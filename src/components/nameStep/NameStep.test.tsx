import { render, screen, fireEvent } from '@testing-library/react'
import NameStep from './NameStep'

const setup = () => {
  const getStepCallback = jest.fn()
  const utils = render(<NameStep cb={getStepCallback('email')} />)
  const firstNameInput = utils.getByLabelText('firstName-input')
  const lastNameInput = utils.getByLabelText('lastName-input')
  return {
    firstNameInput,
    lastNameInput,
    ...utils,
  }
}

test('renders first name and last name', () => {
  const getStepCallback = jest.fn()
  render(<NameStep cb={getStepCallback('email')} />)
  const firstName = screen.getByText('First Name:')
  expect(firstName).toBeInTheDocument()
  const lastName = screen.getByText('Last Name:')
  expect(lastName).toBeInTheDocument()
})

test('button should enable if first name and last name are not empty', () => {
  let { firstNameInput, lastNameInput } = setup()

  const firstName = firstNameInput as HTMLInputElement
  expect(firstName.value).toBe('') // empty before

  const lastName = lastNameInput as HTMLInputElement
  expect(lastName.value).toBe('') // empty before

  expect(screen.getByRole('button')).toBeDisabled() // should be disabled as names are empty

  fireEvent.change(firstNameInput, { target: { value: 'John' } })
  fireEvent.change(lastNameInput, { target: { value: 'wick' } })

  expect(screen.getByRole('button')).not.toBeDisabled()
})
