import { StyleSheet } from 'react-native';
import Colors from '@/app/constants/Colors';

const colors = Colors.dark;

const styles = StyleSheet.create({
  container: {

  },

  menu: {
    width: '100%',
    height: 74,
    color: colors.text,
    backgroundColor: colors.headerBackground,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  menuItem:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuItemCenter:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    height: 100,
  },

  text:{
    color: colors.text,
    marginTop: 5,
  },

  personIcon:{
    backgroundColor: colors.logo,
    padding: 15,
    borderRadius: 50,
  }
});

export default styles;