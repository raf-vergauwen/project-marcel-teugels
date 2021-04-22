import { registerComponent, use } from '../../utils/plugins'
import Checkbox from './Checkbox'
import CheckboxButton from './CheckboxButton'


const Plugin = {
    install(Vue) {
        registerComponent(Vue, Checkbox)
        registerComponent(Vue, CheckboxButton)
    }
}

use(Plugin)

export default Plugin

export {
    Checkbox as BCheckbox,
    CheckboxButton as BCheckboxButton
}
