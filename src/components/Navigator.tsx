import * as React from 'react'
import { BaseNavigationContainer } from '@react-navigation/core'
import { stackNavigatorFactory } from 'react-nativescript-navigation'
import { MainStackParamList } from './NavigationParamList'
import { HomeScreen } from './HomeScreen'

const StackNavigator = stackNavigatorFactory()

export const mainStackNavigator = () => {
  return (
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true
        }}
      >
        <StackNavigator.Screen
          name="Home"
          options={{
            title: 'NativeFlix'
          }}
          component={HomeScreen}
        />
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  )
}
