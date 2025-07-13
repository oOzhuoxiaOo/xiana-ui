// src/components/ui/modal/useModal.ts
import { createApp, h, reactive } from 'vue';
import XALertDialog from './XALertDialog.vue';
import type { XAlertDialogProps } from './index.d';

export function openModal(options: XAlertDialogProps) {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const state = reactive({
        open: true,
        type: options.type || 'default',
        title: options.title || '',
        description: options.description || '',
        cancelText: options.cancelText || '',
        confirmText: options.confirmText || '确定',
    });

    const app = createApp({
        render() {
            return h(XALertDialog, {
                ...state,
                'onUpdate:open': (v: boolean) => {
                    state.open = v;
                    if (!v) {
                        app.unmount();
                        document.body.removeChild(container);
                    }
                },
                onConfirm: options.onConfirm,
            });
        },
    });

    app.mount(container);
}