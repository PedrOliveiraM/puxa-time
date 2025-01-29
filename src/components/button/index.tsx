import { colors } from '@/styles/colors'
import { IconProps as tablerIconsProps } from '@tabler/icons-react-native'
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { s } from './styles'

type ButtonProps = TouchableOpacityProps & {
  variant?: 'success' | 'alert' | 'danger' | 'default' | 'disabled' | 'outline' // Definindo as variantes possíveis
  isLoading?: boolean
}

type IconProps = {
  icon: React.ComponentType<tablerIconsProps>
  color?: string
  variant?: ButtonProps['variant']
}

function Icon({ icon: Icon, color, variant = 'default' }: IconProps) {
  const getIconColor = () => {
    switch (variant) {
      case 'success':
        return colors.gray[100]
      case 'alert':
        return colors.gray[700]
      case 'danger':
        return colors.gray[100]
      case 'disabled':
        return colors.gray[100]
      case 'outline':
        return colors.gray[100]
      default:
        return colors.gray[100]
    }
  }

  return <Icon size={24} color={color || getIconColor()} />
}

function Button({
  children,
  style,
  variant = 'default',
  isLoading,
  ...rest
}: ButtonProps) {
  const getVariantStyle = () => {
    switch (variant) {
      case 'success':
        return s.success
      case 'alert':
        return s.alert
      case 'danger':
        return s.danger
      case 'disabled':
        return s.disabled
      case 'outline':
        return s.outline
      default:
        return s.default // Variantes padrão, caso nenhuma seja passada
    }
  }

  return (
    <TouchableOpacity
      style={[s.container, getVariantStyle(), style]} // Aplicando a variante
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size={'small'} color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

function Title({
  children,
  style,
  color,
  variant = 'default',
  ...rest
}: TextProps & { color?: string; variant?: ButtonProps['variant'] }) {
  const getTitleColor = () => {
    switch (variant) {
      case 'success':
        return colors.gray[100]
      case 'alert':
        return colors.gray[700]
      case 'danger':
        return colors.gray[100]
      case 'disabled':
        return colors.gray[100]
      case 'outline':
        return colors.gray[100]
      default:
        return colors.gray[100]
    }
  }

  return (
    <Text style={[s.title, { color: color || getTitleColor() }, style]} {...rest}>
      {children}
    </Text>
  )
}

Button.Title = Title
Button.Icon = Icon

export { Button }
