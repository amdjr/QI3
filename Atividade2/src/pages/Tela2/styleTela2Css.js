import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 8,
    backgroundColor: '#102F74D0',
    alignItems: 'flex-start',
    height: '10%',
  },
  searchStyle: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: null,
    elevation: null,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  bkgDivUp: {
    width: '100%',
    height: '34%',
    backgroundColor: '#939EB6CE',
  },
  bkgDivDown: {
    width: '100%',
    height: '47%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 8,
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#C0CFE4',
    position: 'absolute',
    marginTop: 280,
    marginLeft: 123,
    borderColor: 'white',
    borderWidth: 4,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 120,
    color: '#4D5975B7',
  },

  text1: {
    fontSize: 15,
    color: '#4D5975B7',
    marginRight: 180,
  },
  containerlinks: {
    flexDirection: 'row',
    height: '22%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    elevation: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#3E6DDB02',
    paddingBottom: 15,
  },

  bkg3: {
    flexDirection: 'row',
    height: '10%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#444',
  },

  bkgContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  btnText: {
    width: '33.33%',
    height: '100%',
    backgroundColor: '#E4E4E4',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 10,
    color: '#4D5975B7',
  },
});
export default styles;
