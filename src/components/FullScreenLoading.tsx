import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import LoadingIcon from './LoadingIcon'

interface FullScreenLoadingProps {
  loadingText?: string
}

const FullScreenLoading: React.FC<FullScreenLoadingProps> = ({ loadingText }) => {
  return createPortal(
    <FullScreenLoadingWrapper>
      <LoadingIcon loadingText={loadingText} />
    </FullScreenLoadingWrapper>,
    document.body
  )
}

export default FullScreenLoading

const FullScreenLoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
