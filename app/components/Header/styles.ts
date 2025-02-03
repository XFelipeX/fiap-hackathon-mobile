import { StyleSheet } from 'react-native';
import Colors from '@/app/constants/Colors'

const colors = Colors.dark;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: 50,
  },
  menu: {
    width: 33,
    height: 33,
    color: colors.text
  },
  menuIcon: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    backgroundColor: colors.headerBackground,
    paddingHorizontal: 24,
    paddingVertical: 15,
  },
  logo: {
    color: colors.logo,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: colors.headerBackground,
  },
  sidebar: {
    top: 115,
    left: 28,
    width: '60%',
    height: 280,
    backgroundColor: colors.thirdBackground  ,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    zIndex: 999,
    borderRadius: 10,
    position: 'absolute',
  },
  sidebarItems: {
    color: colors.text,
    fontSize: 20,
    padding: 8
  }
})

export default styles;