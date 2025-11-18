"use client";

import React from "react";
import { motion } from "framer-motion";
import { Package, Calendar, DollarSign, User } from "lucide-react";
import { Order } from "../../../src/types";

interface OrderCardProps {
  order: Order;
  onViewDetails: (order: Order) => void;
  isSelected?: boolean;
}

const OrderCard: React.FC<OrderCardProps> = ({
  order,
  onViewDetails,
  isSelected = false,
}) => {
  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes("pending")) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    if (s.includes("progress")) return "text-blue-600 bg-blue-50 border-blue-200";
    if (s.includes("complete")) return "text-green-600 bg-green-50 border-green-200";
    if (s.includes("cancelled")) return "text-red-600 bg-red-50 border-red-200";
    return "text-gray-600 bg-gray-50 border-gray-200";
  };

  const getUrgencyColor = (urgency: string) => {
    const u = urgency.toLowerCase();
    if (u === "high") return "text-red-600 bg-red-50";
    if (u === "medium") return "text-yellow-600 bg-yellow-50";
    if (u === "low") return "text-green-600 bg-green-50";
    return "text-gray-600 bg-gray-50";
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white rounded-xl shadow-lg border-2 p-6 cursor-pointer transition-all duration-200
        ${isSelected
          ? "border-blue-500 shadow-xl ring-2 ring-blue-200"
          : "border-gray-200 hover:border-gray-300 hover:shadow-xl"
        }`}
      onClick={() => onViewDetails(order)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-100 rounded-lg">
            <User className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{order.patientName}</h3>
            <div className="flex items-center text-sm text-gray-900">
              <Package className="w-4 h-4 ml-1" />
              <span>Order #{order.id}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
            {order.status}
          </div>
          <div className={`mt-1 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(order.urgency)}`}>
            {order.urgency}
          </div>
        </div>
      </div>

      {/* Order Details */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Created: {formatDate(order.date)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="w-4 h-4 mr-1" />
            <span className="font-semibold text-green-600">${order.totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderCard;
