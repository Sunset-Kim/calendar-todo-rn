import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};
