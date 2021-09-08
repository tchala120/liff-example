import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import styled from 'styled-components'

interface LoadingIconProps {
  loadingText?: string
  size?: number
}

const LoadingIcon: React.FC<LoadingIconProps> = ({ loadingText, size }) => {
  const antdLoadingIcon = <LoadingOutlined style={{ fontSize: size || 48 }} spin />

  return <CustomSpinIcon indicator={antdLoadingIcon} tip={loadingText} />
}

export default LoadingIcon

const CustomSpinIcon = styled(Spin)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 1rem;
  }
`
