<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let num1 = '';
  let num2 = '';
  let selectedCurrency1 = 'USD';
  let selectedCurrency2 = 'USD';
  let exchangeRate = 0;
  let list: string[] = [];
  let quote = `Деньги, конечно, деспотическое могущество, но в то же время и высочайшее равенство, и в этом вся их главная сила. Деньги сравнивают все неравенства.
  © Федор Достоевский`

  function easterEgg(event) {
      const inputValue = event.target.value;
      if (inputValue === '30' || inputValue === '300') {
          quote = `Часы стоимостью в 30$ и 300$ показывают одно и то же время © Стив Джобс`;
      }
      else if (inputValue === '100') {
          quote = `Не имей 100 рублей, а имей 100 друзей.`;
      }
      else if (inputValue === '1000000') {
          quote = `Миллион долларов – это не то, что раньше. © Нельсон Банкер Хант, нефтяной магнат`;
      }
      else if (inputValue === '1') {
          quote = `Доллар, потраченный на себя, – это доллар, потраченный с умом. © Рудольф Нюрнберг`;
      }
      else if (inputValue === '50') {
          quote = `Мне не нужны 50-долларовые слова, чтобы сказать 10-центовую идею. ©  Луи Ламур, писатель`;
      }
  }

  async function fetchExchangeRate() {
    const response = await fetch(`https://open.er-api.com/v6/latest/${selectedCurrency1}`);
    const data = await response.json();
    exchangeRate = data.rates[selectedCurrency2];
    list = Object.keys(data.rates);
  }
  onMount(fetchExchangeRate);
</script>

<body>
<p class="egg">Попробуйте ввести числа 1, 30, 50, 100 или 300</p>
<h1>Обмен валюты</h1>
  <div class="cardContainer">
        <div class="card">
          <h2>Введите число 1: {num1}</h2>
          <input class="inp" type="text" placeholder={num2 * exchangeRate} bind:value={num1} on:input={() => num2 = ''} on:input={easterEgg} />
          <select bind:value={selectedCurrency1} class="select" on:change={fetchExchangeRate} autocomplete="on">
              {#each list as currency}
                  <option value={currency}>{currency}</option>
              {/each}
          </select>
        </div>
        <div class="card">
          <h2>Введите число 2: {num2}</h2>
          <input class="inp" type="text" bind:value={num2} placeholder={num1 * exchangeRate} on:input={() => num1 = ''} on:input={easterEgg} />
          <select bind:value={selectedCurrency2} class="select" on:change={fetchExchangeRate} autocomplete="on">
              {#each list as currency}
                  <option value={currency}>{currency}</option>
              {/each}
          </select>
        </div>
      </div>

<div class="quote">
    {#key quote}
        <p transition:fade>{quote}</p>
    {/key}
</div>

</body>

<style>
    @keyframes animation {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    h1 {
        font-size: 5vw;
        text-align: center;
        margin: 0;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .select:hover{
        cursor: pointer;
    }
    .quote{
        animation: animation 2s ease-in-out;
        width: 30vw;
        color: black;
        font-size: 1.5vw;
        position: fixed;
        right: 0;
        bottom: 0;
        padding: 2vw;
        text-align: right;
        opacity: 1;
        transition: opacity 0.5s; /* Длительность анимации 0.5 секунды */
    }
    .egg{
        position: fixed;
        left: 0;
        bottom: 0;
    }
    .cardContainer {
        display: flex;
        padding: 5vw;
        margin-bottom: 15vw;
    }
    .inp{
        font-size: 2vw;
        width: 13vw;
        height: 2vw;
        box-shadow: 12px 12px 2px 1px #25222230;
    }
    .select {
        font-size: 2vw;
        width: 6vw;
        height: 2.2vw;
        box-shadow: 12px 12px 2px 1px #2c282830;
    }
</style>