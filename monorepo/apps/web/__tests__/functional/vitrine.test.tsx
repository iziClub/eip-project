import '@testing-library/jest-dom'
import { render, screen } from '../utils'
import Vitrine from '@/app/(protected)/vitrine/page'

describe('Vitrine', () => {
  it('renders a heading', () => {
    render(<Vitrine />)
 
    const heading = screen.getByRole('', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})