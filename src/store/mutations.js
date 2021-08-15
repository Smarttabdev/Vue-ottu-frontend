// import {STORAGE_KEY} from '@constants/index'
// import { $utils } from '@helper'

export default {
    $vuexSetActiveBar(state, data) {
        console.log(data);
        state.setting = data;
    }
}