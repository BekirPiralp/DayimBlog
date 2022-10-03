import {
  KeyVal,
  BaseKeyValHandler,
  IKeyVal,
  IBaseKeyValHandler,
} from "src/services/localStroge/base/baseService";

/**
 * Abstract
 */

export interface IRefreshTokenVal extends IKeyVal<String> {}

export interface IRefreshTokenValHandler extends IBaseKeyValHandler<String, IRefreshTokenVal> {}

/**
 * Concrete
 */
export class RefreshTokenVal extends KeyVal<string> implements IRefreshTokenVal
{
  constructor() {
    super();
    this.key = "refreshTOKEN";
  }
  override parseValType(Value: string | null): string {
    return String(Value);
  }
}

export class RefreshTokenValHandler extends BaseKeyValHandler<String, RefreshTokenVal> implements IRefreshTokenValHandler {}
