<div class="has-tooltip relative">
  <slot name="target">
    <span class="missing">No content</span>
  </slot>
  <span class="tooltip rounded shadow-lg p-4 bg-slate-100 text-black -mt-8 max-w-lg flex-wrap flex w-96">
    <span>
      <slot name="content">
        <span class="missing">No content</span>
      </slot>
    </span>
  </span>
</div>

<style>
  .tooltip {
    @apply invisible absolute;
    top: 4rem;
  }

  .tooltip span:before {
    border-bottom: 10px solid rgb(241 245 249 / var(--tw-bg-opacity));
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    content: '';
    display: block;
    height: 0;
    left: 2px;
    position: absolute;
    top: -10px;
    width: 0;
  }

  .has-tooltip:hover .tooltip {
    @apply visible z-50;
  }
</style>
