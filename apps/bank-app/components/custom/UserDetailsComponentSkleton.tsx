"use client";
import { IdCard } from "lucide-react";
import { Card } from "./Card";

export function UserDetailsComponentSkeleton() {
  return (
    <div className="min-h-[calc(100vh-3rem)] bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-lg animate-pulse">
      <h1 className="text-3xl font-bold text-red-600 flex items-center gap-4 mb-6">
        <IdCard size={36} /> Account Details
      </h1>

      <div className="flex flex-col gap-4">
        <Card className="p-4 flex items-center bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-8">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div className="flex flex-col items-start gap-2">
              <div className="w-32 h-6 bg-gray-300 rounded" />
              <div className="w-20 h-4 bg-gray-300 rounded" />
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-8">
            <div className="w-12 h-12 bg-gray-300 rounded" />
            <div className="flex flex-col items-start gap-2">
              <div className="w-24 h-6 bg-gray-300 rounded" />
              <div className="w-32 h-4 bg-gray-300 rounded" />
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-8">
            <div className="w-12 h-12 bg-gray-300 rounded" />
            <div className="flex flex-col items-start gap-2">
              <div className="w-24 h-6 bg-gray-300 rounded" />
              <div className="w-32 h-4 bg-gray-300 rounded" />
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-6 bg-white shadow-md rounded-lg text-center">
            <div className="w-32 h-6 bg-gray-300 mx-auto rounded" />
            <div className="w-16 h-8 bg-gray-300 mx-auto mt-2 rounded" />
          </Card>

          <Card className="p-6 bg-white shadow-md rounded-lg text-center">
            <div className="w-32 h-6 bg-gray-300 mx-auto rounded" />
            <div className="w-16 h-8 bg-gray-300 mx-auto mt-2 rounded" />
          </Card>

          <Card className="p-6 bg-white shadow-md rounded-lg text-center">
            <div className="w-32 h-6 bg-gray-300 mx-auto rounded" />
            <div className="w-16 h-8 bg-gray-300 mx-auto mt-2 rounded" />
          </Card>
        </div>
      </div>
    </div>
  );
}
