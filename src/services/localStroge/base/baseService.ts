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

export class TokenVal extends KeyVal<string> implements ITokenVal {
    override parseValType(Value: string | null): string {
        return String(Value);
    }
}

export class RefreshTokenVal extends KeyVal<string> implements IRefreshTokenVal{
    override parseValType(Value: string | null): string {
        return String(Value);
    }
}

export class TokenValHandler extends BaseKeyValHanler<String,TokenVal> implements ITokenValHandler{

}

export class RefreshTokenValHandler extends BaseKeyValHanler<String,RefreshTokenVal> implements IRefreshTokenValHandler{

}


/**
 * abstract
 */
export interface IKeyVal<ValType>{
    key:string;
    value:ValType | null;

    parseValType(Value:string | null):ValType;
}

export interface ITokenVal extends IKeyVal<String>{

}

export interface IRefreshTokenVal extends IKeyVal<String>{

}

export interface IBaseKeyValHanler<ValueType,KeyValue extends IKeyVal<ValueType>>{
    set(setObje:KeyValue):void;
    get():KeyValue;
}

export interface ITokenValHandler extends IBaseKeyValHanler<String,ITokenVal>{

}

export interface IRefreshTokenValHandler extends IBaseKeyValHanler<String,IRefreshTokenVal>{

}