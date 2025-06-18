import React, { useState } from 'react';
import { Download, Save, RefreshCw } from 'lucide-react';
import { Header } from './components/Header';
import { FormSection } from './components/FormSection';
import { FormField } from './components/FormField';
import { InspectionData, initialInspectionData } from './types/inspection';
import { generateInspectionDocument } from './utils/documentGenerator';

function App() {
  const [formData, setFormData] = useState<InspectionData>(initialInspectionData);
  const [isExporting, setIsExporting] = useState(false);

  const handleFieldChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      await generateInspectionDocument(formData);
    } catch (error) {
      console.error('Erro ao exportar documento:', error);
      alert('Erro ao exportar documento. Tente novamente.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleReset = () => {
    if (confirm('Tem certeza que deseja limpar todos os campos?')) {
      setFormData(initialInspectionData);
    }
  };

  const handleSave = () => {
    localStorage.setItem('conin-inspection-data', JSON.stringify(formData));
    alert('Dados salvos localmente com sucesso!');
  };

  const handleLoad = () => {
    const savedData = localStorage.getItem('conin-inspection-data');
    if (savedData) {
      setFormData(JSON.parse(savedData));
      alert('Dados carregados com sucesso!');
    } else {
      alert('Nenhum dado salvo encontrado.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-4 justify-end">
            <button
              onClick={handleLoad}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Carregar</span>
            </button>
            
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>Salvar</span>
            </button>
            
            <button
              onClick={handleReset}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Limpar</span>
            </button>
            
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>{isExporting ? 'Exportando...' : 'Exportar Documento'}</span>
            </button>
          </div>

          {/* Formulário */}
          <div className="grid grid-cols-1 gap-8">
            {/* Informações Gerais */}
            <FormSection title="1. Informações Gerais">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Obra"
                  name="obra"
                  value={formData.obra}
                  onChange={handleFieldChange}
                  required
                  placeholder="Nome da obra"
                />
                <FormField
                  label="Local"
                  name="local"
                  value={formData.local}
                  onChange={handleFieldChange}
                  required
                  placeholder="Localização da inspeção"
                />
                <FormField
                  label="Data"
                  name="data"
                  type="date"
                  value={formData.data}
                  onChange={handleFieldChange}
                  required
                />
                <FormField
                  label="Responsável Técnico"
                  name="responsavelTecnico"
                  value={formData.responsavelTecnico}
                  onChange={handleFieldChange}
                  required
                  placeholder="Nome do responsável técnico"
                />
              </div>
            </FormSection>

            {/* Item Inspecionado */}
            <FormSection title="2. Item Inspecionado">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Item"
                  name="item"
                  value={formData.item}
                  onChange={handleFieldChange}
                  required
                  placeholder="Item a ser inspecionado"
                />
                <FormField
                  label="Subitem"
                  name="subitem"
                  value={formData.subitem}
                  onChange={handleFieldChange}
                  placeholder="Subitem específico"
                />
                <FormField
                  label="Elemento"
                  name="elemento"
                  value={formData.elemento}
                  onChange={handleFieldChange}
                  placeholder="Elemento construtivo"
                />
                <FormField
                  label="Localização"
                  name="localizacao"
                  value={formData.localizacao}
                  onChange={handleFieldChange}
                  placeholder="Localização específica do elemento"
                />
              </div>
            </FormSection>

            {/* Especificações */}
            <FormSection title="3. Especificações">
              <div className="space-y-4">
                <FormField
                  label="Especificação"
                  name="especificacao"
                  type="textarea"
                  value={formData.especificacao}
                  onChange={handleFieldChange}
                  placeholder="Descrição detalhada da especificação"
                  rows={3}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Norma de Referência"
                    name="normaReferencia"
                    value={formData.normaReferencia}
                    onChange={handleFieldChange}
                    placeholder="Ex: NBR 6118, ABNT NBR 14931"
                  />
                  <FormField
                    label="Tolerância"
                    name="tolerancia"
                    value={formData.tolerancia}
                    onChange={handleFieldChange}
                    placeholder="Tolerância permitida"
                  />
                </div>
              </div>
            </FormSection>

            {/* Inspeção */}
            <FormSection title="4. Inspeção">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Tipo de Inspeção"
                  name="tipoInspecao"
                  type="select"
                  value={formData.tipoInspecao}
                  onChange={handleFieldChange}
                  options={['Visual', 'Dimensional', 'Ensaio', 'Outro']}
                  required
                />
                <FormField
                  label="Instrumento Utilizado"
                  name="instrumentoUtilizado"
                  value={formData.instrumentoUtilizado}
                  onChange={handleFieldChange}
                  placeholder="Equipamento ou ferramenta utilizada"
                />
              </div>
              <FormField
                label="Critério de Aceitação"
                name="criterioAceitacao"
                type="textarea"
                value={formData.criterioAceitacao}
                onChange={handleFieldChange}
                placeholder="Critérios para aprovação do item inspecionado"
                rows={3}
              />
            </FormSection>

            {/* Resultados */}
            <FormSection title="5. Resultados">
              <div className="space-y-4">
                <FormField
                  label="Resultado Obtido"
                  name="resultadoObtido"
                  type="textarea"
                  value={formData.resultadoObtido}
                  onChange={handleFieldChange}
                  placeholder="Descrição detalhada dos resultados obtidos"
                  rows={3}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Conformidade"
                    name="conformidade"
                    type="select"
                    value={formData.conformidade}
                    onChange={handleFieldChange}
                    options={['Conforme', 'Não Conforme', 'Condicional']}
                    required
                  />
                </div>
                <FormField
                  label="Observações"
                  name="observacoes"
                  type="textarea"
                  value={formData.observacoes}
                  onChange={handleFieldChange}
                  placeholder="Observações adicionais sobre a inspeção"
                  rows={3}
                />
              </div>
            </FormSection>

            {/* Ações Corretivas */}
            <FormSection title="6. Ações Corretivas">
              <div className="space-y-4">
                <FormField
                  label="Ação Corretiva"
                  name="acaoCorretiva"
                  type="textarea"
                  value={formData.acaoCorretiva}
                  onChange={handleFieldChange}
                  placeholder="Descrição das ações corretivas necessárias"
                  rows={3}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Prazo para Correção"
                    name="prazoCorrecao"
                    type="date"
                    value={formData.prazoCorrecao}
                    onChange={handleFieldChange}
                  />
                  <FormField
                    label="Responsável pela Correção"
                    name="responsavelCorrecao"
                    value={formData.responsavelCorrecao}
                    onChange={handleFieldChange}
                    placeholder="Nome do responsável pela correção"
                  />
                </div>
              </div>
            </FormSection>

            {/* Assinaturas */}
            <FormSection title="7. Assinaturas">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">Inspetor</h3>
                  <FormField
                    label="Nome do Inspetor"
                    name="inspetorNome"
                    value={formData.inspetorNome}
                    onChange={handleFieldChange}
                    required
                    placeholder="Nome completo do inspetor"
                  />
                  <FormField
                    label="Data"
                    name="inspetorData"
                    type="date"
                    value={formData.inspetorData}
                    onChange={handleFieldChange}
                    required
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">Supervisor</h3>
                  <FormField
                    label="Nome do Supervisor"
                    name="supervisorNome"
                    value={formData.supervisorNome}
                    onChange={handleFieldChange}
                    required
                    placeholder="Nome completo do supervisor"
                  />
                  <FormField
                    label="Data"
                    name="supervisorData"
                    type="date"
                    value={formData.supervisorData}
                    onChange={handleFieldChange}
                    required
                  />
                </div>
              </div>
            </FormSection>
          </div>

          {/* Botão de Exportação Final */}
          <div className="flex justify-center pt-8">
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="flex items-center space-x-3 px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
            >
              <Download className="h-5 w-5" />
              <span>{isExporting ? 'Gerando Documento...' : 'Exportar Relatório de Inspeção'}</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;