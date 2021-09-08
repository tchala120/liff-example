import HomePage from 'pages/home/HomePage'
import LiffPage from 'pages/liff/LiffPage'
import ProfilePage from 'pages/profile/ProfilePage'

type RouteKey = 'home' | 'liff' | 'profile'

interface RouteConfig {
  key: RouteKey
  path: string
  component: React.ComponentType
}

type RoutePath = {
  [key in RouteKey]: string
}

export const routePaths: RoutePath = {
  home: '/',
  liff: '/liff',
  profile: '/profile',
}

export const routes: RouteConfig[] = [
  {
    key: 'home',
    path: routePaths.home,
    component: HomePage,
  },
  {
    key: 'liff',
    path: routePaths.liff,
    component: LiffPage,
  },
  {
    key: 'profile',
    path: routePaths.profile,
    component: ProfilePage,
  },
]
