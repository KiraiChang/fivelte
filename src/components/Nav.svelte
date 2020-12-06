<script>
    import { List, ListItem, NavigationDrawer } from "smelte";
    const menu = [
        { to: "components/text-fields", text: 'Text fields' },
        { to: "components/buttons", text: 'Buttons' },
        { to: "components/selection-controls", text: 'Selection controls' },
        { to: "components/lists", text: 'Lists' },
        { to: "components/navigation-drawers", text: 'Navigation Drawers' },
        { to: "..", text: 'Go back' },
    ];

    let path = "components/navigation-drawers";
</script>
<div>
    <NavigationDrawer>
        <h6
                class="p-6 ml-1 pb-2 text-xs text-gray-900"
        >Components</h6>
        <List items={menu}>
    <span slot="item" let:item={item} class="cursor-pointer">
      {#if item.to === '/typography'}
        <hr>
        <h6 class="p-6 ml-1 py-2 text-xs text-gray-900">Utilities</h6>
      {/if}

        <a href={item.to}>
        <ListItem
                selected={path.includes(item.to)}
                {...item}
                dense
                navigation
        />
      </a>
    </span>
        </List>
        <hr>
    </NavigationDrawer>
</div>