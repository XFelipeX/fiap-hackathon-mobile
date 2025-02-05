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
    paddingVertical: 40,
    width: '100%',
    borderRadius: 4,
  },
  info:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
  },
  text:{
    color:colors.text,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  subtitle:{
    color:colors.text,
    textAlign: 'left',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    gap: 16,
  },
  grades:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
  },
  grade:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 8,
    borderRadius: 4,
  },
  fouls:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 8,
    borderRadius: 4,
    width: '48%',
  }
});

export default styles;