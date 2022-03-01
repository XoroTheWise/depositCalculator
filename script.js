$('.runScript-btn').on('click', function(e){
    e.preventDefault();
    let startDate = $('input[name="startDate"]').val();
    let sum  = $('input[name="sum"]').val();
    let percent  = $('input[name="percent"]').val();
    let term = [];
    term[0] = $('input[name="term"]').val();
    let errors = [];
    let sumAdd = 0;

    if (startDate === "") {
      $('.input-startDate').css('border-color', 'red');
      errors[0] = "* выберите дату";
    } else {
      $('.startDate-error').text("");
      $('.input-startDate').css('border-color', 'black');
    }

    if (sum === "" || (sum < 1000 || sum > 3000000) || isNaN(sum) === true ) {
      $('.input-sum').css('border-color', 'red');
      errors[1] = "* 1000 - 3000000";
    } else {
      $('.sum-error').text("");
      $('.input-sum').css('border-color', 'black');
    }
    if (term[0] % 1 === 0) {
        if ($('.term-select').val() === "Месяц") {
            if (term[0] === "" || (term[0] < 1 || term[0] > 60) || isNaN(term[0]) === true) {
                $('.input-term').css('border-color', 'red');
                errors[2] = "* месяц: 1 - 60";
            } else {
                term[1] = 1;
                $('.term-error').text("");
                $('.input-term').css('border-color', 'black');
            }
        } else if ($('.term-select').val() === "Год") {
            if (term[0] === "" || (term[0] < 1 || term[0] > 5) || isNaN(term[0]) === true) {
                $('.input-term').css('border-color', 'red');
                errors[2] = "* год: 1 - 5";
            } else {
                term[1] = 2;
                $('.term-error').text("");
                $('.input-term').css('border-color', 'black');
            }
        }
    } else {
        $('.input-term').css('border-color', 'red');
        errors[2] = "* целое число";
    }

    if ($('.checkbox').is(':checked')){
      sumAdd = $('input[name="sumAdd"]').val();
      if (sumAdd === "" || sumAdd < 0 || sumAdd > 3000000  || isNaN(sumAdd) === true ) {
        $('.input-sumAdd').css('border-color', 'red');
        errors[3] = "* 0 - 3000000";
      } else {
        $('.sumAdd-error').text("");
        $('.input-sumAdd').css('border-color', 'black');
      }
    } else {
      sumAdd = 0;
    }

    if (percent % 1 === 0) {
      if (percent === "" || (percent < 3 || percent > 100)  || isNaN(percent) === true ) {
        $('.input-percent').css('border-color', 'red');
        errors[4] = "* 3 - 100";
      } else {
        $('.percent-error').text("");
        $('.input-percent').css('border-color', 'black');
      }
    } else {
      $('.input-percent').css('border-color', 'red');
      errors[4] = "* 3 - 100";
    }
    if (errors.length > 0) {
      $('.startDate-error').text(errors[0]);
      $('.sum-error').text(errors[1]);
      $('.term-error').text(errors[2]);
      $('.sumAdd-error').text(errors[3]);
      $('.percent-error').text(errors[4]);
      $('.sumFinal').text("");
    } else {
    $.ajax({
          url: "/calc.php",
          type: "post",
          dataType: 'json',
          data: {
            startDate: startDate,
            sum: sum,
            term: term,
            percent: percent,
            sumAdd: sumAdd
          },
          success (data){
              $('.block-sumFinal').css("display",  "block");
              const sum = new Intl.NumberFormat('ru-RU').format(data.sum);
              $('.sumFinal').text(sum);
          }
      });
    }
});
$(".checkbox").click(function(e) {
  if ($('.checkbox').is(':checked')){
    $('.sumAdd-text').css('display', 'block');
  	$('.input-sumAdd').css('display', 'block');
  } else {
    $('.sumAdd-error').text("");
    $('.sumAdd-text').css('display', 'none');
    $('.input-sumAdd').css('display', 'none');
  }
});
