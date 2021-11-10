import { StyleSheet, Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#e5e2e9',
    opacity: 0.8,
  },
  storyContainer: {
    flex: 1,
  },
  maskedView: {
    minHeight: 60,
    justifyContent: 'center',
  },
  trendix: {
    fontFamily: 'KalamRegular',
    fontSize: 40,
    flex: 1,
  },
  text: {
    fontFamily: 'JuaRegular',
    fontSize: 24,
  },
  list: {
    minHeight: 60,
    width: '100%',
    marginBottom: 10,
  },
  profile: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 100,
    borderColor: '#ed0086',
    borderWidth: 4,
  },
  storyHeader: {
    padding: 3,
  },
});

export default styles;
