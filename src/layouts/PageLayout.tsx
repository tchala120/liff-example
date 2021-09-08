import React from 'react'
import styled from 'styled-components'

const PageLayout: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default PageLayout

const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 768px;
`
