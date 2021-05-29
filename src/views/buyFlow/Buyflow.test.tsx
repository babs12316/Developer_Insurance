import { render, screen } from '@testing-library/react'
import Buyflow, { ProductIds } from './Buyflow'

test('renders Buying product text', () => {
  render(<Buyflow productId={ProductIds.devIns} />)
  const textElement = screen.getByText(/Buying/i)
  expect(textElement).toBeInTheDocument()
})
