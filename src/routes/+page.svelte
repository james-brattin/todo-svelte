<script>
	// @ts-nocheck

	export let data;
</script>

<div class="centered">
	<h1>Todos:</h1>

	<ul>
		{#each data.todos as todo (todo.id)}
			<li>
				<span>{todo.description}</span>
			</li>
		{/each}
	</ul>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}
</style>
