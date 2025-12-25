import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/layouts/Navbar'

describe('Navbar', () => {
    it('renders a heading', () => {
        render(<Navbar />)

        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toBeInTheDocument()
    })

    it('renders navigation links', () => {
        render(<Navbar />)

        const homeLink = screen.getByRole('link', { name: /home/i })
        expect(homeLink).toBeInTheDocument()
    })
})