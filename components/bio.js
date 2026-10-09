import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 7.5em;
  text-indent: -7.5em;
  margin-bottom: 0.45em;

  @media (min-width: 30em) {
    padding-left: 11.5em;
    text-indent: -11.5em;
  }
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`
