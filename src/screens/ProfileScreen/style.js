import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#e5e2e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    display: 'flex',
    width: '100%',
    height: '30%',
  },
  nickname: {
    display: 'flex',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#e5e2e9',
  },
  linear: {
    display: 'flex',
    width: '100%',
    height: '6%',
    marginTop: 6,
    marginBottom: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'JuaRegular',
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center',
  },
  list: {
    display: 'flex',
    height: '60%',
  },
  count: {
    fontFamily: 'JuaRegular',
    fontSize: 18,
    display: 'flex',
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default styles;
