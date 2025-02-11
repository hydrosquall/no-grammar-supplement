<script lang="ts">
  import {
    LangMeta,
    filterLanguagesBasedOnBadges,
    filterFilterForNewBadge,
    badgeExplanation,
    classnames,
    tableColumns,
    tableShortNames
  } from './utils';
  import Popover from './Popover.svelte';
  import TableExplain from './TableExplain.svelte';
  import TableFilter from './TableFilter.svelte';

  export let langMetaCollection: LangMeta;
  let sortBy = 'System';
  let sortReverse = false;

  let filter = [];
  $: allowedLangs = filterLanguagesBasedOnBadges(langMetaCollection, filter);
  $: localMeta = Object.entries(langMetaCollection)
    .filter(([lang]) => allowedLangs.has(lang))
    .map(([_, meta]) => meta)
    .sort((a, b) => (sortReverse ? -1 : 1) * a[sortBy].localeCompare(b[sortBy]));

  const groupedByTopic = Object.values(langMetaCollection).reduce((acc, langMeta) => {
    tableColumns.forEach((col) => {
      const val = langMeta[col];
      if (!acc[col]) {
        acc[col] = {};
      }
      acc[col][val] = (acc[col][val] || []).concat(langMeta.System);
    });
    return acc;
  }, {});
  const langSysMap = Object.fromEntries(
    Object.entries(langMetaCollection).map(([lang, langMeta]) => [langMeta.System, lang])
  );
  const shortValNames = {
    yes: '✅',
    no: '❌',
    unknown: '❓'
  };
</script>

<div class="overflow-auto h-full pb-32 px-8 ">
  <h3 class="text-xl mt-2">Coding Table</h3>
  <p class="mb-2">
    This table provides the codings for each of the languages in our survey. Click the ⚙ to add or remove
    filters, and the header name to sort. The cells of the table can be clicked to reveal which languages
    share the property described in that cell.
    {#if filter.length}
      <button
        class="underline text-sky-600 cursor-pointer border-0"
        on:click={() => {
          filter = [];
        }}>Clear filters</button
      >
    {/if}
  </p>

  <table class="text-left relative border-collapse table-fixed">
    <thead>
      <tr>
        {#each tableColumns as col}
          <th class="p-1 sticky top-0 text-white bg-slate-900 z-10">
            <div class="flex items-center justify-evenly">
              <Popover>
                <button
                  slot="tooltip-target"
                  class="border-0 text-left whitespace-nowrap overflow-hidden mr-2"
                  class:text-sky-600={filter.find((x) => x.badgeType === col)}
                >
                  ⚙
                </button>

                <TableFilter
                  slot="tooltip-content"
                  {col}
                  bind:filters={filter}
                  langMeta={langMetaCollection}
                  addCallback={(x) => {
                    filter = filterFilterForNewBadge(filter, x).concat(x);
                  }}
                  cancelCallback={(x) => {
                    filter = filterFilterForNewBadge(filter, x);
                  }}
                />
              </Popover>
              <button
                class={classnames({
                  'border-0 uppercase font-bold  text-xs': true,
                  'whitespace-nowrap': sortBy === col
                })}
                on:click={() => {
                  if (sortBy === col) {
                    sortReverse = !sortReverse;
                    return;
                  }
                  sortBy = col;
                  sortReverse = false;
                }}
                title={badgeExplanation[col]}
              >
                {sortBy === col ? col : tableShortNames[col] || col}
              </button>
              <div
                class="text-xs cursor-pointer"
                on:click={() => {
                  if (sortBy === col) {
                    sortReverse = !sortReverse;
                    return;
                  }
                  sortBy = col;
                  sortReverse = false;
                }}
              >
                {sortBy === col ? (sortReverse ? '▲' : '▼') : ''}
              </div>
            </div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class="">
      {#each localMeta as lang, idx}
        <tr class={idx % 2 ? '' : 'bg-slate-100'}>
          {#each tableColumns as col}
            <td class="p-1  td-customization hover:bg-slate-300">
              <Popover>
                <button
                  slot="tooltip-target"
                  class="border-0 text-left whitespace-nowrap overflow-hidden w-full"
                >
                  {shortValNames[lang[col].toLowerCase()] || lang[col]}
                </button>
                <TableExplain
                  slot="tooltip-content"
                  options={groupedByTopic[col][lang[col]] || []}
                  {langSysMap}
                  value={lang[col]}
                  topic={col}
                />
              </Popover>
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .td-customization {
    max-width: 120px;
  }
</style>
