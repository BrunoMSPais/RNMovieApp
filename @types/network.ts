import { ReactNode } from 'react'

export type TNetworkState = {
  isConnected: boolean,
}

export type NetworkConsumerProps = {
  children: ({ isConnected }: TNetworkState) => ReactNode
}