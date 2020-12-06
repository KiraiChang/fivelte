<script>
	import Login from "./Components/Login.svelte";
	import Nav from "./Components/Nav.svelte";
	export let token = '';
	let login =(name, password)=>
	{
		token = name+password;
	}
	import { setupI18n } from './services/i18n';
	setupI18n({ withLocale: 'en' });
</script>
<div>
	{#if token === ''}
		<Login {login}></Login>
	{:else}
		<Nav></Nav>
	{/if}
</div>