import React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function PlayFootballIcon() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2" // Alterado para camelCase
      strokeLinecap="round" // Alterado para camelCase
      strokeLinejoin="round" // Alterado para camelCase
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <Path d="M3 17l5 1l.75 -1.5" />
      <Path d="M14 21v-4l-4 -3l1 -6" />
      <Path d="M6 12v-3l5 -1l3 3l3 1" />
      <Path d="M19.5 20a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" />
    </Svg>
  )
}
