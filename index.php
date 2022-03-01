<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/style.css">
    <title>testIQDev</title>
  </head>
  <body>
    <div class="main">
      <header>
        <div class="header">
          <h1>iQ dev</h1>
          <span>Deposit Calculator</span>
        </div>
      </header>
    <div class="center">
      <h1>Депозитный калькулятор</h1>
      <p class="center-description">Калькулятор депозитов позволяет рассчитать ваши доходы после внесения суммы на счет в банке по опредленному тарифу.</p>
      <form action="index.php" method="post">
          <label class="startDate-text">Дата открытия</label>
          <label class="startDate-error"></label>
          <label class="sum-text">Сумма вклада</label>
          <label class="sum-error"></label>
          <input type="date" name="startDate" required class="input-startDate">
          <select class="term-select">
            <option>Месяц</option>
            <option>Год</option>
          </select>
          <label class="term-text">Cрок вклада</label>
          <label class="term-error"></label>
          <input type="text" name="term" required class="input-term">
          <input type="text" name="sum" required class="input-sum">
          <label class="percent-text">Процентная ставка, % годовых</label>
          <label class="percent-error"></label>
          <input type="text" name="percent" required class="input-percent">
          <input type="checkbox" name="checkbox" class="checkbox" id="checkbox-text">
          <span for="checkbox-text" class="checkbox-text">Ежемесячное пополнение вклада</span>
          <label class="sumAdd-text">Сумма вклада</label>
          <label class="sumAdd-error"></label>
          <input type="text" name="sumAdd" class="input-sumAdd" required>
          <input type="button" class="runScript-btn" value="Расчитать">
            <hr>
            <div class="block-sumFinal">
              <span>Сумма к выплате</span>
              <p class="p-sumFinal"><span>₽ </span><span class="sumFinal">222222</span></p>
            </div>
      </form>
    </div>
</div>
  <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
  <script type="text/javascript" src="/script.js"></script>
  </body>
</html>
