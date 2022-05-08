import React, { memo } from 'react'
import { Card as CardUI } from '../../../components'
// Na aplicação os Cards são elementos de cartões com as estatísticas carregadas
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled
} from './style'

function Card({ value, label, color }) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)