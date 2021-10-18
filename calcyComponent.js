import { LightningElement } from 'lwc';

export default class CalcyComponent extends LightningElement {

strToEvaluate = '';
resultValue;
isFinal = false;
finalResultValue ;
historyArray = [];

    handleClick(event){
        var btlValue = event.target.label;
        if(btlValue === '='){
            var arrStr = '';
            this.finalResultValue = eval(this.strToEvaluate);
            this.isFinal = true;
            arrStr = this.strToEvaluate + ' = ' + this.finalResultValue;
            this.historyArray.push(arrStr);
            console.log(' this.finalResultValue --> ' + this.finalResultValue)
        }else{
            if(this.isFinal){
                this.isFinal = false;
                this.strToEvaluate = this.finalResultValue + btlValue;
                this.resultValue = this.strToEvaluate;
            }else{
                this.strToEvaluate+=btlValue;
                this.resultValue = this.strToEvaluate;
            }
        }
    }
}
