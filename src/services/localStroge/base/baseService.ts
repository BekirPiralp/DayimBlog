/**
 * concrete
 */
export class KeyVal<ValT> implements IKeyVal<ValT>{
    
    key: string = "";
    value: ValT | null = null;

    
    parseValType(Value: string | null): ValT {
        throw new Error("Method not implemented.");
    }
    
}

export class BaseKeyValHanler<ValueType ,KeyValue extends  IKeyVal<ValueType>> implements IBaseKeyValHanler<ValueType,KeyValue> {
    
        
    set(setObje: KeyValue): void {
        localStorage.removeItem(setObje.key); // olan veriler temizlenir
        localStorage.setItem(setObje.key,String(setObje.value))
    }
    get(): KeyValue {
        
        
        let getObje:KeyValue = new KeyVal<ValueType>() as KeyValue;
        
    
        getObje.value= getObje.parseValType(localStorage.getItem(getObje.key));

        return getObje;
    }

}


/**
 * abstract
 */
export interface IKeyVal<ValType>{
    key:string;
    value:ValType | null;

    parseValType(Value:string | null):ValType;
}

export interface IBaseKeyValHanler<ValueType,KeyValue extends IKeyVal<ValueType>>{
    set(setObje:KeyValue):void;
    get():KeyValue;
}

