<script>
  const forWhoList = [
    'Ludzie uczący się podstaw sieci i protokołów',
    'Nauczyciele, którzy potrzebują gotowych materiałów szkoleniowych',
    'Początkujące informatyki',
    'dla wszystkich, którzy chcą poszerzyć swoją wiedzę na temat kodów sieciowych.',
  ]

</script>


<section class="section is__grey">
  <div class="padding-top padding-xhuge has__top-sep-line">

    <a name="about"></a>
    <div class="container">
      <div class="left-right-layout">
        <div class="layout-text-wrapper">
          <div class="margin-bottom margin-medium">
            <h1 class="big-heading">W zasadzie niewiele więcej niż gra planszowa...</h1>
          </div>
          <p class="mb-2 normal-text">
            <strong> 404 CODES - </strong> jest to edukacyjna gra planszowa z cyfrowym dodatkiem, <strong>która pomaga łatwo zapamiętać i zrozumieć kody stanu protokołów HTTP, SMTP i FTP.</strong> 
</p>
<p class="mb-2 normal-text">
          Gra łączy w sobie wciągającą rozgrywkę uzupełnioną o aplikację webową, która uzupełnia doświadczenie - z testami, interaktywnymi zadaniami i bazą referencyjną.
        </p>

        <div class="margin-vertical margin-medium">
          <p>Dla kogo przeznaczona ta gra:</p>
              <ul role="list " class='flex flex-col flex-nowrap plan-rich-text w-richtext'>

                {#each forWhoList as item}
                  <li class='w-full flex flex-row items-center align-center'><div class='bg-black w-2 h-2 mr-4'></div> {item}</li>
                {/each}
              </ul>
        </div>
        </div>
        <div  class="layout-image-wrapper">
          <img src="/images/qr.svg" loading="lazy" alt="" class="image-9">
        </div>
      </div>
    </div>
  </div>
</section>


<style>


</style>
