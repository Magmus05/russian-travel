import { dataLang } from "./dataLanguage.js";
const page = document.body.childNodes;
const popupImage = page[3];
const fotoGrid = page[1].children[1].children[2];
const russianLang = page[1].children[0].children[1].children[0];
const englishLang = page[1].children[0].children[1].children[1];
const deutscheLang = page[1].children[0].children[1].children[2];
const animItems = document.querySelectorAll('._anim-items')



if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(){
    animItems.forEach((animItem)=>{
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;

      const animStart = 5;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if(document.documentElement.scrollTop > (animItemOffset - animItemPoint) && document.documentElement.scrollTop < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active-amimation')
      }else {
        if(!animItem.classList.contains('_anim-no-hide')) animItem.classList.remove('_active-amimation')
      }
    })

  }

  function offset(element){
    const rect = element.getBoundingClientRect();
    return {top: rect.top + document.documentElement.scrollTop, left: rect.left + document.documentElement.scrollLeft }
  }
  setTimeout(()=>{animOnScroll()}, 200)

}


//---------блок LEAD--------------\\
//const leadTitle = page[1].children[1].children[0].children[0];
//const leadSubtitle = page[1].children[1].children[0].children[1];
//const leadCaption = page[1].children[1].children[0].children[3];

//---------блок INTRO--------------\\
//const introTitle = page[1].children[1].children[1].children[0];
//const introText = page[1].children[1].children[1].children[1];
//const introList = page[1].children[1].children[1].children[2].children

//---------блок PLACE--------------\\
//const onePlaceTitleKushir = page[1].children[1].children[3].children[0].children[0];
//const onePlaceParagraphsKushir = page[1].children[1].children[3].children[0].children[3];
//const twoPlaceTitleKolski = page[1].children[1].children[3].children[1].children[0];
//const twoPlaceParagraphsKolski = page[1].children[1].children[3].children[1].children[3];
//const threePlaceTitleAltay = page[1].children[1].children[3].children[2].children[0];
//const threePlaceParagraphsAltay = page[1].children[1].children[3].children[2].children[3];
//const fourPlaceTitleBaykal = page[1].children[1].children[3].children[3].children[0];
//const fourPlaceParagraphsBaykal = page[1].children[1].children[3].children[3].children[3];
//const fivePlaceTitleKareliya = page[1].children[1].children[3].children[4].children[0];
//const fivePlaceParagraphsKareliya = page[1].children[1].children[3].children[4].children[3];

//---------блок COVER--------------\\
//const coverTitle = page[1].children[1].children[4].children[0].children[0];
//const coverSubtitle = page[1].children[1].children[4].children[0].children[1];

//---------блок Footer--------------\\
// const footerLinkMap = page[1].children[2].children[0].children[0]
// const footerLinkWeather = page[1].children[2].children[0].children[1]
// const footerLinkTimetable = page[1].children[2].children[0].children[2]
// const footerLinkCalendar = page[1].children[2].children[0].children[3]
// const footerLinkTravellings = page[1].children[2].children[0].children[4]
// const footerCopyright = page[1].children[2].children[1]

function changeLanguage(selectedLang) {
  //---------блок LEAD--------------\\
  page[1].children[1].children[0].children[0].textContent = selectedLang.leadTitle;
  page[1].children[1].children[0].children[1].textContent = selectedLang.leadSubtitle;
  page[1].children[1].children[0].children[3].textContent = selectedLang.leadCaption;
  //---------блок INTRO--------------\\
  page[1].children[1].children[1].children[0].textContent = selectedLang.introTitle;
  page[1].children[1].children[1].children[1].textContent = selectedLang.introText;
  page[1].children[1].children[1].children[2].children[0].childNodes[0].textContent =
    selectedLang.oneIntroList;
  page[1].children[1].children[1].children[2].children[1].childNodes[0].textContent =
    selectedLang.twoIntroList;
  page[1].children[1].children[1].children[2].children[2].childNodes[0].textContent =
    selectedLang.threeIntroList;
  page[1].children[1].children[1].children[2].children[3].childNodes[0].textContent =
    selectedLang.fourIntroList;
  page[1].children[1].children[1].children[2].children[4].childNodes[0].textContent =
    selectedLang.fiveIntroList;
  //---------блок PLACE--------------\\
  page[1].children[1].children[3].children[0].children[0].textContent = "";
  page[1].children[1].children[3].children[0].children[0].insertAdjacentHTML(
    "afterbegin",
    selectedLang.onePlaceTitleKushir
  );
  page[1].children[1].children[3].children[0].children[3].textContent = "";
  page[1].children[1].children[3].children[0].children[3].insertAdjacentHTML(
    "afterbegin",
    selectedLang.onePlaceParagraphsKushir
  );

  page[1].children[1].children[3].children[1].children[0].textContent =
    selectedLang.twoPlaceTitleKolski;
  page[1].children[1].children[3].children[1].children[3].textContent = "";
  page[1].children[1].children[3].children[1].children[3].insertAdjacentHTML(
    "afterbegin",
    selectedLang.twoPlaceParagraphsKolski
  );

  page[1].children[1].children[3].children[2].children[0].textContent =
    selectedLang.threePlaceTitleAltay;
  page[1].children[1].children[3].children[2].children[3].textContent = "";
  page[1].children[1].children[3].children[2].children[3].insertAdjacentHTML(
    "afterbegin",
    selectedLang.threePlaceParagraphsAltay
  );
  page[1].children[1].children[3].children[3].children[0].textContent =
    selectedLang.fourPlaceTitleBaykal;
  page[1].children[1].children[3].children[3].children[3].textContent = "";
  page[1].children[1].children[3].children[3].children[3].insertAdjacentHTML(
    "afterbegin",
    selectedLang.fourPlaceParagraphsBaykal
  );
  page[1].children[1].children[3].children[4].children[0].textContent =
    selectedLang.fivePlaceTitleKareliya;
  page[1].children[1].children[3].children[4].children[3].textContent = "";
  page[1].children[1].children[3].children[4].children[3].insertAdjacentHTML(
    "afterbegin",
    selectedLang.fivePlaceParagraphsKareliya
  );
  //---------блок COVER--------------\\
  page[1].children[1].children[4].children[0].children[0].textContent ='';
  page[1].children[1].children[4].children[0].children[0].insertAdjacentHTML(
    "afterbegin", selectedLang.coverTitle);
  page[1].children[1].children[4].children[0].children[1].textContent =
    selectedLang.coverSubtitle;
  //---------блок Footer--------------\\
  page[1].children[2].children[0].children[0].textContent = selectedLang.footerLinkMap;

  page[1].children[2].children[0].children[1].textContent =
    selectedLang.footerLinkWeather;
  page[1].children[2].children[0].children[2].textContent =
    selectedLang.footerLinkTimetable;
  page[1].children[2].children[0].children[3].textContent =
    selectedLang.footerLinkCalendar;
  page[1].children[2].children[0].children[4].textContent =
    selectedLang.footerLinkTravellings;
  page[1].children[2].children[1].textContent = "";
  page[1].children[2].children[1].insertAdjacentHTML(
    "afterbegin",
    selectedLang.footerCopyright
  );
}

russianLang.addEventListener("click", (e) => {
  if (russianLang.classList.contains("header__lang-link_enabled")) {
    return;
  } else {
    russianLang.classList.add("header__lang-link_enabled");
    englishLang.classList.remove("header__lang-link_enabled");
    deutscheLang.classList.remove("header__lang-link_enabled");
    changeLanguage(dataLang.ruLang);
  }
});

englishLang.addEventListener("click", (e) => {
  if (englishLang.classList.contains("header__lang-link_enabled")) {
    return;
  } else {
    englishLang.classList.add("header__lang-link_enabled");
    russianLang.classList.remove("header__lang-link_enabled");
    deutscheLang.classList.remove("header__lang-link_enabled");
    changeLanguage(dataLang.engLang);
  }
});
deutscheLang.addEventListener("click", (e) => {
  if (deutscheLang.classList.contains("header__lang-link_enabled")) {
    return;
  } else {
    deutscheLang.classList.add("header__lang-link_enabled");
    russianLang.classList.remove("header__lang-link_enabled");
    englishLang.classList.remove("header__lang-link_enabled");
    changeLanguage(dataLang.deLang);
  }
});


fotoGrid.addEventListener('click', (e)=>{
	openPopup(popupImage)
	popupImage.children[0].children[1].setAttribute('src', e.target.attributes[0].nodeValue);
	popupImage.children[0].children[1].setAttribute('alt', `Фотография: ${e.target.alt}.`);
	popupImage.children[0].children[2].textContent = e.target.alt;
})

function openPopup(popup){
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closeByEscape); 
}
function closePopup(popup){
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeByEscape); 
}
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

popupImage.addEventListener('mousedown', (evt)=>{
	if(evt.target.classList.contains('popup_opened')){
		closePopup(popupImage)
	}
	if (evt.target.classList.contains('popup-close-button')) {
		closePopup(popupImage)
	}
})