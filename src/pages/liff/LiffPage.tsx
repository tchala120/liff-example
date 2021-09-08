import React, { useEffect, useState } from 'react'
import liff from '@line/liff'

import FullScreenLoading from 'components/FullScreenLoading'

const LiffPage: React.FC = () => {
  const [isLineLoggedIn, setIsLineLoggedIn] = useState(false)

  useEffect(() => {
    if (!liff.isLoggedIn()) {
      liff.login()
    } else {
      setIsLineLoggedIn(true)

      setTimeout(() => {
        window.open('https://google.com', '_self')
      }, 2000)
    }
  }, [isLineLoggedIn])

  return (
    <FullScreenLoading loadingText={isLineLoggedIn ? 'กำลังเข้าสู่ระบบ...' : 'กำลังพาไปหน้าเข้าสู่ระบบด้วย LINE'} />
  )
}

export default LiffPage
