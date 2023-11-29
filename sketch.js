let companyNameInput=document.getElementById("company-name");
let jobbInput=document.getElementById("jobb");
let ortInput=document.getElementById("ort");
let dateinput=document.getElementById("date");



let submitBtn=document.getElementById("submit");

let companyNameArr;



submitBtn.addEventListener('click', submitForm);


function submitForm(){
  let bs=parseInt(document.querySelector('input[name="bs"]:checked').value);


  submitCompanyName();





  let params={
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params, gotTabs)

  function gotTabs(tabs){
    let companyNameCurr=companyNameArr[0]
    console.log(tabs[0])
    let msg={
      radio: bs,
      company: companyNameCurr,
      jobb: jobbInput.value,
      ort: ortInput.value,
      date: dateinput.value
    };

    chrome.tabs.sendMessage(tabs[0].id, msg);
    
    finishCompanyName();

  }

}

function submitCompanyName(){
  companyNameArr=companyNameInput.value.split(',');
  if(companyNameArr[0][0]==' '){
    companyNameArr[0]=companyNameArr[0].slice(1);
    console.log(companyNameArr[0], 'TTTT')
  }
}



function finishCompanyName(){
  companyNameArr.shift();
  companyNameInput.value=companyNameArr.toString();
}