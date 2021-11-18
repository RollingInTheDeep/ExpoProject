import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    height: '60%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  btn: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height: 35,
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-between',
  },
  container: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    width: '100%',
    borderBottomWidth: 1,
  },
  icon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 4,
    top: 0,
  },
  headerText: {
    fontFamily: 'JuaRegular',
    fontSize: 18,
    marginRight: 4,
  },
  addText: {
    fontFamily: 'JuaRegular',
    fontSize: 18,
    textAlign: 'center',
  },
  btnAdd: {
    padding: 5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  editText: {
    flex: 1,
    fontFamily: 'JuaRegular',
    fontSize: 18,
    color: '#000',
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
    marginRight: 5,
  },
  list: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: '2%',
    padding: 8,
    borderBottomWidth: 1,
  },
  replyText: {
    fontFamily: 'JuaRegular',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  date: {
    fontFamily: 'KalamRegular',
    position: 'absolute',
    right: 2,
    bottom: 0,
  },
  paragraph: {
    flex: 1,
    marginLeft: 10,
    marginBottom: 3,
  },
});

export default styles;
