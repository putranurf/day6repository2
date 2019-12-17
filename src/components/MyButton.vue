<template>
    <div>
        <button @click="$emit('click')">
            <slot></slot>
        </button>
    </div>
</template>