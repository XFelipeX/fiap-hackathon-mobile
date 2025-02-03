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
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
  },
  headerRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  listContainer: {
    backgroundColor: colors.secondBackground,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '100%',
  },
  date:{
    alignSelf: 'flex-end',
    color: colors.text,
    paddingVertical: 8,
  },
  message:{
    color: colors.text,
    fontSize: 16,
  }
});

export default styles;