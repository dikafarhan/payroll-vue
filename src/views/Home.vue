<template>
  <div class="page-content page-home">
    <section class="">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 aos-init aos-animate" data-aos="zoom-in">
            <div id="" class="" data-ride="">
              <ol class="carousel-indicators">
                <li data-target="" data-slide-to="0" class=""></li>
                <li data-target="" data-slide-to="1" class=""></li>
                <li data-target="" data-slide-to="2" class="active"></li>
              </ol>
              <div  
                class=""
                v-for="(slider, id) in sliders"
                :class="{ active: id == 0 }"
                :key="slider.id"
              >
                <div class="">
                  <img
                    :src="slider.image"
                    class="d-block w-100"
                    alt="Carousel Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="page-content page-categories">
      <section class="store-trend-categories">
        <div class="container">
          <div class="row">
            <div class="col-12" data-aos="fade-up">
              <h5>All Categories</h5>
            </div>
          </div>
          <div class="row">
            <div
              v-for="category in categories"
              :key="category.id"
              class="col-md-2 col-4 mb-3"
            >
              <router-link
                :to="{
                  name: 'detail_category',
                  params: { slug: category.slug },
                }"
              >
                <img :src="category.image" style="width: 300px" />
                <label class="font-weight-bold">{{ category.name }}</label>
              </router-link>
            </div>
          </div>
          <div class="col-12" data-aos="fade-up">
            <h5>All Products</h5>
          </div>
          <div class="row">
            <div  
              v-for="product in products"
              :key="product.id"
              class="col-md-2 col-4 mb-3"
            >
              <img :src="product.image" style="width: 300px" />
              <label class="font-weight-bold">{{ product.title }}</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("slider/getSliders");
    });
    const sliders = computed(() => {
      return store.state.slider.sliders;
    });

    onMounted(() => {
      store.dispatch("category/getCategories");
    });
    const categories = computed(() => {
      return store.state.category.categories;
    });
    const products = computed(() => {
      return store.state.product.products;
    });
    onMounted(() => {
      store.dispatch("product/getProducts");
    });
    return {
      store,
      sliders,
      categories,
      products,
    };
  },
};
</script>
<style scoped>
.w-100 {
  width: 100% !important;
  margin-top: -26px;
  border-radius: 40px;
  text-decoration: none;
}
p {
  margin-left: 53px;
  margin-top: 14px;
}
.categories.image {
  margin-top: -51px;
}
</style>
