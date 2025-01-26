import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/font-family';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.gray[100],
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  // Estilo para o card popular
  cardPopular: {
    borderWidth: 3,
    borderColor: colors.blue[300],
    shadowColor: colors.orange[900],
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  popularTag: {
    backgroundColor: colors.green[300],
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    position: 'absolute',
    top: 16,
    right: 16,
  },
  popularText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.white,
  },
  cardContent: {
    flexGrow: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.blue[300],
    marginBottom: 8,
  },
  currency: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blue[300],
    marginRight: 4,
  },
  originalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray[600],
    textDecorationLine: 'line-through',
    marginBottom: 8,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.blue[900],
    marginBottom: 8,
  },
  discountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.green[300],
    marginVertical: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: colors.gray[800],
    fontFamily: fontFamily.semiBold,
    marginBottom: 8,
  },
  billed: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: 8,
  },
  featuresContainer: {
    marginTop: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: colors.gray[800],
    marginLeft: 8,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray[800],
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.green[300],
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
});
