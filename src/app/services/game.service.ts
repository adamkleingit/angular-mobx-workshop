import { Injectable } from '@angular/core';
import { computed, observable, action, reaction } from 'mobx';

@Injectable()
export class GameService {
  @observable board:string[][];
  @observable score = {X:0, O:0};

  @computed get currentPlayer():string {
    return this.moves % 2 ? 'O' : 'X';
  }

  @computed get winner():string {
    return this._getWinner();
  }

  @computed get tie():boolean {
    return this.moves === 9 && !this.winner;
  }

  @computed get moves():number {
    return this._getRowMoves(0) + this._getRowMoves(1) + this._getRowMoves(2);
  }

  @computed get ended():boolean {
    return !!this.winner || this.tie;
  }

  constructor() {
    this.resetGame();
    this.keepScore();
  }

  @action play(i,j) {
    if (this.ended) return;

    this.board[i][j] = this.currentPlayer;
  }

  keepScore() {
    reaction(() => this.winner, (winner) => {
      if (winner) this.score[winner]++;
    });
  }

  @action resetGame() {
    this.board = [observable(new Array(3)), observable(new Array(3)), observable(new Array(3))];
  }

  private _getWinner():string {
    if (this._rowHasWinner(0)) return this.board[0][0];
    if (this._rowHasWinner(1)) return this.board[1][0];
    if (this._rowHasWinner(2)) return this.board[2][0];

    if (this._columnHasWinner(0)) return this.board[0][0];
    if (this._columnHasWinner(1)) return this.board[0][1];
    if (this._columnHasWinner(2)) return this.board[0][2];

    // check diagonals
    if (this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) return this.board[0][0];
    if (this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) return this.board[0][2];

    return null;
  }

  private _rowHasWinner(index):boolean {
    return (this.board[index][0] && this.board[index][0] === this.board[index][1] && this.board[index][1] === this.board[index][2]);
  }

  private _columnHasWinner(index):boolean {
    return (this.board[0][index] && this.board[0][index] === this.board[1][index] && this.board[1][index] === this.board[2][index]);
  }

  private _getRowMoves(row):number {
    return this.board[row].filter(cell => cell).length;
  }
}
