import { useAppContext } from "./calculatorState";
import React from "react";


export default function CalculatorScreen(){
    const calculator = useAppContext ();

    return <div className="calculatorScreen">
        <div>
            <span>Memory: {calculator.memory}</span>
            <span>Operation: {calculator.operation}</span>
            <span>Decimal: {calculator.isDecimal? 'Decimal' : 'Entero' }</span>
        </div>
        <div className="calculatorCurrentValue">{calculator.currentValue}
        {calculator.isDecimal? '.': ' '}
        </div>
    </div>
}