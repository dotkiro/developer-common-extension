import React, { memo } from 'react'
import styled from 'styled-components'
import Block from './Block'


const Wraper = styled(Block)({
  marginLeft: 130,
  marginTop: 30,

  display:'inline-flex',
  borderRadius: 4,
  boxShadow: '0 0 2px 0 rgba(0,0,0,0.2)',
  ':focus': {
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.4)',
  }
})

const InputArea = styled('input')({
  display: 'block',
  width: '100%',
  padding: 12,
  fontSize: 'inherit',
  color: 'inherit',
  borderRadius: 4,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'none',
  border: 'none',
  outline: 'none',
})

const Input = () => {
  return <Wraper>
    <InputArea/>
  </Wraper>
}

export default memo(Input)
