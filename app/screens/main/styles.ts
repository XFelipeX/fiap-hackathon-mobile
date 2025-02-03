import { StyleSheet } from 'react-native';
import Colors from '@/app/constants/Colors'

const colors = Colors.dark;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'center',paddingTop: 30,
  },

  title:{
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',   
    marginBottom: 10,
  },

  lesson:{
    width: '90%',
    height: 150,
    backgroundColor: colors.secondBackground,
    margin: 10,
    padding: 15 ,
    borderRadius: 10,
    justifyContent: 'space-between',
  },

  text:{
    color: colors.text,
    marginTop: 5,
    fontSize: 16,
  },

  content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button:{
    backgroundColor: colors.logo,
    padding:5,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default styles;