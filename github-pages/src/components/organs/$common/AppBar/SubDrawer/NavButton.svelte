<script>
import { base } from "$app/paths"
import { page } from "$app/stores"
import { onMount } from "svelte"

/** @type {string} */
export let text
/** @type {*} */
export let data
export let classs = ""

/** @type {boolean} */
let is_open
/** @type {boolean} */
let active

if ("href" in data) {
	onMount(() => {
		page.subscribe(() => {
			active = data.href == base + "/"
				? location.pathname == data.href || location.pathname + "/" == data.href
				: location.pathname.startsWith(data.href)
		})
	})
}
</script>

{#if "childs" in data}
<button class="relative w=100% h=3.5 br=1.75 pl=1 ta=left mb=.25
		:hover/bg=--gray-70 @dark@:hover/bg=--gray-40
		{active && "bg=--primary-50!! c=--primary-90!!"}
		{classs}"
		on:click={() => is_open = !is_open}>
	<slot></slot>
	<span class="fs=1.5">{text}</span>
	<div class="absolute b=50% r=1 h=.75 w=.25 br=.125
			tt=transform_.3s tfo=bottom
			tf=rotate({is_open ? "-135deg" : "-45deg"})_translateY(.1em)
			bg=--gray-30 @dark@bg=--gray-70
			{active && "bg=--primary-90!"}"></div>
	<div class="absolute b=50% r=1 h=.75 w=.25 br=.125
			tt=transform_.3s tfo=bottom
			tf=rotate({is_open ? "135deg" : "45deg"})_translateY(.1em)
			bg=--gray-30 @dark@bg=--gray-70
			{active && "bg=--primary-90!"}"></div>
</button>
<ul class="ml=1 o=hidden
		{is_open || "h=0"}">
	{#if data.childs}
		{#each Object.keys(data.childs) as text}
		<li>
			<svelte:self {text} data={data.childs[text]} />
		</li>
		{/each}
	{/if}
</ul>
{:else}
<a href={data["href"]}>
	<button class="w=100% h=3.5 br=1.75 pl=1 ta=left mb=.25
			:hover/bg=--gray-70 @dark@:hover/bg=--gray-40
			{active && "bg=--primary-50!! c=--primary-90!!"}
			{classs}">
		<slot></slot>
		<span class="fs=1.5">{text}</span>
	</button>
</a>
{/if}