import React from 'react'
import { ConfigProvider } from 'antd'
import { changeAntdTheme } from 'dynamic-antd-theme'

import 'antd/dist/antd.css'

import 'liff'

import PageRouter from 'pages/PageRouter'

changeAntdTheme('#00b900')

const App: React.FC = () => {
  return (
    <ConfigProvider componentSize="large">
      <PageRouter />
    </ConfigProvider>
  )
}

export default App
