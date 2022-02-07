class Calculator {
    constructor(_operand1, _operand2, _operation) {
        this.operand1 = _operand1;
        this.operand2 = _operand2;
        this.operation = _operation;
    }

    setOperand1(_operand1) {
        this.operand1 = _operand1;
    }

    setOperand2(_operand2) {
        this.operand2 = _operand2;
    }

    setOperation(_operation) {
        this.operation = _operation;
    }

    getResult(){
        switch (this.operation) {
            case "sum":
              return parseInt(this.operand1) + parseInt(this.operand2);
            case "sub":
              return parseInt(this.operand1) - parseInt(this.operand2);
            case "times":
              return parseInt(this.operand1) * parseInt(this.operand2);
            case "over":
              return parseInt(this.operand1) / parseInt(this.operand2);
            default:
                return parseInt(this.operand1) + parseInt(this.operand2);
        }
    }

    clearCalculator(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operation = undefined;

        return {
           operand1:this.operand1,
           operand2:this.operand2,
           operation:this.operation
        } 
    }

}

var operator;
var num1;
var num2;
$(".btnNumber").click(function(){
    var numero = $("#result").html();
    $("#result").html(numero + $(this).html());
});

$("#clearInput").click(function(){
    const calculator = new Calculator(num1,num2,operator);
    calculator.clearCalculator();
    $("#result").html("");
});

$("#times").click(function(){    
    num1 = $("#result").html();
    $("#result").html("");
    operator = "times";
});
$("#over").click(function(){    
    num1 = $("#result").html();
    $("#result").html("");
    operator = "over";
});
$("#sum").click(function(){    
    num1 = $("#result").html();
    $("#result").html("");
    operator = "sum";
});
$("#sub").click(function(){    
    num1 = $("#result").html();
    $("#result").html("");
    operator = "sub";
});

$("#equal").click(function(){
    num2 = $("#result").html();
    const calculator = new Calculator(num1,num2,operator);
    $("#result").html(calculator.getResult());
});