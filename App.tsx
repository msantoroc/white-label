import { useEffect } from 'react'
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import BootSplash from 'react-native-bootsplash'

interface FlavorNameProps {
  [key: string]: string
}

const flavorName: FlavorNameProps = {
  'com.br.app1': 'App 1',
  'com.br.app2': 'App 2',
}
const bundleId = DeviceInfo.getBundleId()
const appName = flavorName[bundleId]

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  useEffect(() => {
    BootSplash.hide({ fade: true })
  }, [])

  return (
    <SafeAreaView
      style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>This is {appName}</Text>
    </SafeAreaView>
  )
}

export default App
