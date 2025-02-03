import { StyleSheet } from 'react-native';
import Colors from '@/app/constants/Colors';

const colors = Colors.dark;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
  },
  contactContainer:{
    width: '90%',
  },
  contact:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  text:{
    color: colors.text,
    fontSize: 22,
    marginLeft: 20,
  }
});

export default styles;