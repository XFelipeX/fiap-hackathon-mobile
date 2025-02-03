import { StyleSheet } from 'react-native';
import Colors from '@/app/constants/Colors';

const colors = Colors.dark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    alignItems: 'center',
    height: '100%',
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 25,
  },
  confirmationBox: {
    backgroundColor: '#28a745',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 8,
    marginBottom: 30,
    width: '100%',
    position: 'absolute',
    top: 100,
  },
  hiddenInput: {
    position: 'absolute',
    width: 0,
    height: 0,
    opacity: 0,
  },
  confirmationText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    width: '90%',
  },
  codeInput: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    textAlign: 'center',
    width: 30,
  },
  verifyButton: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 30,
    marginTop: 20,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
    bottom: 80,
  },
  footerText: {
    color: 'gray',
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'center',
  },
  center:{
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
  }
});

export default styles;