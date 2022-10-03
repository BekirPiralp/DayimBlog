import {
  KeyVal,
  BaseKeyValHandler,
  IKeyVal,
  IBaseKeyValHandler,
} from "../../base/baseService";

/**
 * Abstract
 */
export interface ITokenVal extends IKeyVal<String> {}

export interface ITokenValHandler
  extends IBaseKeyValHandler<String, ITokenVal> {}
/**
 * Concrete
 */
export class TokenVal extends KeyVal<string> implements ITokenVal {
  constructor() {
    super();
    this.key = "token";
  }
  override parseValType(Value: string | null): string {
    return String(Value);
  }
}

export class TokenValHandler
  extends BaseKeyValHandler<String, TokenVal>
  implements ITokenValHandler {}
