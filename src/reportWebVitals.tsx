import {ReportHandler} from "web-vitals";

function reportWebVitals(onPerfEntry: ReportHandler) {
  import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  });
}

export default reportWebVitals;
