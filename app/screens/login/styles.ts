import { StyleSheet } from 'react-native';
import Colors from '@/app/constants/Colors';


const colors = Colors.dark;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
    padding: 8,
  },
  loginButton: {
    backgroundColor: colors.buttonBackground,
    width: 200,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  biometricsButton: {
    flexDirection: 'row',
    backgroundColor: colors.buttonBackground,
    width: 280,
    padding: 25,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  biometricsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 30,
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  divider:{
    width: '100%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    position: 'relative',
    top: 200,
  },
  header:{
    width: '100%',
    alignItems: 'center',
  }
});

export default styles;