<script>
import { afterUpdate, onMount } from "svelte"

export let classs = ""

/** @type {boolean} */
export let ready

/** @type {Function} */
export let onlast

/** @type {HTMLDivElement} */
let container

/** @type {IntersectionObserver} */
let observer

onMount(() => {
	observer = new IntersectionObserver(
		entries => {
			if (entries[0].isIntersecting) {
				observer.unobserve(entries[0].target)
				onlast()
			}
		},
		{
			root: container,
			threshold: 0
		}
	)
})
afterUpdate(() => {
	if (ready && container.lastElementChild) {
		observer.observe(container.lastElementChild)
	}
})
</script>

<div bind:this={container}
		class={classs}
		style="overflow:auto;">
	<slot></slot>
</div>