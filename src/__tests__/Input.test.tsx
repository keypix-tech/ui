import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '../components/atoms/Input'

describe('Input Component', () => {
  test('renders input with placeholder', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  test('handles value changes', () => {
    const handleChange = jest.fn()
    render(<Input onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalled()
  })

  test('shows label when provided', () => {
    render(<Input label="Email" />)
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  test('shows required indicator', () => {
    render(<Input label="Email" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  test('shows error state', () => {
    render(<Input error helperText="This field is required" />)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  test('shows helper text', () => {
    render(<Input helperText="Helper text" />)
    expect(screen.getByText('Helper text')).toBeInTheDocument()
  })

  test('applies correct CSS classes', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toHaveClass('keypix-input')
  })
}) 