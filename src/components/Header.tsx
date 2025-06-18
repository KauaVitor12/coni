import React from 'react';
import { Building2, FileText } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">CONIN Construção e Montagem</h1>
              <p className="text-blue-200 text-sm">Sistema RIPP - Relatório de Inspeção</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6" />
            <span className="text-sm font-medium">Processo / Plano de Inspeção</span>
          </div>
        </div>
      </div>
    </header>
  );
};