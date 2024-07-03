import React from 'react';
import PowerBIReport from './PowerBIReport';

const App = () => {
  // Información de configuración del informe
  const accessToken = 'Tu_Clave_de_Acceso';
  const embedUrl = 'https://app.powerbi.com/reportEmbed';
  const reportId = 'Tu_ID_de_Informe';
  const urlJSON = 'https://saasprueba.operaria.co/api/powerbi/rotations/02/2024';

  return (
    <div>
      <h1>Panel de Power BI </h1>
      <PowerBIReport 
        accessToken={accessToken}
        embedUrl={embedUrl}
        reportId={reportId}
        urlJSON={urlJSON}
      />
    </div>
  );
};

export default App;
