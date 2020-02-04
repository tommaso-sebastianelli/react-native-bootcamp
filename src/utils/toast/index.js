import { Toast } from 'native-base';

const _show = function (text, position = 'bottom', duration = 3000, type) {
    Toast.show({
        text,
        type,
        position,
        duration
    });
}

export default {
    showSuccess: (text, position, duration) => _show(text, position, duration, 'success'),
    showWarrning: (text, position, duration) => _show(text, position, duration, 'warning'),
    showError: (text, position, duration) => _show(text, position, duration, 'error')
}