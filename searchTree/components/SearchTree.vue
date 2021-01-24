/*
* Created on: 20-01-2021
* Comment: parentComponent for all searchTreeComponents
* Created by: Sebastiaan van Valen, email: 
* © INT2 2021 B.V.
*/

<template>
    <div class="searchtree-container">
        <div class="treelabel" @click="visible = !visible">
            <div class="img-replace" v-if="visible">=></div>
            <div class="img-replace" v-else>|||||</div>
            <div class="selected-item">searchtree</div>
        </div>
        <div class="tree-wrapper" v-if="visible">
            <TreeItem :items="{type: 'initial', name: 'schoolTerm'}" />
        </div>
    </div>
</template>

<script lang="ts">
import { mapState, mapGetters, mapActions } from "vuex";
import TreeItem from "./TreeItem.vue";

export default {
    name: "SearchTree",
    components: {
        TreeItem
    },
    data() {
        return {
            visible: false
        };
    }
};
</script>

<style lang="scss" scoped>
.searchtree-container {
    width: 30%;

    .treelabel {
        display: flex;
        width: 100%;
        text-align: left;
        background-color: rgba(138, 168, 120, 0.856);
        padding: 8px;
        margin: 40px 5px 8px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 600;


        .img-replaced {
            color: red;
        }

        .selected-item {
            margin-left: 32px;
        }
    }

    .school-term {
        border: 1px solid green;
    }
}
</style>