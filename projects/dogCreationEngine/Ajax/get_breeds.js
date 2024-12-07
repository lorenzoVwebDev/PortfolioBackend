function getXMLHttp() {
  var xmlHttp

  try {
    xmlHttp=new XMLHttpRequest();
  } catch(e) {
    try {
      xmlHttp=new ActiveXObject('Msxml2.XMLHTTP')
    } catch (e) {
      try {
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        alert("Old browser? Update it to use Ajax!");
        return false
      }
    }
  }

  return xmlHttp;
}

function AjaxRequest(value) {
  xmlHttp = getXMLHttp();

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4) {
      handleResponse(xmlHttp.responseText);
    }
  }

  xmlHttp.open('GET', value, true);
  xmlHttp.send(null); 
}

function handleResponse(response) {
  document.getElementById('AjaxResponse').innerHTML = response;
}

