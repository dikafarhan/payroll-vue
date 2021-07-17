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
                  <form class="user" @submit.prevent="register">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        v-model="user.name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        v-model="user.email"
                      />
                    </div>
                    <div
                      v-if="validation.email"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation.email[0] }}
                    </div>
                    <div class="form-group">
                      <label class="font-weight-bold">PROVINSI</label>
                      <select
                        class="form-control"
                        v-model="dprt_id"
                      >
                        <option
                          v-for="departements in data_departement"
                          :key="departements.dprt_id"
                          :value="departements.dprt_id"
                        >
                          {{ departements.dprt_name }}</option
                        >
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="font-weight-bold">Positions</label>
                      <select class="form-control"> </select>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="user.password"
                      />
                    </div>
                    <div
                      v-if="validation.password"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation.password[0] }}
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="password confirmation"
                        v-model="user.password_confirmation"
                      />
                    </div>
                    <div
                      v-if="validation.password_confirmation"
                      class="mt-2 alert alert-danger"
                    >
                      {{ validation.password_confirmation[0] }}
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style="margin-left:248px;margin-top:20px;border-radius:15px;width:274px;"
                    >
                      Submit
                    </button>
                  </form>
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
import { ref, reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const user = reactive({
      name: "",
      email: "",
      position: "",
      departement: "",
      password: "",
      password_confirmation: "",
    });
    const validation = ref([]);
    const store = useStore();
    const router = useRouter();
    function register() {
      let name = user.name;
      let email = user.email;
      let position = user.position;
      let departement = user.departement;
      let password = user.password;
      let password_confirmation = user.password_confirmation;
      store
        .dispatch("auth/register", {
          name,
          email,
          position,
          departement,
          password,
          password_confirmation,
        })
        .then(() => {
          router.push({ name: "user" });
        })
        .catch((error) => {
          validation.value = error;
        });
    }
    const departements = onMounted(() => {
      store.dispatch("departement/get_departement");
    });
    const data_departement = computed(() => {
      return store.state.departement.departement;
    });
    return {
      user,
      validation,
      register,
      departements,
      data_departement,
    };
  },
};
</script>
