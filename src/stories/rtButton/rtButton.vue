<template>
    <button type="button" :class="classes" @click="onClick" :style="style">
        {{ label }}
    </button>
    <el-button type="success">hello-elementplus</el-button>
</template>

<script setup lang="ts">
import {computed} from "vue";

import {ButtonSizeEnum} from "./rtButtonTypes";
interface User {
    name: string
}
interface User {
    age: number,
    sex: string
}

const user: User = {
    name: 'name',
    age: 18,
    sex: 'women'
}

let div = document.createElement('div');
type B = typeof div


interface PropsOpt {
    label: string;
    primary?: boolean;
    backgroundColor?: string;
    size: ButtonSizeEnum.large;
}

interface Emits {
    (event: "click"): void;
}

const props = withDefaults(defineProps<PropsOpt>(), {
    primary: true
});

const emit = defineEmits<Emits>();

const onClick = () => {
    emit("click");
};

const classes = computed(() => ({
    "storybook-button": true,
    "storybook-button--primary": props.primary,
    "storybook-button--secondary": !props.primary,
    [`storybook-button--${props.size || "medium"}`]: true,
}));

const style = computed(() => ({
    backgroundColor: props.backgroundColor,
}));
</script>

<style lang="less" scoped>

.storybook-button {
    font-family: "Overpass", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3rem;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    transition: all 0.15s ease-in-out;

    &--primary {
        color: white;
        background-color: #1ea7fd;
    }

    &--secondary {
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }

    &--small {
        font-size: 12px;
        padding: 10px 16px;
    }

    &--medium {
        font-size: 14px;
        padding: 11px 20px;
    }

    &--large {
        font-size: 16px;
        padding: 12px 24px;
    }
}

</style>
