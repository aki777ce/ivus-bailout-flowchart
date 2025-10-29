export enum NodeType {
  DECISION = 'DECISION',
  OUTCOME = 'OUTCOME',
}

export enum BulletColor {
  GREEN = 'GREEN',
  ORANGE = 'ORANGE',
  RED = 'RED',
}

export enum ChoiceStyle {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  DANGER = 'DANGER',
}

export interface ActionItem {
  text: string;
  color?: BulletColor;
  subItems?: ActionItem[];
  isHeader?: boolean;
  image?: string;
}

export interface Choice {
  text: string;
  nextId: string;
  style: ChoiceStyle;
}

export interface BaseNode {
  id: string;
  title: string;
  description?: string;
}

export interface FlowchartDecisionNode extends BaseNode {
  type: NodeType.DECISION;
  actions?: ActionItem[];
  question?: string;
  questionImage?: string;
  choices?: Choice[];
}

export interface FlowchartOutcomeNode extends BaseNode {
  type: NodeType.OUTCOME;
}

export type FlowchartNode = FlowchartDecisionNode | FlowchartOutcomeNode;
