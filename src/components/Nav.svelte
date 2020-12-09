
<script lang="ts">
    import { List, ListItem, NavigationDrawer } from "smelte";
    import { fade } from "svelte/transition"
    import { Router, Route } from "svelte-routing";
    import NavLink from "./NavLink.svelte"
    import Header from "./Header.svelte"
    import Home from "../routes/Home.svelte";
    import About from "../routes/About.svelte";
    import Blog from "../routes/Blog.svelte";

    // Used for SSR. A falsy value is ignored by the Router.
    export let url = '';

    const menu = [
        { to: "/", text: 'Home' },
        { to: "about", text: 'About' },
        { to: "blog", text: 'Blog' },
    ];
    export let selected = '';
    let setupNavSelect=(name)=>{
        selected = name;
    }
</script>

<Header bind:selected={selected}></Header>
<Router url="{url}">
    <div class="relative p-8 lg:max-w-3xl mx-auto mb-10 mt-24 md:ml-64 md:pl-16
  md:max-w-md md:px-3"
         transition:fade={{ duration: 300 }}>
        <NavigationDrawer showDesktop=true>
            <List items={menu}>
                <span slot="item" let:item={item} class="cursor-pointer">
                    <NavLink to="{item.to}" let:isSelected={isSelected} {setupNavSelect}>
                        <ListItem
                                selected={isSelected}
                                {...item}
                                dense
                                navigation
                        />
                    </NavLink>
                </span>
            </List>
        </NavigationDrawer>
        <div>
            <Route path="about" component="{About}" />
            <Route path="blog/*" component="{Blog}" />
            <Route path="/" component="{Home}" />
        </div>
    </div>
</Router>