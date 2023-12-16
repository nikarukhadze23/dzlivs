const buttons = $(".key");
const result = $(".result");
const equal = $("#equal");
const del = $("#del");
const reset = $("#reset");

const selectValue = $("#themes");

var isFinished = false;

buttons.on("click", function () {
  if (result.text() == ("0") || (result.text() == "/" || result.text() ==  "*" || result.text() ==  "-"  || result.text() ==  "+") || isFinished == true) {
    result.text("");
    isFinished = false;
    result.text(result.text() + this.value);
  }else {
    result.text(result.text() + this.value);
  }
});

equal.on("click", function () {
  var expression = result.text();
  var answer = eval(expression);
  result.text(answer);
  isFinished = true;
});

del.on("click", function () {
  var currentNumber = result.text();
  var del = currentNumber.slice(0, -1);
  result.text(del);
  if (result.text() == "") {
    result.text("0");
  }
});

reset.on("click keypress", function () {
  result.text("0");
});


function themeSelector() {
  switch (selectValue.prop("value")) {
    case "1":
      $(":root").css({"--bodyBgColor": "hsl(222, 26%, 31%)", "--headerColor": "white",
      "--themesBgColor": " hsl(223, 30%, 14%", "--displayBgColor": "hsl(224, 36%, 15%)",
      "--displayColor": "white", "--containerBgColor": "hsl(223, 31%, 20%)", 
      "--buttonsColor": "hsl(221, 14%, 31%)", "--buttonsBgcolor": "hsl(30, 25%, 89%)",
      "--buttonsBoxShadow": "0px 4px hsl(28, 16%, 65%)", "--buttonsHover": "hsl(0, 0%, 100%)",
      "--delColor": "white", "--delBgColor": "hsl(225, 21%, 49%)", "--delBoxShadow": "0px 4px hsl(223, 30%, 36%)",
      "--delHover": "hsl(225, 30%, 60%)", "--resetColor": "white", "--resetBgColor":"hsl(225, 21%, 49%)",
      "--resetBoxShadow": "0px 4px hsl(223, 30%, 36%)", "--resetHover":"hsl(225, 30%, 60%)",
      "--equalColor": "white", "--equalBgColor": "hsl(6, 63%, 50%)", "--equalBoxShadow" :"0px 4px hsl(6, 70%, 34%)",
      "--equalHover": "hsl(6, 86%, 58%)", "--sliderColor": "hsl(6, 90%, 59%)", "--sliderHover": "hsl(7, 76%, 79%)"
     });
      break;
    case "2":
      $(":root").css({"--bodyBgColor": "hsl(0, 0%, 90%)", "--headerColor": "hsl(221, 14%, 31%)",
      "--themesBgColor": "hsl(0, 5%, 81%)", "--displayBgColor": "hsl(0, 0%, 93%)",
      "--displayColor": "hsl(221, 14%, 31%)", "--containerBgColor": "hsl(0, 5%, 81%)", 
      "--buttonsColor": "hsl(221, 14%, 31%)", "--buttonsBgcolor": "hsl(30, 25%, 89%)",
      "--buttonsBoxShadow": "0px 4px hsl(28, 16%, 65%)", "--buttonsHover": "hsl(0, 0%, 100%)",
      "--delColor": "white", "--delBgColor": "hsl(185, 42%, 37%", "--delBoxShadow": "0px 4px hsl(185, 58%, 25%)",
      "--delHover": "hsl(185, 42%, 55%)", "--resetColor": "white", "--resetBgColor":"hsl(185, 42%, 37%)",
      "--resetBoxShadow": "0px 4px hsl(185, 58%, 25%)", "--resetHover":"hsl(185, 42%, 55%)",
      "--equalColor": "white", "--equalBgColor": "hsl(25, 98%, 40%)", "--equalBoxShadow" :"0px 4px hsl(25, 99%, 27%)",
      "--equalHover": "hsl(25, 98%, 55%)", "--sliderColor": "hsl(6, 90%, 59%)", "--sliderHover": "hsl(7, 76%, 79%)"
     });
      break;
      case "3":
        $(":root").css({"--bodyBgColor": "hsl(268, 75%, 9%)", "--headerColor": "hsl(52, 100%, 62%)",
        "--themesBgColor": "hsl(268, 71%, 12%)", "--displayBgColor": "hsl(268, 71%, 12%)",
        "--displayColor": "hsl(52, 100%, 62%)", "--containerBgColor": "hsl(268, 71%, 12%)", 
        "--buttonsColor": "hsl(52, 100%, 62%)", "--buttonsBgcolor": "hsl(268, 47%, 21%)",
        "--buttonsBoxShadow": "0px 4px hsl(290, 70%, 36%)", "--buttonsHover": "hsl(268, 47%, 40%)",
        "--delColor": "white", "--delBgColor": "hsl(281, 89%, 26%)", "--delBoxShadow": "0px 4px hsl(285, 91%, 52%)",
        "--delHover": "hsl(268, 47%, 49%)", "--resetColor": "white", "--resetBgColor":"hsl(281, 89%, 26%)",
        "--resetBoxShadow": "0px 4px hsl(285, 91%, 52%)", "--resetHover":"hsl(268, 47%, 49%)",
        "--equalColor": "black", "--equalBgColor": "hsl(176, 100%, 44%)", "--equalBoxShadow" :"0px 4px hsl(177, 92%, 70%)",
        "--equalHover": "hsl(176, 100%, 64%)", "--sliderColor": "hsl(176, 100%, 44%)", "--sliderHover": "hsl(176, 100%, 60%)"
       });
       break;
      default:
  }
}