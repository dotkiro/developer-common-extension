import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Popup = () => {
  return <>
    <Link to="/">打开首页</Link>
    <div>解析图片</div>
  </>
}

export default memo(Popup)
