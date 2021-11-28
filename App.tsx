import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import { stylesCommon } from './styles';

export default function App() {
  return (
    <SafeAreaView style={[stylesCommon.container]}>
      <ScrollView contentContainerStyle={styles.contents}>
        <ProfilePage />
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contents: {
    ...stylesCommon.vertical,
    justifyContent: 'flex-start'
  }
})