import { useState, useEffect } from 'react';
import * as powerbi from 'powerbi-client';

const PowerBIReport = ({ accessToken, embedUrl, reportId, urlJSON }) => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    try {
        
        // Configuración para la incrustación del informe
        const embedConfig = {
          type: 'report',
          tokenType: powerbi.models.TokenType.Embed,
          accessToken: accessToken,
          embedUrl: `${embedUrl}?json=${urlJSON}`,
          id: reportId,
          permissions: powerbi.models.Permissions.All,
          settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: true
          }
        };
    
        // Incrusta el informe en el contenedor especificado
        const reportContainer = document.getElementById('reportContainer');
        const newReport = powerbi.embed(reportContainer, embedConfig);
    
        // Maneja los eventos de carga y error del informe
        newReport.on('loaded', () => {
          console.log('El informe se ha cargado correctamente.');
        });
    
        newReport.on('error', (event) => {
          console.error('Error al cargar el informe:', event.detail);
        });
    
        // Almacena el objeto de informe en el estado
        setReport(newReport);
    
        // Limpia los recursos al desmontar el componente
        return () => {
          newReport.destroy();
        };
    } catch (error) {
        console.log("error: " + error)
    }
  }, [accessToken, embedUrl, reportId]);

  // Renderiza el contenedor del informe
  return <div id="reportContainer" style={{ height: '600px' }} />;
};

export default PowerBIReport;
