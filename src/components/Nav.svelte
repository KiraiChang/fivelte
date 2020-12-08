
<script lang="ts">
    import { Router, Route, Link } from "svelte-routing";
    import Home from "../routes/Home.svelte";
    import About from "../routes/About.svelte";
    import Blog from "../routes/Blog.svelte";

    // Used for SSR. A falsy value is ignored by the Router.
    export let url = "";
</script>
<Router url="{url}">
    <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="blog">Blog</Link>
    </nav>
    <div>
        <Route path="about" component="{About}" />
        <Route path="blog/*" component="{Blog}" />
        <Route path="/" component="{Home}" />
    </div>
</Router>