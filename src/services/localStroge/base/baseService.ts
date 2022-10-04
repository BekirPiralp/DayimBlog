/**
 * concrete
 */
export class KeyVal<ValT> implements IKeyVal<ValT>{
    
    key: string = "";
    value: ValT | null = null;

    
    parseValType(Value: string | null): ValT|null {
        throw new Error("Method not implemented.");
    }
    
}

export class BaseKeyValHandler<ValueType ,KeyValue extends  IKeyVal<ValueType>> implements IBaseKeyValHandler<ValueType,KeyValue> {
    

    private _keyValue:KeyValue;
    constructor(keyValue:KeyValue) {
        this._keyValue=keyValue;
    }
    set(setVal: ValueType): void {
        localStorage.removeItem(this._keyValue.key); // olan veriler temizlenir
        localStorage.setItem(this._keyValue.key,String(setVal))
    }
    get(): KeyValue {
            
        this._keyValue.value = this._keyValue.parseValType(localStorage.getItem(this._keyValue.key));
        const response:KeyValue = this._keyValue;
        return response;
    }

    remove(){
        localStorage.removeItem(this._keyValue.key);
    }

    is(): boolean {
        return this.get().value != null;
    }
}

/**
 * abstract
 */
export interface IKeyVal<ValType>{
    key:string;
    value:ValType | null;

    parseValType(Value:string | null):ValType|null;
}

export interface IBaseKeyValHandler<ValueType,KeyValue extends IKeyVal<ValueType>>{
    set(setObje:ValueType):void;
    get():KeyValue;
    remove():void;
    is():boolean;
}




