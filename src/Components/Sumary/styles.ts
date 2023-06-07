import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green' | 'orange' | 'blue'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-900']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-900']};
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-500']};
    `}
  ${(props) =>
    props.variant === 'blue' &&
    css`
      background: ${props.theme['blue-700']};
    `}
    ${(props) =>
    props.variant === 'orange' &&
    css`
      background: ${props.theme['orange-500']};
    `}
`
