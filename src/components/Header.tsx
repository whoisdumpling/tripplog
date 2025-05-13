import React from 'react';
import { View, Text } from '@tarojs/components';
import './Header.scss';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View className="header">
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
