<template>
    <div>
        <nav class="panel column is-offset-2 is-8">
            <p class="panel-heading">
                Phonebook
            </p>
            <div class="panel-block">
                <p class="control has-icons-left">
                <input class="input is-small" type="text" placeholder="search">
                <span class="icon is-small is-left">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </span>
                </p>
            </div>
            <a class="panel-block is-active" v-for="item,key in phonebook">
                <span class="column is-9">{{item.name}}</span>
                <span class="panel-icon column is-1">
                    <i class="has-text-primary fa fa-eye" aria-hidden="true"></i>
                </span>
                <span class="panel-icon column is-1">
                    <i class="fa fa-edit" aria-hidden="true"></i>
                </span>
                <span class="panel-icon column is-1">
                    <i class="has-text-danger fa fa-trash" aria-hidden="true"></i>
                </span>
            </a>
            <div class="panel-block">
                <button class="button is-link" @click="openAdd">
                Add New Contact
                </button>
            </div>
        </nav>
        <Add :openmodal='addActive' @closeModal='closeAdd'></Add>
    </div>
</template>

<script>
    let Add = Vue.component('Add', require('./Add.vue').default);
    export default {
        components: {Add},
        data() {
            return {
                addActive : '',
                phonebook: {}
            }
        },
        mounted() {
            axios.get('/phonebook', this.$data.list)
            .then((response) =>
                this.phonebook = response.data
            )
            .catch((error) =>
                this.errors = error.response.data.errors
            );
        },
        methods: {
            openAdd() {
                this.addActive = 'is-active'
            },
            closeAdd() {
                this.addActive = ''
            }
        }
    }
</script>


