import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import PageLayout from 'layouts/PageLayout'

import { routePaths } from 'pages/routeConfig'
import FontAwesomeIcon from 'components/FontAwesomeIcon'

const HomePage: React.FC = () => {
  const history = useHistory()

  return (
    <PageLayout>
      <HomePageWrapper>
        <h1>Home page</h1>

        <Button
          type="primary"
          onClick={() => history.push(routePaths.liff)}
          icon={<FontAwesomeIcon iconType="fab" iconName="fa-line" />}
        >
          Login with line
        </Button>
      </HomePageWrapper>
    </PageLayout>
  )
}

export default HomePage

const HomePageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
