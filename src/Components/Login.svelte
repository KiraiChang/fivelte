<script>
    import { TextField,Button } from "smelte";
    export let login;
    let name, password;
</script>
<div class="grid grid-flow-col grid-cols-12 justify-center text-center">
    <div class="col-start-3 col-span-8">
        <div><i class="material-icons">article</i></div>
        <h6 class="mb-3 mt-6">登入 Fivelte</h6>
        <TextField label="電話、電子郵件或使用者名稱" bind:value="{name}" type="email"/>
        <TextField label="密碼" bind:value="{password}" type="string"/>
        <Button on:click={login(name, password)} block="true">登入</Button>
    </div>
</div>