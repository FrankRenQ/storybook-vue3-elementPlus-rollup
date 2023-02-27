<!--
* @Author: 任强
* @Date: 2023/2/22 16:11
* @Version: 1.0
* @Content: 
-->
<template>
    <div class="rt-block">
        <div class="rt-block-header">
            <div class="rt-block-header__title">
                <span>{{ props.title }}</span>
                <span v-show="badgeText" class="rt-badge">{{ badgeText }}</span>
                <slot name="subTitle"></slot>
            </div>
            <div class="rt-block-header__line"></div>
            <slot name="right"></slot>
        </div>
        <div class="rt-block-content">
            <slot></slot>
        </div>
        <div v-if="hasFooter" class="rt-block-footer">
            <span>Footer</span>
        </div>
    </div>
</template>

<script setup lang="ts">

interface PropsOpt {
    title: string,
    badgeText: string | number,
    hasFooter: boolean
}
const props = withDefaults(defineProps<PropsOpt>(), {
    hasFooter: false
})
</script>

<style scoped lang="less">
.rt-block {
    width: 100%;
    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        &__title {
            position: absolute;
            padding-left: 6px;
            color: #1ea7fd;
            font-weight: 700;
            font-size: 14px;
        }
        &__line {
            margin-left: 8px;
            width: 100%;
            height: 1px;
            background: rgba(26, 220, 0, 0.8)
        }
    }
    &-content {
        width: 100%;
    }
}
</style>