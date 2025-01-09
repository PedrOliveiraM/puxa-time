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
  variant?: 'success' | 'alert' | 'danger' | 'default' // Definindo as variantes possíveis
  isLoading?: boolean
}

type IconProps = {
  icon: React.ComponentType<tablerIconsProps>
  color?: string
}

function Icon({ icon: Icon, color }: IconProps) {
  return <Icon size={24} color={color} />
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

function Title({ children }: TextProps) {
  return <Text style={s.title}>{children}</Text>
}

Button.Title = Title
Button.Icon = Icon

export { Button }
