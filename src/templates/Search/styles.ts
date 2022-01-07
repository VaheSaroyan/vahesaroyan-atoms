import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.08,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '2%',
  },
  body: { flex: 1, paddingHorizontal: '2%' },
  scrollableBody: {
    flex: 1,
  },
  footer: { flex: 0.1, paddingHorizontal: '2%' },
  scrollableBodyWrapper: { paddingHorizontal: '2%' },
});
