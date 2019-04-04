import React, { useState } from 'react';
import Square from './Square'

const findWin = (board:any) => {
    const winArray:any = [
        [ 0, 1, 2 ],
        [ 3, 4, 5 ],
        [ 6, 7, 8 ],
        [ 0, 3, 6 ],
        [ 1, 4, 7 ],
        [ 2, 5, 8 ],
        [ 0, 4, 8 ],
        [ 2, 4, 6 ]
    ]

    let winner:string = ''

    let winningCombo:any = winArray.find((combo:any) => {
        return board[combo[0]] != '' && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]
    })


    if (winningCombo) {
        winner = board[winningCombo[0]]
        alert(`${winner} is the winner!`)
    }

}

const emptySqr = (board:any, index:number) => {
    if (board[index] === '') {
        return true
    } else {
        return false
    }
}

const boardUpdate = (updateMethod:any, index:number, player:string) => {
    return updateMethod((prevBoard:any) => {
            prevBoard[index] = player
            return prevBoard
    })
}

const playerUpdate = (updateMethod:any) => {
    return updateMethod((prevPlayer:any) => {
        console.log(prevPlayer)
        if (prevPlayer == 'X') {
            return 'O'
        } else {
            return 'X'
        }
    })
}

const attack = (boardUp:any, playerUp:any, board:any, i:number, p:string) => {
    console.log('doing stuff');
    if (emptySqr(board, i)) {
        console.log('still doing stuff');
        boardUpdate(boardUp, i, p)
        playerUpdate(playerUp)
        findWin(board)
    }
}

function GameBoard() {
    const [ board, setBoard ] = useState(['', '', '', '', '', '', '', '', '']);
    const [ player, setPlayer ] = useState('X');
    const [ winStatus, setWinStatus ] = useState(false)
    console.log(board);
    

    let allSquares = board.map((s, i) => {
        return <Square pos={s} attack={() => (attack(setBoard, setPlayer, board,  i, player))}/>
    });
    return (
        <div id="table">
            {allSquares}
        </div>
    )
};

export default GameBoard
