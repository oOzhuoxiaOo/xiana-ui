type XAlertDialogType = 'default' | 'success' | 'warning' | 'error'

interface XAlertDialogProps {
    title?: string
    description?: string
    cancelText?: string
    confirmText?: string
    onConfirm?: () => any
    type?: XAlertDialogType
}

export type {
    XAlertDialogType,
    XAlertDialogProps
}