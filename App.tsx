import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/navigation/inde';
import { SQLiteProvider } from 'expo-sqlite';
import { InitializerDatabase } from './src/database';

export default function App() {
  return (
    <SQLiteProvider databaseName="test.db" onInit={InitializerDatabase}>
      <RootNavigation />
    </SQLiteProvider>
  );
}