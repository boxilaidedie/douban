<template>
	<div>
		<svg class="svg-icon" aria-hidden="true" :style="{color:iconColor}"><use :xlink:href="iconName"></use></svg>
	</div>
	
</template>

<script>
export default {
	name: 'icon-svg',
	props: {
		iconClass: {
			type: String,
			required: true
		},
		color:{
			type: String,
			required: true
		}
	},
	computed: {
		iconName() {
			return `#icon-${this.iconClass}`;
		},
		iconColor(){
			return `${this.color}`
		}
	}
};
</script>

<style scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	overflow: hidden;
	fill: currentcolor;
}
</style>
