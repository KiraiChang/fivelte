
<script lang="ts">
    import { List, ListItem, NavigationDrawer } from "smelte";
    import { Router, Route, Link } from "svelte-routing";
    import NavLink from "./NavLink.svelte"
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
</script>
<Router url="{url}">
    <nav>
        <NavigationDrawer showDesktop=true>
            <List items={menu}>
                <span slot="item" let:item={item} class="cursor-pointer">
                    <NavLink to="{item.to}" let:isSelected={isSelected}>
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
    </nav>
    <div>
        <Route path="about" component="{About}" />
        <Route path="blog/*" component="{Blog}" />
        <Route path="/" component="{Home}" />
    </div>
</Router>