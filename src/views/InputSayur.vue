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
                  <form class="user" @submit.prevent="Submit">
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
                    <button type="submit" class="btn btn-primary">Submit</button>
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
      name: "",
    });
    const validation = ref([]);
    const store = useStore();
    const router = useRouter();
    function Submit() {
         let name = user.name;
      store
        .dispatch('insertvegetable/insert', {
            name
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
      Submit,
      router
    };
  },
};
</script>
