<script setup>
    import { useRouter } from "vue-router"
</script>

<script>

export default {
    name: "Card",
    data() {
        return {
            name: "Loading",
            type: "O",
            image_path: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif",
            abilities: ["Loading"]
        }
    },
    props: {
        id: Number
    },
    watch: { 
        id: function(newVal, oldVal) {
            if (newVal == null || newVal == -1) {
                this.getData(this.randomPkm());
            }else {
                this.getData(newVal);
            }
        }
    },
    methods: {
        getData(id) {
            fetch('https://pokeapi.co/api/v2/pokemon/' + id)
                .then(response => response.json())
                .then(data => {
                    let new_abilities = [];
                    for (let index = 0; index < data.abilities.length; index++) {
                        new_abilities[index] = data.abilities[index].ability.name;
                    }
                    this.abilities = new_abilities;
                    let prov_name = data.forms[0].name;
                    this.name = prov_name.charAt(0).toUpperCase() + prov_name.slice(1);
                    this.type = this.getTypes(data.types);
                    fetch(data.forms[0].url)
                        .then(response2 => response2.json())
                        .then(data2 => {
                            this.image_path = data2.sprites.front_default;
                        }).catch(error => console.error(error))
                }).catch(error => console.error(error))
        },
        getTypes(types) {
            let type_string = "";
            for (let index = 0; index < types.length; index++) {
                if(types[index].type.name == 'grass') {
                    type_string += '🌿';
                }else if(types[index].type.name == 'poison') {
                    type_string += '🦠';
                }else if(types[index].type.name == 'normal') {
                    type_string += '🔘';
                }else if(types[index].type.name == 'fire') {
                    type_string += '🔥';
                }else if(types[index].type.name == 'water') {
                    type_string += '💧';
                }else if(types[index].type.name == 'flying') {
                    type_string += '🕊️';
                }else if(types[index].type.name == 'fighting') {
                    type_string += '👊🏻';
                }else if(types[index].type.name == 'electric') {
                    type_string += '⚡️';
                }else if(types[index].type.name == 'ground') {
                    type_string += '⛰️';
                }else if(types[index].type.name == 'rock') {
                    type_string += '🪨';
                }else if(types[index].type.name == 'psychic') {
                    type_string += '🔮';
                }else if(types[index].type.name == 'ice') {
                    type_string += '🧊';
                }else if(types[index].type.name == 'bug') {
                    type_string += '🪲';
                }else if(types[index].type.name == 'ghost') {
                    type_string += '👻';
                }else if(types[index].type.name == 'steel') {
                    type_string += '🪙';
                }else if(types[index].type.name == 'dragon') {
                    type_string += '🐉';
                }else if(types[index].type.name == 'dark') {
                    type_string += '⚫️';
                }else if(types[index].type.name == 'fairy') {
                    type_string += '🧚‍♀️';
                }
            }
            return type_string;
        },
        randomPkm() {
            return Math.floor(Math.random() * 1008);
        }
    },
    mounted() {
        if (this.id == null || this.id == -1) {
            this.getData(this.randomPkm());
        }else {
            this.getData(this.id);
        }
    }
}
</script>


<template>
  <div class="card">
        <div class="title">
            <span class="pkm_name">{{name}}</span>
            <div class="data">
                <span class="HP">60hp</span>
                <span class="type">{{ type }}</span>
            </div>
        </div>
        <img :src="image_path" :alt="name" width="200">
        <div class="abilities">
            <h3>Hablilities</h3>
            <ul>
                <li v-for="ability in abilities">{{ability}}</li>
            </ul>
        </div>
    </div>
</template>
