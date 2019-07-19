<template>
    <div id="browseRestaurants">
        <div @click="editBtn()"><i class="far fa-user"></i></div>
    
        <h1>Browse Restaurants</h1>
    </div>
</template>
<script>
import {
    mapActions,
    mapState
  } from "vuex";
  import {
  ACTION_SET_OPEN_PROFILE_PAGE,
  ACTION_SET_BROWSE_RESTAURANTS

  } from "../store/types.js";
export default {
    //    computed: {
    //   ...mapState({
    //     openProfilePage: state => state.openProfilePage,
    //     openBrowseRestaurants: state => state.openBrowseRestaurants,

    //   })
    // },
     methods: {
      ...mapActions({
        setopenProfilePage: ACTION_SET_OPEN_PROFILE_PAGE,
       setopenBrowseRestaurants: ACTION_SET_BROWSE_RESTAURANTS

      }),
      editBtn() {
        this.setopenProfilePage(true);
        this.setopenBrowseRestaurants(false);
        
      }
    }
}
</script>

