export interface AulaModel {
  title: string;
  description: string;
  imageUrl: string;
  isLeft?: boolean; // Se necessário, pode ser usado para determinar o lado da exibição
}