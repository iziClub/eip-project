import '@testing-library/jest-dom'
import { render, screen } from '../utils'
import Vitrine from '@/app/(protected)/vitrine/page'

describe('Vitrine', () => {
  it('renders all tab buttons', () => {
    render(<Vitrine />)

    expect(screen.getByRole('tab', { name: 'Informations' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Gallerie' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Calendrier' })).toBeInTheDocument()
  })
})