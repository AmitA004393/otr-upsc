import React from 'react'

import { Link } from 'react-router-dom'
import { CardStyle } from './cardStyle'
import styled from 'styled-components'
// import { color } from '@/app/styles/global-styles'


interface DataObject {
  icon: any
  color: string
  label: string
  link: string
  text: string
  iconBg: string
}

interface CardProps {
  data: DataObject
}

const SpanText = styled('span')`
  color: "#ccccc";
`

const Card: React.FC<CardProps> = ({ data }) => {
  const { icon, color, label, link, text, iconBg } = data

  return (
    <CardStyle style={{ borderColor: "gray", display: 'block' }}>
      <Link to="#" className="text">
        <div className="cardLayout">
          <div className="icon-container" style={{ backgroundColor: iconBg }}>
            {icon}
          </div>
          <div className="content">
            <div className="label" style={{ color: color }}>
              {label}
            </div>

            <SpanText>{text}</SpanText>
          </div>
        </div>
      </Link>
    </CardStyle>
  )
}

export default Card
