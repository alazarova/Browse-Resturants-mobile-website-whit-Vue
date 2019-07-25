<template>
    <div id="browseRestaurants">
        <div class="header">
    
            <h3>Browse Restaurants</h3>
            <div class="profileIcon" @click="editBtn()"><i class="far fa-user"></i></div>
        </div>
        <div class="container">
    
            <div class="infoRest" v-for="restaurant in restaurants" :key="restaurant.img">
                <div class="imgWrapper">
                    <img v-bind:src="restaurant.img" />
                </div>
                <div class="infoWrap">
                    <div class="restName">
                        {{restaurant.nameRestaurants}}
                    </div>
                    <div class="infoStr">
                        <div class="street">
                            <i class="fas fa-map-marker-alt"></i> {{restaurant.streetName}}
                        </div>
    
                        <div class="likes">
                            <i class="fas fa-heart"></i> {{restaurant.likes}}
                        </div>
                    </div>
                </div>
                <div class="arrow"><i class="fas fa-chevron-right"></i></div>
            </div>
        </div>
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
        data() {
            return {
                restaurants: [{
                        img: '../../src/assets/img/img1.jpg',
                        nameRestaurants: 'Gramercy Tavern',
                        streetName: '42 E 20th St',
                        likes: '228'
    
                    },
                    {
                        img: '../../src/assets/img/img2.jpg',
                        nameRestaurants: 'Blue Hill',
                        streetName: '75 Washington Pl',
                        likes: '215'
                    },
                    {
                        img: '../../src/assets/img/img3.jpg',
                        nameRestaurants: 'Le Bernardin',
                        streetName: '155 W 51st St',
                        likes: '199'
                    },
                    {
                        img: '../../src/assets/img/img4.jpg',
                        nameRestaurants: 'Jean-Georges',
                        streetName: '1 Central Park West',
                        likes: '183'
                    },
                    {
                        img: '../../src/assets/img/img5.jpg',
                        nameRestaurants: 'The Four Seasons',
                        streetName: '99 E 52nd St',
                        likes: '178'
                    },
                    {
                        img: '../../src/assets/img/img6.jpg',
                        nameRestaurants: 'Ninja New York',
                        streetName: '25 Hudson St',
                        likes: '78'
                    },
                    {
                        img: '../../src/assets/img/img7.jpg',
                        nameRestaurants: 'Estiatorio Milos',
                        streetName: '126 Water St',
                        likes: '28'
                    }
                ],
            }
        },
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

<style scoped>
    .header {
        height: 10%;
        display: flex;
        align-items: center;
    }
    
    .profileIcon {
        position: absolute;
        right: 5%;
        top: 3.8%;
        cursor: pointer;
    }
    
    .container {
        justify-content: center;
        color: #1e1e1e;
        height: 90%;
        width: 100%;
    }
    
    .infoRest {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #b5b5b5;
        padding: 0 5%;
        justify-content: space-between;
        text-align: left;
        height: 14%;
    }
    
    .imgWrapper {
        margin-right: 10px;
    }
    
    img {
        width: 65px;
        height: 65px;
        border-radius: 5px;
    }
    
    .infoWrap {
        width: 65%;
    }
    
    .restName {
        font-size: 1.5em;
        line-height: 1.5em;
    }
    
    .infoStr {
        display: flex;
        color: #888787;
        font-size: 0.8em;
    }
    
    .street {
        margin-right: 15px;
    }
    
    .arrow {
        color: #2196f3;
        cursor: pointer;
    }
</style>


