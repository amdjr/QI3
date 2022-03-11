import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bkg1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3b5998',
    width: '100%',
  },
  text1: {
    fontFamily: 'Futura',
    fontSize: 45,
    color: 'white',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
  },
  containerLogin: {
    backgroundColor: 'white',
    height: 45,
    borderRadius: 5,
    elevation: 10,
    width: '80%',
    marginTop: 30,
    marginBottom: 6,
  },
  containerInput: {
    backgroundColor: 'white',
    height: 45,
    borderRadius: 5,
    elevation: 10,
    width: '80%',
    marginTop: 5,
    marginBottom: 12,
  },
  inputText: {
    paddingLeft: 15,
    color: 'gray',
  },

  btnSubmit: {
    justifyContent: 'center',
    width: '80%',
    height: 47,
    textAlign: 'center',
    backgroundColor: '#09080C42',
    borderRadius: 5,
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cadastro: {
    marginTop: 10,
    fontSize: 18,
    color: '#FCFCFC8F',
    textAlign: 'center',
    paddingBottom: 20,
  },
});
export default styles;
