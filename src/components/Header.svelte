<script>
    import {AppBar, Button, Tabs, Spacer, Tooltip, TabButton} from "smelte";
    import { links } from "svelte-routing";

    const menu = [
        {to: "/", text: 'Home'},
        {to: "about", text: 'About'},
        {to: "blog", text: 'Blog'},
    ];
</script>
<AppBar class={i => i.replace('primary-300', 'dark-600')}>
    <a href="." class="px-2 md:px-8 flex items-center">
        <h6 class="pl-3 text-white tracking-widest font-thin text-lg">Fivelte</h6>
    </a>
    <Spacer />
    <div use:links>
        <Tabs navigation items={menu}>
        </Tabs>
    </div>
</AppBar>