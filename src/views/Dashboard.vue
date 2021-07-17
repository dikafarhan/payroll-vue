<template>
  <span class="navbar-nav mr-auto" style="margin-top:120px">
    <div class="row" style="margin-right:30px;margin-left:30px;">
      <div class="col-sm-3" v-for="data in data" :key="data.id">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">Ultrasonic Sensor</h5>
            </div>
            <div class="text-center">
              <h2>{{data.ultrasonik}}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3" v-for="data in data" :key="data.id">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">Soil Moisture Sensor</h5>
            </div>
            <div class="text-center">
              <h2>{{data.kelembaban}}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">PH Sensor</h5>
            </div>
            <div class="text-center">
              <h2>0</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">Temperature Sensor</h5>
            </div>
            <div class="text-center">
              <h2>0</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const data_sensor = onMounted(() => {
        setInterval(function(){
               get_data()
            },3000);
    });
    function get_data(){
        store.dispatch("datasensor/get_data");
    }
    const data = computed(() => {
      return store.state.datasensor.data_sensor;
    });
    return {
      router,
      data_sensor,
      data,
    };
  },
};
</script>
<style scoped>
a {
  color: rgba(0, 0, 0, 0.5);
  margin-top: -7px;
  text-decoration: none;
  margin-right: 23px;
  font-weight: 600;
}
</style>
