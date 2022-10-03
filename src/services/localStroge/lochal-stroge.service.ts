import { Injectable } from '@angular/core';
import { IRefreshTokenValHandler,RefreshTokenValHandler } from './other/refreshToken/refreshTokenService';
import { ITokenValHandler, TokenValHandler } from './other/token/tokenService';

@Injectable({
  providedIn: 'root'
})
export class LochalStrogeService {

  constructor() { 
    this.tokenValHandler=new TokenValHandler();
    this.refreshTokenValHandler = new RefreshTokenValHandler();
  }

  tokenValHandler:ITokenValHandler;
  refreshTokenValHandler:IRefreshTokenValHandler;
}
