import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },

  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 10,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
  },

  label: {
    fontSize: 11,
    color: '#777',
    marginTop: 2,
  },

  activeLabel: {
    color: '#0F9D58',
    fontWeight: '600',
  },

  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0F9D58',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -28,

    shadowColor: '#0F9D58',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
});
