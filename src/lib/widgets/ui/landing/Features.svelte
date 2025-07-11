<script>
  const stats = [
    {
      title: 'Wiek',
      count: '14+'
    },
    {
      title: 'Rozgrywka',
      count: '102 minut.'
    },
    {
      title: 'Ilość kodów',
      count: '300+'
    },
    {
      title: '',
      count: 'Dostępna open-source'
    },

  ]

</script>

<section class="section">
  <div class="padding-top padding-xhuge">
    <div class="container">
      <div  class="heading-wrapper">
        <div class="padding-bottom padding-medium">
          <h2 class="big-heading">Zawartość gry</h2>
        </div>
      </div>
      <div class="kr-m-values-layout">
        {#each stats as stat}
        <div class="value-wrapper">
          <div class="value-inner-wrapper">
            <div class="normal-text has__all-caps">{stat.title}</div>
            <h3 class="big-heading">{stat.count}</h3>
            <!-- <img src="/images/62221fb6a06c831c1e593a37_Lokal.svg" loading="lazy" alt="Schwarze Stecknadel" class="value-image"> -->
          </div>
        </div>
        {/each}
      </div>
    </div>
  </div>
</section>


<style>


</style>
