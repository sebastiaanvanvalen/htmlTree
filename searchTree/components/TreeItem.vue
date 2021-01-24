/*
* Created on: 20-01-2021
* Comment: component for e child element in the search tree 
* Created by: Sebastiaan van Valen, email: 
* © INT2 2021 B.V.
*/

<template>
    <transition :duration="500">
        <div class="item-wrapper">
            <div
                class="tree-item"
                :style="[indent, styleMe]"
                @click="toggleChildren"
            >{{ items.name }}</div>
            <div class="wrapper" v-if="showChildren">
                <treeItem
                    v-for="(item, index) in getItems(items)"
                    :key="index"
                    :items="item"
                    :depth="depth + 1"
                />
            </div>
        </div>
    </transition>
</template>
<script lang="ts">
import { mapGetters } from "vuex";

export default {
    name: "treeItem",
    props: ["items", "depth"],
    data() {
        return {
            showChildren: false
        };
    },
    computed: {
        indent() {
            return { transform: `translate(${this.depth * 50}px)` };
        },
        styleMe() {
            let style;
            switch (this.items.type) {
                case "schoolTerm":
                    style = {
                        color: "green",
                        margin: "0 0 12px 0",
                        height: "100%",
                    };
                    break;
                case "class":
                    style = {
                        color: "lightred"
                    };
                    break;
                case "student":
                    style = {
                        color: "red",
                        textDecoration: "underline",
                        margin: "0 0 6px 0"
                    };
                    break;
                case "dataPoint":
                    style = {
                        display: "flex",
                        fontSize: "12px"
                    };
                    break;

                default:
                    break;
            }
            return style;
        },
        ...mapGetters(["getItems"])
    },
    methods: {
        toggleChildren() {
            this.showChildren = !this.showChildren;
        }
    }
};
</script>

<style lang="scss" scoped>
.item-wrapper {
    display: flex;
    flex-direction: column;
    margin: 4px 4px 4px 32px;
    color: green;
    font-size: 18px;
    font-weight: 600;
    transition: 200ms;
    background-color: lightgray;
    padding: 4px;
    border-radius: 4px;
    transition: 200ms ease-in-out;

    &:hover {
        background-color: rgb(255, 166, 0);
    }

    .tree-item {
        transition: 200ms;
    }

    .text {
        margin-left: 8px;
    }
}
</style>