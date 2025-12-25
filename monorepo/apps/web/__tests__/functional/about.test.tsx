import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Vitrine from '@/app/(protected)/vitrine/page'

describe('About', () => {
  it('renders a heading', () => {
    render(<Vitrine />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})