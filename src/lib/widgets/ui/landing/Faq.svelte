<script>
  const faq = [
    {
      index: '00',
      q: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      a: [
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      ]
    },
    {
      index: '01',
      q: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      a: [
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      ]
    },
    {
      index: '02',
      q: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      a: [
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      ]
    },
    {
      index: '03',
      q: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      a: [
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      ]
    },

  ];


  $: selectedQuestion = faq[0];
</script>

<section class="section has__bottom-sep-line">
  <div class="padding-vertical">
    <div class="container">
      <div class="padding-horizontal">
        <div class="padding-vertical padding-huge">
          <div class="padding-bottom padding-medium">
            <h2 class="big-heading">F.A.Q.</h2>
          </div>

          <a name="faq"></a>

          <div class="">
            <div class="custom-tab-grid">

              <div class="what-is-rk-m-wrapper w-dyn-list">
                <div role="list" class="what-is-kr-m-list w-dyn-items">
                  {#each faq as question}
                  <div on:click={()=> selectedQuestion = question } role="listitem" class=" ">
                    <div  class="grid-card">
                      <div class="tab-number-wrapper">
                        <div class="tab-number">{question.index}</div>
                      </div>
                      <div class="tab-title">{question.q}</div>
                    </div>

                    <div  class=" statements-dropdown w-dropdown">
                      <div class="statements-dropdown-toggle w-dropdown-toggle">
                        <div class="tab-number-wrapper">
                          <div class="tab-number">{question.index}</div>
                        </div>
                        <div class="tab-title">{question.q}</div>
                      </div>
                      <nav class="statements-dropdown-list w-dropdown-list">
                        <div class="tab-text-holder">
                          <div class="tab-rich-text w-richtext">
                            {#each question.a as answer}
                              <p>{answer}</p>
                            {/each}
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                  {/each}
                </div>
              </div>
              <div  class="tab-content desktop_only ">
                <div  class="w-dyn-list">
                  <div  role="list" class=" w-dyn-items ">
                    <div  role="listitem" class=" w-dyn-item ">
                      <div class="">
                        <h3 class="semi-heading  cc-statement-heading">{selectedQuestion.index} {selectedQuestion.q}</h3>
                        <div class="tab-rich-text  w-richtext">
                          {#each selectedQuestion.a as answer}
                          <p>{answer}</p>
                          {/each}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<style>
.custom-tab-grid {
  grid-column-gap: 64px;
  grid-row-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}


.w-dropdown {
  text-align: left;
  z-index: 900;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  position: relative;
}

.w-dropdown-list, .w-dropdown-toggle  {
  display: none;
}

  .tab-content.desktop_only {
  margin-top: -16px;
}
.tab-content {
  line-height: 1.3;
  position: relative;
  overflow: auto;
}

  @media screen and (max-width: 991px) {
 .w-dropdown-toggle {
  vertical-align: top;
  color: #222;
  text-align: left;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  position: relative;
}

.w-dropdown-toggle {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  padding-right: 40px;
  display: inline-block;
}

.w-dropdown-toggle:focus {
  outline: 0;
}


    .w-dropdown-list {
      display: block;
      background: #ddd;
      min-width: 100%;
      position: absolute;
    }


    .custom-tab-grid {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: block;
  }

  .tab-content.desktop_only {
    display: none;
  }
  .tab-content {
    margin-top: 0;
    font-size: 23px;
  }
.statements-dropdown {
    border-bottom: 1px solid #000;
    display: block;
  }

  .statements-dropdown-toggle {
    color: var(--black);
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 32px 0;
    transition: padding .4s cubic-bezier(.075, .82, .165, 1);
    display: flex;
  }

  .statements-dropdown-toggle:hover {
    color: var(--hover-black);
    padding-left: 16px;
  }

  .statements-dropdown-toggle.w--open {
    padding-left: 16px;
  }

  .statements-dropdown-list {
    background-image: linear-gradient(to bottom, rgba(222, 212, 255, 0), var(--purple));
    margin-left: -32px;
    margin-right: -32px;
    padding-left: 32px;
    padding-right: 32px;
    position: static;
    overflow: hidden;
  }

  .statements-dropdown-list.w--open {
    background-color: rgba(0, 0, 0, 0);
  }

  .statements-dropdown-list.cc-special-dropdown-list {
    background-image: linear-gradient(to bottom, var(--white-smoke), rgba(244, 244, 244, 0));
  }
}


@media screen and (max-width: 767px) {
  .statements-dropdown-list {
    margin-left: -18px;
    margin-right: -18px;
    padding-left: 18px;
    padding-right: 18px;
  }
}
@media screen and (max-width: 479px) {
  .statements-dropdown-toggle {
    padding-top: 18px;
    padding-bottom: 18px;
  }
    .tab-content {
    font-size: 19px;
  }
}
</style>
