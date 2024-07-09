/**
 *
 * TextBlur
 *
 */
import { styled } from '@mui/material'
import { memo, useState } from 'react'
import { Button } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

interface Props {
  text: string
}

const P = styled('p')`
  overflow: hidden;
  text-overflow: ellipsis;
`

// eslint-disable-next-line react/display-name
export const TextBlur = memo(({ text }: Props) => {
  const [hover, setHover] = useState(false)
  const length = text.length - 4

  return (
    <P>
      {hover ? text : '********' + text.slice(length)}
      <Button
        startIcon={
          hover ? (
            <VisibilityOffIcon
              sx={{
                color: 'var(--textblack)',
              }}
            />
          ) : (
            <VisibilityIcon
              sx={{
                color: 'var(--textblack)',
              }}
            />
          )
        }
        onClick={() => setHover(!hover)}
      />
    </P>
  )
})
