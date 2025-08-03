import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from './index';

// Create a test theme to wrap the component
const theme = createTheme();

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

describe('Button Component', () => {
  const defaultProps = {
    children: 'Test Button',
  };

  it('renders with default props', () => {
    render(
      <TestWrapper>
        <Button {...defaultProps} />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('flex', 'gap-2', 'flex-row', 'items-center');
  });

  it('renders with custom className', () => {
    render(
      <TestWrapper>
        <Button {...defaultProps} className="custom-class" />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('custom-class');
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <TestWrapper>
        <Button {...defaultProps} variant="contained" />
      </TestWrapper>
    );
    
    let button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();

    rerender(
      <TestWrapper>
        <Button {...defaultProps} variant="outlined" />
      </TestWrapper>
    );
    
    button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();

    rerender(
      <TestWrapper>
        <Button {...defaultProps} variant="text" />
      </TestWrapper>
    );
    
    button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <TestWrapper>
        <Button {...defaultProps} size="sm" />
      </TestWrapper>
    );
    
    let button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('h-[38px]');

    rerender(
      <TestWrapper>
        <Button {...defaultProps} size="md" />
      </TestWrapper>
    );
    
    button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('h-[50px]');

    rerender(
      <TestWrapper>
        <Button {...defaultProps} size="lg" />
      </TestWrapper>
    );
    
    button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('h-[60px]');
  });

  it('renders with different shapes', () => {
    const { rerender } = render(
      <TestWrapper>
        <Button {...defaultProps} shape="round" />
      </TestWrapper>
    );
    
    let button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('!rounded-md');

    rerender(
      <TestWrapper>
        <Button {...defaultProps} shape="square" />
      </TestWrapper>
    );
    
    button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('!rounded-[0px]');

    rerender(
      <TestWrapper>
        <Button {...defaultProps} shape="circle" />
      </TestWrapper>
    );
    
    button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('!rounded-[50%]');
  });

  it('renders with different colors', () => {
    const { rerender } = render(
      <TestWrapper>
        <Button {...defaultProps} color="primary" />
      </TestWrapper>
    );
    
    let button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();

    rerender(
      <TestWrapper>
        <Button {...defaultProps} color="secondary" />
      </TestWrapper>
    );
    
    button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();

    rerender(
      <TestWrapper>
        <Button {...defaultProps} color="error" />
      </TestWrapper>
    );
    
    button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
  });

  it('renders with left icon', () => {
    const leftIcon = <span data-testid="left-icon">🚀</span>;
    
    render(
      <TestWrapper>
        <Button {...defaultProps} leftIcon={leftIcon} />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button', { name: '🚀 Test Button' });
    const icon = screen.getByTestId('left-icon');
    
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement).toHaveClass('text-xl', 'mt-1');
  });

  it('renders with right icon', () => {
    const rightIcon = <span data-testid="right-icon">⭐</span>;
    
    render(
      <TestWrapper>
        <Button {...defaultProps} rightIcon={rightIcon} />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button', { name: 'Test Button ⭐' });
    const icon = screen.getByTestId('right-icon');
    
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement).toHaveClass('text-xl', 'mt-1');
  });

  it('renders with both left and right icons', () => {
    const leftIcon = <span data-testid="left-icon">🚀</span>;
    const rightIcon = <span data-testid="right-icon">⭐</span>;
    
    render(
      <TestWrapper>
        <Button {...defaultProps} leftIcon={leftIcon} rightIcon={rightIcon} />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button', { name: '🚀 Test Button ⭐' });
    const leftIconElement = screen.getByTestId('left-icon');
    const rightIconElement = screen.getByTestId('right-icon');
    
    expect(button).toBeInTheDocument();
    expect(leftIconElement).toBeInTheDocument();
    expect(rightIconElement).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    
    render(
      <TestWrapper>
        <Button {...defaultProps} onClick={handleClick} />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button', { name: 'Test Button' });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('passes through additional props', () => {
    render(
      <TestWrapper>
        <Button {...defaultProps} data-testid="custom-button" disabled />
      </TestWrapper>
    );
    
    const button = screen.getByTestId('custom-button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('renders without children', () => {
    render(
      <TestWrapper>
        <Button />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
}); 