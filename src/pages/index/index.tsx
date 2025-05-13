import { View, Text, ScrollView, Image, Input, Button } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import Taro from '@tarojs/taro';
import './index.scss';

const mockTravelLogs = [
  {
    id: '1',
    title: '我的第一次旅行',
    author: '用户A',
    avatar: 'https://via.placeholder.com/50',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: '2',
    title: '探索自然',
    author: '用户B',
    avatar: 'https://via.placeholder.com/50',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: '3',
    title: '城市漫步',
    author: '用户C',
    avatar: 'https://via.placeholder.com/50',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: '4',
    title: '海边假日',
    author: '用户D',
    avatar: 'https://via.placeholder.com/50',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: '5',
    title: '山间小路',
    author: '用户E',
    avatar: 'https://via.placeholder.com/50',
    image: 'https://via.placeholder.com/300x200',
  },
];

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  const navigateToLogin = () => {
    Taro.navigateTo({ url: '/pages/login/index' });
  };

  return (
    <View className='index'>
      <View className='header'>
        <Input className='search-bar' placeholder='搜索游记...' />
        <Button className='login-button' onClick={navigateToLogin}>登录</Button>
      </View>
      <ScrollView className='travel-log-list' scrollY>
        {mockTravelLogs.map((log) => (
          <View key={log.id} className='travel-log-card'>
            <Image className='travel-log-image' src={log.image} mode='aspectFill' />
            <View className='travel-log-content'>
              <Text className='travel-log-title'>{log.title}</Text>
              <View className='travel-log-author'>
                <Image className='author-avatar' src={log.avatar} mode='aspectFill' />
                <Text className='author-name'>{log.author}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
