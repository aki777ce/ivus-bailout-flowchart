import React from 'react';
import { ActionItem, BulletColor } from '../types';
import { CheckCircleIcon, WarningIcon, XCircleIcon } from './icons';
import { getActionItemStyle } from '../utils/styleHelpers';

interface ActionListItemProps {
  action: ActionItem;
  onShowImage?: (src: string) => void;
}

const ActionListItem: React.FC<ActionListItemProps> = ({ action, onShowImage }) => {
  if (action.isHeader) {
    return (
      <li className="pt-4 first:pt-2">
        <h4 className="font-semibold text-slate-600 text-sm md:text-base underline underline-offset-2">
          {action.text}
        </h4>
        {action.subItems && action.subItems.length > 0 && (
          <ul className="mt-2 space-y-3 pl-2">
            {action.subItems.map((subItem, index) => (
              <ActionListItem key={index} action={subItem} onShowImage={onShowImage} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  let icon: React.ReactNode;
  let textClass = 'text-slate-800';
  let description = '';
  let containerClass = 'bg-white border-slate-200';

  if (action.color) {
    const style = getActionItemStyle(action.color);
    textClass = style.textClass;
    description = style.description;
    containerClass = style.containerClass;

    switch (action.color) {
      case BulletColor.GREEN:
        icon = <CheckCircleIcon />;
        break;
      case BulletColor.ORANGE:
        icon = <WarningIcon />;
        break;
      case BulletColor.RED:
        icon = <XCircleIcon />;
        break;
    }
  } else {
    icon = <div className="w-2.5 h-2.5 rounded-full bg-slate-400 mt-1.5 ml-0.5" />;
  }

  return (
    <li>
      <div className={`flex items-center p-3 rounded-lg border ${containerClass}`}>
        <div
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center mr-3"
          role="img"
          aria-label={description || 'list item'}
        >
          {icon}
        </div>
        <div className="flex-grow">
          <span className={`text-sm md:text-base ${textClass}`}>{action.text}</span>
          {description && <p className="text-xs text-slate-500 mt-0.5">{description}</p>}
        </div>
        {action.image && onShowImage && (
          <button
            onClick={() => onShowImage(action.image)}
            className="ml-4 flex-shrink-0 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
            aria-label={`画像を表示: ${action.text}`}
          >
            表示
          </button>
        )}
      </div>
    </li>
  );
};

export default ActionListItem;
