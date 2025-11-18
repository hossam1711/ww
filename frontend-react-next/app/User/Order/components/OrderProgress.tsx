"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { OrderProgressProps } from '../../../src/types';
import { SIZE_CLASSES, getProgressSteps, getStepStatusColor, formatDate } from '../../../src/config/UserData/orderProgressData';

const OrderProgress: React.FC<OrderProgressProps> = ({
  order,
  showPercentage = true,
  showTimeline = true,
  size = 'md',
  className = ''
}) => {
  const steps = getProgressSteps(order);
  const completedSteps = steps.filter(s => s.status === 'completed').length;
  const activeStep = steps.find(s => s.status === 'active');
  const progressPercentage = (completedSteps / steps.length) * 100;
  const currentSize = SIZE_CLASSES[size];

  return (
    <div className={`bg-white rounded-3xl shadow-2xl border-2 border-gray-200 ${currentSize.container} ${className} w-full p-5`}>
       
      {/* Header */}
      <div className="flex justify-between items-center mb-9">
        <div>
          <h3 className="font-black text-2xl text-gray-900 mb-1">Order Progress</h3>
          <p className="text-base text-gray-600">{order.id} • {order.patientName}</p>
        </div>
        {showPercentage && (
          <div className="text-right">
            <div className="text-4xl font-black bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent mb-1">
              {Math.round(progressPercentage)}%
            </div>
            <div className="text-base text-gray-500 font-bold">Complete</div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-9">
        <div className="flex justify-between items-center mb-2.5">
          <span className="text-lg font-bold text-gray-900">Overall Progress</span>
          <span className="text-base font-bold text-gray-700">{completedSteps} of {steps.length} steps</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-gradient-to-r from-emerald-500 via-green-500 to-green-600 h-4 rounded-full shadow-md"
          />
        </div>
      </div>

      {/* Active Step */}
      {activeStep && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-5 mb-9 shadow-lg"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <activeStep.icon className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-black text-xl text-blue-900 mb-1.5">
                Currently Working On: {activeStep.name}
              </h4>
              <p className="text-base text-blue-700">{activeStep.description}</p>
              {activeStep.estimatedCompletion && (
                <p className="text-sm text-blue-600 mt-1.5 font-semibold">
                  Estimated completion: {formatDate(activeStep.estimatedCompletion)}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}

{/* Horizontal Timeline */}
{showTimeline && (
  <div>
    <h4 className="text-lg font-bold text-gray-900 mb-3">Order Timeline</h4>
    <div className="flex gap-5 justify-between"> {/* إزالة flex-wrap */}
      {steps.slice(0, 5).map((step, idx) => {
        const colors = getStepStatusColor(step.status);
        const Icon = step.icon;
        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center text-center gap-1.5 group cursor-pointer flex-1" // flex-1 لتقسيم المساحة بالتساوي
          >
            <div className={`relative w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border-2 flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h5 className="font-bold text-xs text-gray-900">{step.name}</h5>
            <p className="text-[10px] text-gray-600">{step.description}</p>
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              {step.timestamp && <span>Completed: {formatDate(step.timestamp)}</span>}
              {step.estimatedCompletion && !step.timestamp && <span>Est: {formatDate(step.estimatedCompletion)}</span>}
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>


)}



    </div>
  );
};

export default OrderProgress;
