import { Toast } from 'native-base';

const CustomToast = () => ({
    showToast: (text, duration = 3000, config) => Toast.show({
        text,
        duration,
        ...config
    }),
    hideToast: () => Toast.hide()
})

export default CustomToast;