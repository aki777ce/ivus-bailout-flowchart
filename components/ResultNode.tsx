import React from 'react';
import { FlowchartNode } from '../types';
import { SuccessIcon, FailureIcon } from './icons';
import { NODE_IDS } from '../constants/nodeIds';

interface ResultNodeProps {
  node: FlowchartNode;
  onRestart: () => void;
}

const ResultNode: React.FC<ResultNodeProps> = ({ node, onRestart }) => {
  const isSuccess = node.id === NODE_IDS.SUCCESS;
  const bgColor = isSuccess ? 'bg-blue-600' : 'bg-red-600';
  const buttonColor = isSuccess
    ? 'bg-blue-700 hover:bg-blue-800'
    : 'bg-red-700 hover:bg-red-800';

  return (
    <div className={`p-8 md:p-12 text-center text-white rounded-xl ${bgColor}`}>
      <div className="flex justify-center mb-6">
        {isSuccess ? <SuccessIcon /> : <FailureIcon />}
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold">{node.title}</h2>
      <p className="mt-3 text-lg opacity-90">{node.description}</p>
      <button
        onClick={onRestart}
        className={`mt-10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 ${buttonColor}`}
      >
        最初からやり直す
      </button>
    </div>
  );
};

export default ResultNode;
