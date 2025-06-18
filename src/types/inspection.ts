export interface InspectionData {
  // Cabeçalho
  obra: string;
  local: string;
  data: string;
  responsavelTecnico: string;
  
  // Informações do Item
  item: string;
  subitem: string;
  elemento: string;
  localizacao: string;
  
  // Especificações
  especificacao: string;
  normaReferencia: string;
  tolerancia: string;
  
  // Inspeção
  tipoInspecao: 'Visual' | 'Dimensional' | 'Ensaio' | 'Outro';
  instrumentoUtilizado: string;
  criterioAceitacao: string;
  
  // Resultados
  resultadoObtido: string;
  conformidade: 'Conforme' | 'Não Conforme' | 'Condicional';
  observacoes: string;
  
  // Ações
  acaoCorretiva: string;
  prazoCorrecao: string;
  responsavelCorrecao: string;
  
  // Assinaturas
  inspetorNome: string;
  inspetorData: string;
  supervisorNome: string;
  supervisorData: string;
}

export const initialInspectionData: InspectionData = {
  obra: '',
  local: '',
  data: new Date().toISOString().split('T')[0],
  responsavelTecnico: '',
  item: '',
  subitem: '',
  elemento: '',
  localizacao: '',
  especificacao: '',
  normaReferencia: '',
  tolerancia: '',
  tipoInspecao: 'Visual',
  instrumentoUtilizado: '',
  criterioAceitacao: '',
  resultadoObtido: '',
  conformidade: 'Conforme',
  observacoes: '',
  acaoCorretiva: '',
  prazoCorrecao: '',
  responsavelCorrecao: '',
  inspetorNome: '',
  inspetorData: new Date().toISOString().split('T')[0],
  supervisorNome: '',
  supervisorData: new Date().toISOString().split('T')[0],
};