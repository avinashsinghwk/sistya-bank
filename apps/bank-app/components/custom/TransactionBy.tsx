"use client";
import { MoveDownLeft, MoveUpRight } from "lucide-react";

interface TransactionByPropsType {
  type: "send" | "received" | "all";
  sender: {
    name: string | null;
    number: string;
    id: string;
  };
  receiver: {
    name: string | null;
    number: string;
    id: string;
  };
  accountId: string;
}

export function TransactionBy({
  type,
  accountId,
  sender,
  receiver,
}: TransactionByPropsType) {
  const isSent = sender.id === accountId;
  const displayType = type === "all" ? (isSent ? "send" : "received") : type;

  return (
    <div className="flex items-center gap-2 text-gray-800">
      {displayType === "send" ? (
        <>
          <MoveUpRight className="text-red-500 w-8 h-8" />
          <span className="font-medium text-gray-700">
            <span className="font-bold">To: </span>
            <span className="font-semibold">
              {receiver.name || "Unknown"}
            </span>{" "}
            <span className="text-gray-500 text-sm">({receiver.number})</span>
          </span>
        </>
      ) : (
        <>
          <MoveDownLeft className="text-green-500 h-8 w-8" />
          <span className="font-medium text-gray-700">
            <span className="font-bold">From: </span>
            <span className="font-semibold">
              {sender.name || "Unknown"}
            </span>{" "}
            <span className="text-gray-500 text-sm">({sender.number})</span>
          </span>
        </>
      )}
    </div>
  );
}
