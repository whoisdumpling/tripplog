import React, { useState } from 'react';
import { View, Text, Input, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // 从存储中获取用户列表
    const existingUsers = Taro.getStorageSync('users') || [];

    // 验证用户名和密码
    const user = existingUsers.find((user) => user.username === username && user.password === password);
    if (user) {
      Taro.showToast({ title: '登录成功', icon: 'success' });
      Taro.navigateTo({ url: '/pages/index/index' });
    } else {
      Taro.showToast({ title: '用户名或密码错误', icon: 'error' });
    }
  };

  const handleRegister = () => {
    // 从存储中获取现有用户列表
    const existingUsers = Taro.getStorageSync('users') || [];

    // 检查用户名是否已存在
    const userExists = existingUsers.some((user) => user.username === username);
    if (userExists) {
      Taro.showToast({ title: '用户名已存在', icon: 'error' });
      return;
    }

    // 添加新用户到用户列表
    const newUser = { username, password };
    existingUsers.push(newUser);
    Taro.setStorageSync('users', existingUsers);

    Taro.showToast({ title: '注册成功', icon: 'success' });
  };

  return (
    <View className="page">
      <Text className="title">登录注册页面</Text>
      <View className="form">
        <Input
          className="input"
          type="text"
          placeholder="用户名"
          value={username}
          onInput={(e) => setUsername(e.detail.value)}
        />
        <View className="password-container">
          <Input
            className="input"
            type="text"
            password={!showPassword}
            placeholder="密码"
            value={password}
            onInput={(e) => setPassword(e.detail.value)}
          />
          <Text
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '隐藏' : '显示'}
          </Text>
        </View>
        <View className="button-container">
          <Button className="button" onClick={handleLogin}>登录</Button>
          <Button className="button" onClick={handleRegister}>注册</Button>
        </View>
      </View>
    </View>
  );
};

export default Login;
