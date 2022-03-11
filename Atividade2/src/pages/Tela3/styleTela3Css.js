import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  helpContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingTop: 10,
    paddingRight: 10,
  },
  searchIcon: {
    paddingRight: 20,
  },
  lockContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: -20,
  },
  textContainer: {
    textAlign: 'center',
    fontSize: 13,
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#FDFDFDB9',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#FDFDFD48',
    borderRadius: 10,
    width: '90%',
    height: 60,
    fontSize: 20,
    paddingLeft: 15,
  },
  question: {
    fontSize: 13,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 280,
    fontWeight: 'bold',
    color: '#FDFDFDB9',
  },
  loginContainer: {
    flex: 6,
    justifyContent: 'flex-start',
    paddingTop: 20,
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
    color: '#584E4EB9',
    fontSize: 16,
  },
  btnInsta: {
    backgroundColor: 'white',
    width: '90%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#65146D81',
  },

  textLogin: {color: '#FDFDFDB9', margin: 10, fontWeight: 'bold'},

  btnOr: {
    margin: 10,
    backgroundColor: '#51135769',
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText2: {fontWeight: 'bold', color: '#FDFDFDB9', fontSize: 16},
  btnRepost: {
    backgroundColor: '#371A3A6E',
    width: '90%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#62156969',
  },
});

export default styles;
