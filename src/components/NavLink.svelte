<script lang="ts">
    import { Link } from "svelte-routing";

    export let to = '';
    export let isSelected = true;

    function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
        isSelected = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
        console.log(isSelected);
    }
</script>

<Link to="{to}" getProps="{getProps}">
    <slot {isSelected} />
</Link>