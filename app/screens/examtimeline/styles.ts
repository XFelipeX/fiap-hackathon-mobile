import { StyleSheet } from 'react-native';
import Colors from '@/app/constants/Colors';

const colors = Colors.dark;
const styles = StyleSheet.create({
  scrollview: {
    height: '100%',
    backgroundColor: colors.background,
  },
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
    marginBottom: 16,
  },
  dayContainer: {
    backgroundColor: colors.secondBackground,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '90%',
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  time: {
    color: '#ccc',
    fontSize: 14,
    width: '20%',
    textAlign: 'left',
  },
  subject: {
    color: colors.text,
    fontSize: 14,
    fontWeight: 'bold',
    width: '40%',
    textAlign: 'left',
  },
  teacher: {
    color: '#ccc',
    fontSize: 14,
    width: '40%',
    textAlign: 'right',
  },
});

export default styles;