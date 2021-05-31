import { render, screen } from '@testing-library/react'
import Buyflow from './Buyflow'
import {ProductIds} from '../../shared/Constants'

test('renders Buying product text', () => {
  render(<Buyflow productId={ProductIds.devIns} />)
  const textElement = screen.getByText(/Buying/i)
  expect(textElement).toBeInTheDocument()
})
