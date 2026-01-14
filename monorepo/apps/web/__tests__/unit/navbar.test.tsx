import '@testing-library/jest-dom'
import { render, screen } from '../utils'
import Navbar from '@/components/layouts/Navbar'

describe('Navbar', () => {
    it('renders a logo', () => {
        render(<Navbar />)

        const logo = screen.getByRole('img', { name: 'Logo' })
        expect(logo).toBeInTheDocument()
    })

    it('renders navigation links', () => {
        render(<Navbar />)

        const statsLink = screen.getByRole('link', { name: 'Statistiques' })
        const vitrineLink = screen.getByRole('link', { name: 'Vitrine' })
        const eventsLink = screen.getByRole('link', { name: 'Événements' })
        const dashboardLink = screen.getByRole('link', { name: 'Tableau de bord' })
        const memberLink = screen.getByRole('link', { name: 'Membre' })

        expect(vitrineLink).toBeInTheDocument()
        expect(statsLink).toBeInTheDocument()
        expect(eventsLink).toBeInTheDocument()
        expect(dashboardLink).toBeInTheDocument()
        expect(memberLink).toBeInTheDocument()
    })
})