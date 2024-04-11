export interface Alternative {
  alternative: string;
  correct: boolean;
}

export interface ItemProps {
  id: string;
  knowledge: string;
  componentCurricular: string;
  subject: string;
  specificSubject: string;
  author: string;
  year: number;
  bNCCCompetence: string;
  bNCCHability: string;
  difficultyLevel: string;
  baseText?: string | null;
  resource?: string | null;
  itemCommand: string;
  alternatives: Alternative[] | null;
  createdAt: Date | null;
  updateAt: Date | null;
  userId: string | null;
}
