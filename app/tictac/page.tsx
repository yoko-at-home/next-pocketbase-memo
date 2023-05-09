"use client";
import Game from "./game";

export default function TictacPage() {
  return (
    <div className="mt-20 bg-gray-50">
      <h1 className="pl-10 pt-10">Tic-Tac-Toe</h1>
      <Game />
    </div>
  );
}
