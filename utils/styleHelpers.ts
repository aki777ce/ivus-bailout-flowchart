import { ChoiceStyle, BulletColor } from '../types';

/**
 * Get button classes based on choice style
 */
export const getChoiceClasses = (style: ChoiceStyle): string => {
  const baseClasses =
    'w-full text-left p-4 rounded-lg transition-colors duration-200 ease-in-out flex items-center justify-between text-sm sm:text-base font-semibold';

  switch (style) {
    case ChoiceStyle.PRIMARY:
      return `${baseClasses} bg-blue-500 text-white hover:bg-blue-600`;
    case ChoiceStyle.SECONDARY:
      return `${baseClasses} bg-slate-200 text-slate-800 hover:bg-slate-300`;
    case ChoiceStyle.DANGER:
      return `${baseClasses} bg-red-500 text-white hover:bg-red-600`;
    default:
      return `${baseClasses} bg-gray-500 text-white hover:bg-gray-600`;
  }
};

/**
 * Style configuration for action items based on bullet color
 */
export interface ActionItemStyle {
  textClass: string;
  description: string;
  containerClass: string;
}

/**
 * Get style configuration for action items
 */
export const getActionItemStyle = (color: BulletColor): ActionItemStyle => {
  switch (color) {
    case BulletColor.GREEN:
      return {
        textClass: 'text-slate-800 font-medium',
        description: '推奨される処置',
        containerClass: 'bg-green-50 border-green-200',
      };
    case BulletColor.ORANGE:
      return {
        textClass: 'text-slate-800',
        description: '注意を要する処置 (複雑・合併症リスク)',
        containerClass: 'bg-yellow-50 border-yellow-200',
      };
    case BulletColor.RED:
      return {
        textClass: 'text-slate-500 line-through',
        description: '禁忌 (行ってはいけない処置)',
        containerClass: 'bg-red-50 border-red-200',
      };
  }
};
