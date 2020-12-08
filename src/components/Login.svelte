<script lang="ts">
    import { TextField,Button } from "smelte";
    import { _ } from '../services/i18n';

    export let login;
    let name, password;
</script>
<div class="grid grid-flow-col grid-cols-12 justify-center text-center">
    <div class="col-start-3 col-span-8">
        <div><i class="material-icons">article</i></div>
        <h6 class="mb-3 mt-6">{$_('login.title')}</h6>
        <TextField label="{$_('login.account')}" bind:value="{name}" type="email"/>
        <TextField label="{$_('login.password')}" bind:value="{password}" type="string"/>
        <Button on:click={login(name, password)} block="true">{$_('login.login')}</Button>
    </div>
</div>