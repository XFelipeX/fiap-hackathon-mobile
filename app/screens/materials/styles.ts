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
    marginBottom: 25,
  },
  row: {
    flexDirection: 'column',
    backgroundColor: colors.secondBackground,
    padding: 16,
    paddingVertical: 28,
    width: '48%',
    borderRadius: 4,
  },
  text:{
    color:colors.text,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: colors.secondBackground,
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    gap: 16,
  },
});

export default styles;