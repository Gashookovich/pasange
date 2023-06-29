import Vue from "vue";
import Vuex from "vuex";
import image1 from '../img/glasses/glass1.jpeg';
import image2 from '../img/glasses/glass2.jpeg';
import image3 from '../img/glasses/glass3.jpeg'; 
import image4 from '../img/glasses/glass4.jpeg'; 
import image5 from '../img/glasses/glass5.jpeg'; 
import image6 from '../img/glasses/glass6.jpeg'; 
import image7 from '../img/glasses/glass4.jpeg'; 
import image8 from '../img/glasses/glass8.jpeg';  

Vue.use(Vuex);

const state = {
  products: [
    {
      id: 1,
      image: image1,
      name: "glasses 1",
      price: '50',
      quantity: 0,
    },
    {
      id: 2,
      image: image2,
      name: "glasses 2",
      price: '10',
      quantity: 0,
    },
    {
      id: 3,
      image: image3,
      name: "glasses 3",
      price: '60',
      quantity: 0,
    },
    {
      id: 4,
      image: image4,
      name: "glasses 4",
      price: '10',
      quantity: 0,
    },
    {
      id: 5,
      image: image5,
      name: "glasses 5",
      price: '30',
      quantity: 0,
    },
    {
      id: 6,
      image: image6,
      name: "glasses 6",
      price: '40',
      quantity: 0,
    },
    {
      id: 7,
      image: image7,
      name: "glasses 7",
      price: '20',
      quantity: 0,
    },
    {
      id: 8,
      image: image8,
      name: "glasses 8",
      price: '50',
      quantity: 0,
    },
  ],
  selectedSort: '',
  searchQuery: '',
  sortOptions: [
    {value: 'name', name: 'По названию'},
    {value: 'price', name: 'По цене'},
  ],
};

const getters = {
  sortedPosts(state)  {
    return [...state.products].sort((product1, product2) => product1[state.selectedSort]?.localeCompare(product2[state.selectedSort]))
  },
  sortedAndSearchedPosts(state, getters) {
    return getters.sortedPosts.filter(product => product.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
  },
  total(state, getters) {
    return getters.cartProducts.reduce((total, p) => {
      return total + p.price * p.quantity;
    }, 0);
  },
  cartProducts: (state) => {
    return state.products.filter((p) => p.quantity !== 0);
  },
  itemsInCart: (state, getters) => {
    return getters.cartProducts.reduce(
      (accum, item) => accum + item.quantity,
      0
    );
  },
};

const actions = {
  async getProducts({ commit }) {
    let response = await fetch(
      
    );
    if (response.ok) {
      let json = await response.json();
      commit("allProducts", json);
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  },
};

const mutations = {
  setSelectedSort(state, selectedSort) {
    state.selectedSort = selectedSort;
  },
  setSearchQuery(state, searchQuery) {
    state.searchQuery = searchQuery;
  },
  allProducts: (state, payload) => {
    payload.forEach((el) => {
      el.price = Math.floor(Math.random() * 5 + 10);
      el.quantity = 0;
      let rand = Math.floor(Math.random() * state.images.length);
      el.src = "images/" + state.images[rand] + ".webp";
      el.liked = "no";
    });
    state.products = payload;
  },

  addToCart: (state, product) => {
    const item = state.products.find((p) => p.id === product.id);
    item.quantity++;
  },

  removeFromCart: (state, product) => {
    const item = state.products.find((p) => p.id === product.id);
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      item.quantity = 0;
    }
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
