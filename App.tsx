import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import { stylesCommon } from './styles';

export default function App() {
  return (
    <SafeAreaView style={[stylesCommon.container, stylesCommon.vertical]}>
      <ProfilePage />
      <Navbar />
    </SafeAreaView>
  );
}