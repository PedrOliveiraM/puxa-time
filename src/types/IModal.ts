export interface ModalProps {
  title: string
  description: string
  cancelText?: string
  confirmText?: string
  onCancel: () => void
  onConfirm: () => void
}
