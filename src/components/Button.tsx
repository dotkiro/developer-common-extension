import React, { memo } from 'react'
import styled from 'styled-components'
import Block from './Block'

const Button = styled(Block)({
  display: 'inline-flex',
  padding: 12,
  borderRadius: 4,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  boxShadow: '1px 1px 4px 0 rgba(0,0,0,0.2)',
  ":hover": {
    boxShadow: '1px 1px 4px 0 rgba(0,0,0,0.3)',
  },
  ':active': {
    filter: 'contrast(0.8) opacity(0.8)',
  }
})

export default memo(Button)
