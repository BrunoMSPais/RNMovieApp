import React, { ReactNode } from 'react';
import { NetworkProvider } from 'react-native-offline';

export const NetworkContext = React.createContext({ isConnected: true });

export const NetworkConsumer = NetworkContext.Consumer;

export function NetworkProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <NetworkProvider>
      <NetworkConsumer>
        {({ isConnected }) => (
          <NetworkContext.Provider value={{ isConnected }}>
            {children}
          </NetworkContext.Provider>
        )}
      </NetworkConsumer>
    </NetworkProvider>
  );
}