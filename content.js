setTimeout(()=>{

const startBtn=document.querySelector('.digi-ng-button-base.digi-ng-button-base--tertiary.digi-ng-button-base--m')

startBtn.click()

setTimeout(()=>{


//const annonsRadio=document.getElementById('digi-ng-radiobutton-xwi37');
//const spontanRadio=document.getElementById('digi-ng-radiobutton-viz5i');


const radioBtns=document.getElementsByClassName('digi-ng-form-radiobutton__input')

const companyInputBar=document.getElementById('soktjobb-arbetsgivare');
const jobbInputBar=document.getElementById('soktjobb-soktTjanst');
const ortInputBar=document.getElementById('soktjobb-ort');
const dateInputBar=document.getElementById('soktjobb-aktivitetsdatum');

const submitFormBtn=document.querySelector('.digi-ng-button-base.digi-ng-button-base--primary.digi-ng-button-base--m[type="submit"]')

ortInputBar.focus();



console.log('Hej Ali');


chrome.runtime.onMessage.addListener(gotSubmission);

function gotSubmission(message, sender, sendResponse){
  radioBtns[message.radio].click();
  radioBtns[message.radio].checked=true
  companyInputBar.value=message.company;
  jobbInputBar.value=message.jobb;
  ortInputBar.value=message.ort;
  dateInputBar.value=message.date;

  aliAlMusawi(companyInputBar);
  aliAlMusawi(jobbInputBar);
  aliAlMusawi(ortInputBar);
  aliAlMusawi(dateInputBar);

  setTimeout(()=>{
    submitFormBtn.click();
  }, 100)
}





}, 2500
)






}, 2500
)



function aliAlMusawi(element){
  console.log('bobo')
  element.dispatchEvent(new KeyboardEvent("keydown", {
    key: "e",
    keyCode: 69,        // example values.
    code: "KeyE",       // put everything you need in this object.
    which: 69,
    shiftKey: false,    // you don't need to include values
    ctrlKey: false,     // if you aren't going to use them.
    metaKey: false      // these are here for example's sake.
  }));
  element.dispatchEvent(new KeyboardEvent("keyup", {
    key: "e",
    keyCode: 69,        // example values.
    code: "KeyE",       // put everything you need in this object.
    which: 69,
    shiftKey: false,    // you don't need to include values
    ctrlKey: false,     // if you aren't going to use them.
    metaKey: false      // these are here for example's sake.
  }));
  /*
  setTimeout(()=>{
    element.dispatchEvent(new KeyboardEvent("keydown", {
      key: "Backspace",
      keyCode: 8,        // example values.
      code: "KeyE",       // put everything you need in this object.
      which: 69,
      shiftKey: false,    // you don't need to include values
      ctrlKey: false,     // if you aren't going to use them.
      metaKey: false      // these are here for example's sake.
    }));
  }, 10)
  */
}