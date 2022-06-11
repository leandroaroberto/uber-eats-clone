import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import { SaferAreaView } from '../components/SaferAreaView'

export default function Home() {
  return (
    <SaferAreaView>
      <HeaderTabs/>
    </SaferAreaView>
  )
}