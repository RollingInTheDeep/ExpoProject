import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginBottom: '2%',
    backgroundColor: '#e5e2e9',
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#8b00ff',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  btn: {
    position: 'absolute',
    left: 50,
  },
  container1: {
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    width: '100%',
    padding: 5,
    paddingLeft: 8,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#bbb',
    marginTop: 4,
    marginBottom: 4,
  },
  titleText: {
    margin: 5,
    fontFamily: 'JuaRegular',
    fontSize: 15,
  },
  container2: {
    flex: 1,
    padding: 15,
    width: '100%',
  },
  name: {
    fontFamily: 'JuaRegular',
    color: '#fff',
    fontSize: 16,
    padding: 8,
  },
  paragraph: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    fontFamily: 'JuaRegular',
  },
  text: {
    margin: 5,
    fontFamily: 'KalamRegular',
  },
  date: {
    fontFamily: 'KalamRegular',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'flex-end',
  },
  hashItem: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  profile: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 100,
    borderColor: '#8b00ff',
    borderWidth: 2,
  },
  edit: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#BBB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flexGrow: 1,
    width: '100%',
  },
});

export default styles;
