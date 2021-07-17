import Api from "../../api/Api";

const datasensor = {
    //set namespace true
    namespaced: true,

    //state
    state: {
        data_sensor:''
    },

    //mutations
    mutations: {

        DATA_SENSOR(state,data_sensor){
            const name=state.data_sensor=data_sensor
            console.log(name);
        }
    },

    //actions
    actions: {
        get_data({commit}){
            Api.get("tampil")
            .then(function (response) {
                const data_sensor=response.data
                commit("DATA_SENSOR",data_sensor)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
        }
    },

    //getters
    getters: {
      
    },
};

export default datasensor;