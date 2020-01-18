import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

const Popup = () => {
  return <>
    <Link to="/">打开首页</Link>
    <Button>解析图片</Button>
    <Input>解析图片</Input>
  </>
}

export default memo(Popup)
