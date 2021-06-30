<template>
	<div>
		<app-screen></app-screen>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppScreen from '@/views/AppScreen.vue';

export default defineComponent({
	components: {
		AppScreen,
	}
})
</script>

<style lang="scss">
</style>
