import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

type IconSize = 'sm' | 'md' | 'lg'

interface FontAwesomeIconProps extends React.HTMLAttributes<HTMLElement> {
  iconName: string
  iconType?: string
  size?: IconSize
}

const FontAwesomeIcon: React.FC<FontAwesomeIconProps> = ({ iconName, iconType, size, className, ...props }) => {
  const iconClassName = `fa-icon ${iconType || 'fas'} ${iconName}`

  return <Icon {...props} className={classNames(iconClassName, className)} size={size} />
}

export default FontAwesomeIcon

const Icon = styled.i<{ size?: IconSize }>`
  cursor: pointer;
  font-size: ${(p) => (p.size === 'sm' ? '12px' : p.size === 'lg' ? '24px' : '16px')};
`
