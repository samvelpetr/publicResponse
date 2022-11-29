const inputCity = document.querySelector('.application__addres');
const arrOfCitys = [...document.querySelectorAll('.citys__filter__element')]
const inputName = document.querySelector('.application__name');
const input = document.querySelector('.application__phone')
const arrOfSpan = [...document.querySelectorAll('.application__form__inputs__span')];
const numsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
input.addEventListener('focus', _ => {
  if (!/^\+\d*$/.test(input.value))
    input.value = '+';
});

input.addEventListener('keypress', e => {

  if (!/\d/.test(e.key))
    e.preventDefault();
});
input.addEventListener('keydown', (e) => {
  if (input.value.length > 0) {
    arrOfSpan[2].style.display = 'none';
    input.style.paddingTop = '3px'

  }
  else {
    arrOfSpan[2].style.display = 'block';
    input.style.paddingTop = '20px'

  }

})

const key_addresAll =[...document.querySelectorAll('.key_addres')].slice(1)
const arrOfSpan1 = arrOfSpan.slice(0,5);
console.log(key_addresAll);
console.log(arrOfSpan1);
key_addresAll.forEach((e,i)=>{
  e.addEventListener('input',()=>{
    if (e.value.length > 0) {
      arrOfSpan1[i].style.display = 'none';
      e.style.paddingTop = '3px'
  
    }
    else {
      arrOfSpan[i].style.display = 'block';
      e.style.paddingTop = '20px'
  
    }
  })
})







const popup__overlay2_1 = document.querySelector('.popup__overlay2_1')
const closeX1 = document.querySelector('.closeX1');
closeX1.addEventListener('click', function () {
  popup__overlay2_1.style.display = 'none'
  document.body.style.overflow = 'visible'

})
const file = document.querySelector('.file-file')
const filesLengthDiv = document.querySelector('.filesLengthDiv')
const fileText = document.querySelector('.text-wrp');
const filePar = document.querySelector('.castom-file');
const fileItem = document.querySelector('.filesPar__item')
const filesShowPar = document.querySelector('.filesPar');
function CreateFileDiv(elem, o) {
  let x = document.createElement('div');
  filesShowPar.appendChild(x);
  x.classList.add('filesPar__item')
  let img = document.createElement('img');
  img.src = './assets/image/whywe/x3.png'
  x.appendChild(img);
  x.textContent = `${elem.name}`
  x.addEventListener('click', () => {
    x.remove();
    delete file.files[o]

    setTimeout(() => {
      filesLengthDiv.textContent = `Загружен ${[...document.querySelectorAll('.filesPar__item')].length} файл`
      if ([...document.querySelectorAll('.filesPar__item')].length == 0) {
        filesShowPar.classList.remove('Dflex')
  
        filePar.classList.remove('disNone')
      }
    }, 0);
  })

}
function DeleteFileDiv(elem) {
  elem.remove()
}
file.addEventListener('change', () => {
  if (file.files.length > 0) {
    for (let i = 0; i < file.files.length; i++) {
      CreateFileDiv(file.files[i], i)
    }

    filesLengthDiv.textContent = `Загружен ${file.files.length} файл`;
    filePar.classList.add('disNone');
    // filePar.classList.add('pointEvent');
    filesShowPar.classList.add('Dflex')
  } else {
    filesShowPar.classList.remove('Dflex')
    // filePar.classList.remove('pointEvent')

    filePar.classList.remove('disNone')
    filesLengthDiv.textContent = ``;
    let arrofDels = [...document.querySelectorAll('.filesPar__item')];
    arrofDels.forEach(e => {
      DeleteFileDiv(e)
    })
  }

})


inputName.addEventListener('input', () => {
  if (inputName.value.length > 0) {
    arrOfSpan[1].style.display = 'none';
    inputName.style.paddingTop = '3px'

  }
  else {
    arrOfSpan[1].style.display = 'block';
    inputName.style.paddingTop = '20px'

  }
})
arrOfCitys.forEach((el, index) => {
  el.addEventListener('click', () => {
    inputCity.value = el.textContent
    arrOfCitys.forEach(elem => {
      elem.classList.remove('Dblock')
    })
  })
})
inputCity.addEventListener('input', () => {
  if (inputCity.value.length > 0) {
    arrOfSpan[0].style.display = 'none';
    inputCity.style.paddingTop = '3px'
  }
  else {
    arrOfSpan[0].style.display = 'block';
    inputCity.style.paddingTop = '20px'
  }
  arrOfCitys.forEach(elem => {
    elem.classList.remove('Dblock')
  })
  arrOfCitys.forEach((el, index) => {
    if (inputCity.value == '') {
      arrOfCitys.forEach(elem => {

        elem.classList.remove('Dblock')
      })
    } else if (inputCity.value == el.textContent.substring(0, inputCity.value.length)) {
      el.classList.add('Dblock')
    }
  })
})
const butArr = [...document.querySelectorAll('.plusOrMinusPar button')]

const valueKeys = document.querySelector('.valueKeys');
butArr[0].addEventListener('click', (e) => {
  e.preventDefault();
  if (valueKeys.value > 1) {
    valueKeys.value = valueKeys.value - 1;
  }
})
butArr[1].addEventListener('click', (e) => {
  e.preventDefault();
  valueKeys.value = +valueKeys.value + 1;

})


var popup = document.querySelector(".popup__overlay");
var popupP = document.querySelector(".popup1");
var btn = document.querySelector(".box-btn");

var btn__bt = document.querySelector(".box-btn-bt1");
var close = document.querySelector(".closer");
var closeX = document.querySelector(".closerX");
btn__bt.addEventListener("click", function (event) {
  event.preventDefault();
  popupP.classList.remove("hidden");

});

btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("hidden");
});
popupP.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popupP.classList.add("hidden");
  }
});
popup.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
  }
});
closeX.addEventListener("click", function (event) {
  event.preventDefault();
  popupP.classList.add("hidden");
});
close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("hidden");
});
/*======================1===========================*/
var popup1 = document.querySelector(".popup__overlay1");
var btn1 = document.querySelector(".box-btn1");
var close1 = document.querySelector(".closer1");



btn1.addEventListener("click", function (event) {
  event.preventDefault();
  popup1.classList.remove("hidden1");
  popup__overlay2_1.style.display = 'block'
  document.body.style.overflow = 'hidden'
});

popup1.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup1.classList.add("hidden1");
  }
});

close1.addEventListener("click", function (event) {
  event.preventDefault();
  popup1.classList.add("hidden1");
  document.body.style.overflow = 'visible'

});
/*======================2===========================*/
var popup2 = document.querySelector(".popup__overlay2");
var btn2 = document.querySelector(".box-btn2");
var close2 = document.querySelector(".closer2");
const closer21 =document.querySelector('.closeX4')


btn2.addEventListener("click", function (event) {
  event.preventDefault();
  popup2.classList.remove("hidden2");
  document.body.classList.add('overflowHid')
});

popup2.addEventListener("click", function (event) {
  e = event || window.event
  if (e.target == this) {
    popup2.classList.add("hidden2");
  }
});
closer21.addEventListener("click", function (event) {
  // event.preventDefault();
  document.body.classList.remove('overflowHid')
  popup2.classList.add("hidden2");

});
close2.addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.remove('overflowHid')

  popup2.classList.add("hidden2");
});
		/*======================katalog===========================*/
