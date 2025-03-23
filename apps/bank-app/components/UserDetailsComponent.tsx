"use client";
import {
  CreditCard,
  IdCard,
  User,
  CheckCircle,
  XCircle,
  Phone,
} from "lucide-react";
import { Card } from "./custom/Card";
import { UserDetailsResponse } from "@/actions/UserDetails";
import clsx from "clsx";

export function UserDetailsComponent({
  userDetails,
}: {
  userDetails: UserDetailsResponse | null;
}) {
  if (!userDetails) {
    return (
      <div className="text-center text-red-600 font-semibold">
        Please refresh the page
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-3rem)] bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-red-600 flex items-center gap-4 mb-6">
        <IdCard size={36} /> Account Details
      </h1>

      <div className="flex flex-col gap-4">
        <Card className="p-4 flex items-center bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-8">
            <div>
              <User size={32} color="red" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-semibold">{userDetails.name}</span>
              <span
                className={clsx(
                  "inline-flex items-center px-2 py-1 text-xs font-medium rounded-lg mt-2",
                  userDetails.isVerified
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700",
                )}
              >
                {userDetails.isVerified ? (
                  <CheckCircle className="w-4 h-4 mr-1" />
                ) : (
                  <XCircle className="w-4 h-4 mr-1" />
                )}
                {userDetails.isVerified ? "Verified" : "Not Verified"}
              </span>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-8">
            <div>
              <CreditCard size={32} color="red" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-semibold text-left">
                Account ID
              </span>
              <span className="text-gray-600 text-left">{userDetails.id}</span>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-8">
            <div>
              <Phone size={32} color="red" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg font-semibold">Phone Number</span>
              <span className="text-gray-600">{userDetails.number}</span>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition-all">
            <p className="text-gray-600 text-lg font-medium">
              Total Transactions
            </p>
            <p className="text-3xl font-bold text-red-600">
              {userDetails.allTransactionsNo}
            </p>
          </Card>

          <Card className="p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition-all">
            <div className="flex items-center justify-center space-x-2">
              <p className="text-lg font-medium text-gray-600">
                Sent Transactions
              </p>
            </div>
            <p className="text-3xl font-bold text-red-600">
              {userDetails.sendTransactionsNo}
            </p>
          </Card>

          <Card className="p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition-all">
            <div className="flex items-center justify-center space-x-2">
              <p className="text-lg font-medium text-gray-600">
                Received Transactions
              </p>
            </div>
            <p className="text-3xl font-bold text-green-600">
              {userDetails.receivedTransactionsNo}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
