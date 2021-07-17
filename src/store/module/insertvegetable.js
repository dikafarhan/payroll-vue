import Api from "../../api/Api";

const insertvegetable = {
    //set namespace true
    namespaced: true,

    //state
    state: {
        name: '',
        vegetable:'',
        created_at:{},
        harvest:{}
    },

    //mutations
    mutations: {
        //update state token dan state user dari hasil response
        INSERT_VEGETABLE(state,data){
           state.name=data
        },
        DATA_VEGETABLE(state,data_vegetable){
           const nama=state.vegetable=data_vegetable
            console.log(nama);
        },
        GET_PREDICTION(state,created_at,harvest){
           state.created_at=created_at
           state.harvest=harvest
        }
    },
    //actions
    actions: {
        //action register
        insert({commit},user) {
            Api.post("/insert", {
                //data yang dikirim ke serve untuk proses register
                name: user.name
              })
            .then((response)=>{
                const data=response.data
                commit("INSERT_VEGETABLE",data);
            })
        },
        get_data({commit}){
            Api.get("get")
            .then(function (response) {
                const data_vegetable=response.data.data
                commit("DATA_VEGETABLE",data_vegetable)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
        },
        get_prediction({commit}){
            Api.get("get_prediction")
            .then(function(response){
               const created_at=response.data[0];
               const harvest=response.data[1];
                commit("GET_PREDICTION",created_at,harvest)
            })
        }
    },

    //getters
    getters: {
      
    },
};

export default insertvegetable;