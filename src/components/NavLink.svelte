<script lang="ts">
    import { Link } from "svelte-routing";

    export let to = '';
    export let isSelected = true;
    export let setupNavSelect;
    function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
        isSelected = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
        if (isSelected && setupNavSelect){
            setupNavSelect(href);
        }
    }
</script>

<Link to="{to}" getProps="{getProps}">
    <slot {isSelected} />
</Link>