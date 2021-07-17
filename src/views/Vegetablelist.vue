<template>
  <div class="container register">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4"></h1>
                  </div>
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>Date Created</th>
                        <th>Name</th>
                        <th>Harvest</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="datavegetable in data" :key="datavegetable.id">
                        <td>{{datavegetable.created_at}}</td>
                        <td>{{datavegetable.name}}</td>
                        <td>{{datavegetable.harvest}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const data_vegetable = onMounted(() => {
      store.dispatch("insertvegetable/get_data");
    });
      const data_prediction = onMounted(() => {
      store.dispatch("insertvegetable/get_prediction");
    });
       const prediction = computed(() => {
      return store.state.insertvegetable.created_at;
    });
     const harvest = onMounted(() => {
       prediction_harvest();
    });
    function prediction_harvest(){
      console.log("ok");
    }
      const prediction_data = computed(() => {
      return store.state.insertvegetable.harvest;
    });

    const data = computed(() => {
      return store.state.insertvegetable.vegetable;
    });
    return {
      router,
      data_vegetable,
      data,
      data_prediction,
      prediction,
      prediction_data,
      harvest
};
  },
};
</script>
