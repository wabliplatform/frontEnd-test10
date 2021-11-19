let apiMockupApi = new TempApi.MockupApi();import TempApi from '../src/index';document.getElementById('ich7q').onclick = () => {apiMockupApi.getAllmockup((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const complexElement = document.getElementById("ich7q");const childs = complexElement.children;
      data.forEach((item,i) => {
      if(childs.length > i)
        {
          childs[i].textContent = data[i].firstname ;
        }
      });
      [...childs].forEach((element,index) => {if(index > data.length) complexElement.removeChild(element)})}});};document.getElementById('its2').onclick = () => {{ location.href= '/createform';}};