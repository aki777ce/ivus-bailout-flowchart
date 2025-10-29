import React from 'react';
import { FlowchartNode, Choice } from '../types';
import ActionListItem from './ActionListItem';
import ImageModal from './ImageModal';
import { ArrowIcon } from './icons';
import { getChoiceClasses } from '../utils/styleHelpers';
import { useImageModal } from '../hooks/useImageModal';

interface DecisionNodeProps {
  node: FlowchartNode;
  onChoice: (nextId: string) => void;
}

const DecisionNode: React.FC<DecisionNodeProps> = ({ node, onChoice }) => {
  const { imageSrc, showImage, closeModal } = useImageModal();
  
  return (
    <>
      <div className="p-6 md:p-8">
        <div className="border-b border-slate-200 pb-4 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">{node.title}</h2>
          {node.description && <p className="mt-2 text-slate-600 text-sm md:text-base">{node.description}</p>}
        </div>

        {node.actions && node.actions.length > 0 && (
          <div className="mb-6">
            <ul className="space-y-3">
              {node.actions.map((action, index) => (
                <ActionListItem key={index} action={action} onShowImage={showImage} />
              ))}
            </ul>
          </div>
        )}

        {node.question && (
          <div className="my-6 p-4 bg-slate-100 rounded-lg flex items-center justify-center text-center">
            <p className="text-lg font-semibold text-slate-700">
              {node.question}
            </p>
            {node.questionImage && (
              <button
                onClick={() => showImage(node.questionImage)}
                className="ml-4 px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                表示
              </button>
            )}
          </div>
        )}

        {node.choices && node.choices.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">選択してください</h3>
            <div className="space-y-3">
              {node.choices.map((choice: Choice) => (
                <button
                  key={choice.nextId}
                  onClick={() => onChoice(choice.nextId)}
                  className={getChoiceClasses(choice.style)}
                >
                  <span>{choice.text}</span>
                  <ArrowIcon />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {imageSrc && <ImageModal src={imageSrc} onClose={closeModal} />}
    </>
  );
};

export default DecisionNode;