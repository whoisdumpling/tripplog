import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const navigateToLogin = () => {
    Taro.navigateTo({ url: '/pages/login/index' });
  };

  return (
    <View className='index'>
      <Button className='login-button' onClick={navigateToLogin}>登录</Button>
      <View className='content'>
        <Text>游记列表页面</Text>
      </View>
    </View>
  )
}
