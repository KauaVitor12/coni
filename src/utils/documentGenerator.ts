import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, HeadingLevel, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';
import { InspectionData } from '../types/inspection';

export const generateInspectionDocument = async (data: InspectionData) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Cabeçalho
          new Paragraph({
            children: [
              new TextRun({
                text: "CONIN CONSTRUÇÃO E MONTAGEM",
                bold: true,
                size: 32,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),
          
          new Paragraph({
            children: [
              new TextRun({
                text: "RELATÓRIO DE INSPEÇÃO NO PROCESSO / PLANO DE INSPEÇÃO",
                bold: true,
                size: 24,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
          }),

          // Informações Gerais
          new Paragraph({
            children: [
              new TextRun({
                text: "1. INFORMAÇÕES GERAIS",
                bold: true,
                size: 24,
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1 },
              bottom: { style: BorderStyle.SINGLE, size: 1 },
              left: { style: BorderStyle.SINGLE, size: 1 },
              right: { style: BorderStyle.SINGLE, size: 1 },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
              insideVertical: { style: BorderStyle.SINGLE, size: 1 },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Obra:", bold: true })] })],
                    width: { size: 25, type: WidthType.PERCENTAGE },
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.obra })] })],
                    width: { size: 75, type: WidthType.PERCENTAGE },
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Local:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.local })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Data:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.data })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Responsável Técnico:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.responsavelTecnico })] })],
                  }),
                ],
              }),
            ],
          }),

          // Item Inspecionado
          new Paragraph({
            children: [
              new TextRun({
                text: "2. ITEM INSPECIONADO",
                bold: true,
                size: 24,
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1 },
              bottom: { style: BorderStyle.SINGLE, size: 1 },
              left: { style: BorderStyle.SINGLE, size: 1 },
              right: { style: BorderStyle.SINGLE, size: 1 },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
              insideVertical: { style: BorderStyle.SINGLE, size: 1 },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Item:", bold: true })] })],
                    width: { size: 25, type: WidthType.PERCENTAGE },
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.item })] })],
                    width: { size: 75, type: WidthType.PERCENTAGE },
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Subitem:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.subitem })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Elemento:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.elemento })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Localização:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.localizacao })] })],
                  }),
                ],
              }),
            ],
          }),

          // Especificações
          new Paragraph({
            children: [
              new TextRun({
                text: "3. ESPECIFICAÇÕES",
                bold: true,
                size: 24,
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1 },
              bottom: { style: BorderStyle.SINGLE, size: 1 },
              left: { style: BorderStyle.SINGLE, size: 1 },
              right: { style: BorderStyle.SINGLE, size: 1 },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
              insideVertical: { style: BorderStyle.SINGLE, size: 1 },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Especificação:", bold: true })] })],
                    width: { size: 25, type: WidthType.PERCENTAGE },
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.especificacao })] })],
                    width: { size: 75, type: WidthType.PERCENTAGE },
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Norma de Referência:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.normaReferencia })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Tolerância:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.tolerancia })] })],
                  }),
                ],
              }),
            ],
          }),

          // Inspeção
          new Paragraph({
            children: [
              new TextRun({
                text: "4. INSPEÇÃO",
                bold: true,
                size: 24,
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1 },
              bottom: { style: BorderStyle.SINGLE, size: 1 },
              left: { style: BorderStyle.SINGLE, size: 1 },
              right: { style: BorderStyle.SINGLE, size: 1 },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
              insideVertical: { style: BorderStyle.SINGLE, size: 1 },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Tipo de Inspeção:", bold: true })] })],
                    width: { size: 25, type: WidthType.PERCENTAGE },
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.tipoInspecao })] })],
                    width: { size: 75, type: WidthType.PERCENTAGE },
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Instrumento Utilizado:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.instrumentoUtilizado })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Critério de Aceitação:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.criterioAceitacao })] })],
                  }),
                ],
              }),
            ],
          }),

          // Resultados
          new Paragraph({
            children: [
              new TextRun({
                text: "5. RESULTADOS",
                bold: true,
                size: 24,
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1 },
              bottom: { style: BorderStyle.SINGLE, size: 1 },
              left: { style: BorderStyle.SINGLE, size: 1 },
              right: { style: BorderStyle.SINGLE, size: 1 },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
              insideVertical: { style: BorderStyle.SINGLE, size: 1 },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Resultado Obtido:", bold: true })] })],
                    width: { size: 25, type: WidthType.PERCENTAGE },
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.resultadoObtido })] })],
                    width: { size: 75, type: WidthType.PERCENTAGE },
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Conformidade:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.conformidade })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Observações:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.observacoes })] })],
                  }),
                ],
              }),
            ],
          }),

          // Ações Corretivas
          new Paragraph({
            children: [
              new TextRun({
                text: "6. AÇÕES CORRETIVAS",
                bold: true,
                size: 24,
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1 },
              bottom: { style: BorderStyle.SINGLE, size: 1 },
              left: { style: BorderStyle.SINGLE, size: 1 },
              right: { style: BorderStyle.SINGLE, size: 1 },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
              insideVertical: { style: BorderStyle.SINGLE, size: 1 },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Ação Corretiva:", bold: true })] })],
                    width: { size: 25, type: WidthType.PERCENTAGE },
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.acaoCorretiva })] })],
                    width: { size: 75, type: WidthType.PERCENTAGE },
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Prazo para Correção:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.prazoCorrecao })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Responsável pela Correção:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.responsavelCorrecao })] })],
                  }),
                ],
              }),
            ],
          }),

          // Assinaturas
          new Paragraph({
            children: [
              new TextRun({
                text: "7. ASSINATURAS",
                bold: true,
                size: 24,
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1 },
              bottom: { style: BorderStyle.SINGLE, size: 1 },
              left: { style: BorderStyle.SINGLE, size: 1 },
              right: { style: BorderStyle.SINGLE, size: 1 },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
              insideVertical: { style: BorderStyle.SINGLE, size: 1 },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Inspetor:", bold: true })] })],
                    width: { size: 25, type: WidthType.PERCENTAGE },
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.inspetorNome })] })],
                    width: { size: 50, type: WidthType.PERCENTAGE },
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: `Data: ${data.inspetorData}` })] })],
                    width: { size: 25, type: WidthType.PERCENTAGE },
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: "Supervisor:", bold: true })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: data.supervisorNome })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: `Data: ${data.supervisorData}` })] })],
                  }),
                ],
              }),
            ],
          }),

          // Rodapé
          new Paragraph({
            children: [
              new TextRun({
                text: "Este documento foi gerado automaticamente pelo Sistema RIPP - CONIN Construção e Montagem",
                italics: true,
                size: 18,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 600 },
          }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const fileName = `RIPP_${data.obra.replace(/\s+/g, '_')}_${data.data}.docx`;
  saveAs(blob, fileName);
};