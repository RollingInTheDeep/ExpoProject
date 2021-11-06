import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  editText: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 4,
    padding: 7,
    borderStyle: 'solid',
    borderColor: '#eedaea',
  },
  edit: {
    fontSize: 24,
    flex: 1,
    fontFamily: 'JuaRegular',
  },
  text: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'JuaRegular',
    textAlign: 'center',
  },
  caution: {
    flex: 0.5,
    paddingTop: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  btnAdd: {
    flex: 0.2,
  },
  editTitle: {
    flex: 0.1,
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#eedaea',
    borderWidth: 4,
    padding: 10,
    fontSize: 26,
  },
  contain: {},
});

export default styles;
