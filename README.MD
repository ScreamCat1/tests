Display a list of items from json file attached according to design. You can use any React/Redux seed project you prefer or configure your own.

Acceptance creteria:
* On startup the list of items is loaded over Ajax from data.json file.
* On the left side of the screen all items from json list are displayed. Left panel has fixed width, occupies all available height.
* Left panel must use browser default scrolbar. Scrolbar design might be different from what we have in PSD.
* Left list is optimized performance wise, no extra re-rendering of unrelated items as e.g. title changes.
* On click on item from the left panel list, item details are shown on the right panel. Left item get's highlighted. Right panel occupies all available space.
* User is able to edit items' title on the right panel inline. Changes are imidiately (as user types) reflected on the left panel. No need to simulate pushing changes to server.

We expect you to use following technologies:
* React
* Redux
* normalizr
* fetch
* less
* webpack / babel / es6

Would be big plus if you also use:
* Ava test - cover all reducers
* Redux Saga, Redux Observable or similar library for side effects management