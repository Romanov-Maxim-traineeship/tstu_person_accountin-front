<script>
  export let title;
</script>

<div class="level">
  <div class="level-left">
    <div class="level-item">
      <div class="title">{title}</div>
    </div>
  </div>
  <div class="level-right">
    <div class="level-item">
      <slot name="extra" />
    </div>
  </div>
</div>
