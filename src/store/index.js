import { createStore } from 'vuex'

//import module auth
import auth from './module/auth';
import insertvegetable from './module/insertvegetable';
import datasensor from './module/datasensor';
import departement from './module/departement';
export default createStore({
    modules: {
        auth,
        insertvegetable,
        datasensor,
        departement
    }
})