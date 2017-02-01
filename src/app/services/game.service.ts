import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  board:string[][];
  currentPlayer:string;
  winner:string;
  tie:boolean;
  moves:number;
  score = {X:0, O:0};

  get ended():boolean {
    return !!this.winner || this.tie;
  }

  constructor() {
    this.resetGame();
  }

  play(i,j) {
    if (this.ended) return;

    this.board[i][j] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.moves++;
    this.winner = this._getWinner();
    if (this.winner) {
      this.score[this.winner]++;
    }
    else {
      this.tie = this.moves === 9;
    }
  }

  resetGame() {
    this.board = [new Array(3), new Array(3), new Array(3)];
    this.currentPlayer = 'X';
    this.winner = null;
    this.tie = false;
    this.moves = 0;
  }

  private _getWinner() {
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

  private _rowHasWinner(index) {
    return (this.board[index][0] && this.board[index][0] === this.board[index][1] && this.board[index][1] === this.board[index][2]);
  }

  private _columnHasWinner(index) {
    return (this.board[0][index] && this.board[0][index] === this.board[1][index] && this.board[1][index] === this.board[2][index]);
  }
}
