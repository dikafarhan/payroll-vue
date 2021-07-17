<template>
  <div class="container Login">
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
                  <form class="user" @submit.prevent="login">
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
                    <button type="submit" class="btn btn-primary" style="margin-left:248px;margin-top:20px;border-radius:15px;width:274px;">Login</button>
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
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const user = reactive({
      email: "",
      password: "",
    });
    //validation state
    const validation = ref([]);

    //store vuex
    const store = useStore();

    //route
    const router = useRouter();

    function login() {
      let email = user.email;
      let password = user.password;
      store
        .dispatch("auth/login", {
          email,
          password,
        })
        .then(() => {
          router.push({ name: "dashboard" });
        })
        .catch((error) => {
          validation.value = error;
        });
    }
    return {
      user,
      validation,
      login,
    };
  },
};
</script>
