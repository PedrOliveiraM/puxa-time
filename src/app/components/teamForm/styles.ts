import { colors } from '@/styles/colors'
import { fontFamily } from '@/styles/font-family'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.text.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
  },
  input: {
    backgroundColor: colors.input.background,
    borderRadius: 8,
    padding: 15,
    marginBottom: 16,
    color: colors.input.text,
    width: '90%',
    minWidth: '100%',
  },
  textarea: {
    minHeight: 100,
    maxHeight: 200,
    textAlignVertical: 'top',
  },
  errorText: {
    color: colors.error,
    marginBottom: 16,
  },
  button: {
    backgroundColor: colors.button.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    minWidth: '100%',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: colors.text.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
})
