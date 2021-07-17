import Api from "../../api/Api";

const departement = {
    //set namespace true
    namespaced: true,
    //state
    state: {
        departement:''
    },
    //mutations
    mutations: {
        DEPARTEMENT(state,data_departement){
            state.departement=data_departement
        }
    },
    //actions
    actions: {
        get_departement({commit}){
            Api.get("departement")
            .then(function (response) {
                const data_departement=response.data
                console.log(data_departement);
                commit("DEPARTEMENT",data_departement)
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
      departement(state){
          return state.departement
      }
    },
};

export default departement;