const onClickreccomend = () => {
    // const kataEl = document.getElementById("katasa");
    // const kata = kataEl.value
    // kataEl = "";

    const midashiEl = document.getElementById("midashi");
    const midashi = midashiEl.value
    kataEl = "";

    const fontEl = document.getElementById("font");
    const font = fontEl.value
    kataEl = "";

    const hutosaEl = document.getElementById("hutosa");
    const hutosa = hutosaEl.value
    kataEl = "";

    text =   midashi + font + hutosa

    console.log(text)

    if(text == 1310){
        texts= document.getElementById('midashi_mintyou');
        textsEL = texts
        console.log(textsEL)
    }else if(text ==1410){
       texts= document.getElementById('midashi_gothic')
        //  const textsEL = texts.getElementsByClassName("cute");
        textsEL = texts
         console.log(textsEL)
    }else if(text ==1510){
        texts= document.getElementById('midasi_marugothic');
        textsEL = texts
    }else if(text == 1610){
        texts= document.getElementById('midashi_hude');
        textsEL = texts
    }else if(text == 1710){
        texts= document.getElementById('midashi_design');
       textsEL = texts
    }else if(text == 1810){
        texts= document.getElementById('midasi_hand');
       textsEL = texts
    }else if(text == 1910){
        texts= document.getElementById('midashi_sonota');
        textsEL = texts
    // } else if(text == 1312){
    //     texts= document.getElementById('honbun_mintyou');
    //    textsEL = texts
    }else if(text ==1412){
        texts= document.getElementById('midashi_gothic')
    //    const textsEL = texts.getElementsByClassName("formal");
        textsEL = texts
        console.log(textsEL)
    // }else if(text ==1512){
    //     texts= document.getElementById('honbun_marugothic');
    //    textsEL = texts
    // }else if(text == 1612){
    //     texts= document.getElementById('honbun_fude');
    //    textsEL = texts
    // }else if(text == 1712){
    //     texts= document.getElementById('honbun_design');
    //    textsEL = texts
    // }else if(text == 1812){
    //     texts= document.getElementById('honbun_hand"');
    //    textsEL = texts
    // }else if(text == 1912){
    //     texts= document.getElementById('honbun_other');
    //    textsEL = texts
    // }else if(text == 1+3+13){

    // }else if(text ==1+4+13){

    // }else if(text ==1+5+13){

    // }else if(text == 1+6+13){

    // }else if(text == 1+7+13){
        
    // }else if(text == 1+8+13){
        
    // }else if(text == 1+9+13){
        
    }else if(text == 2310){
        texts= document.getElementById('honbun_mintyou');
       textsEL = texts
    }else if(text == 2410){
        texts= document.getElementById('honbun_gothic');
       textsEL = texts
    }else if(text == 2510){
        texts= document.getElementById('honbun_marugothic');
       textsEL = texts
    }else if(text == 2610){
        texts= document.getElementById('honbun_fude');
       textsEL = texts
    }else if(text == 2710){
        texts= document.getElementById('honbun_design');
       textsEL = texts
    }else if(text == 2810){
        texts= document.getElementById('honbun_hand');
       textsEL = texts
    }else if(text == 2910){
        texts= document.getElementById('honbun_other');
       textsEL = texts
    // }else if(text == 2+3+12){
    //     texts= document.getElementById('midashi_mintyou');
    //    textsEL = texts
    // }else if(text == 2+4+12){
    //     texts= document.getElementById('midashi_mintyou');
    //    textsEL = texts
    // }else if(text == 2+5+12){
    //     texts= document.getElementById('midashi_mintyou');
    //    textsEL = texts
    // }else if(text == 2+6+12){
    //     texts= document.getElementById('midashi_mintyou');
    //    textsEL = texts
    // }else if(text == 2+7+12){
    //     texts= document.getElementById('midashi_mintyou');
    //    textsEL = texts
    // }else if(text == 2+8+12){
    //     texts= document.getElementById('midashi_mintyou');
    //    textsEL = texts
    // }else if(text == 2+9+12){
    //     texts= document.getElementById('midashi_mintyou');
    //     textsEL = texts
    // }else if(text == 2+3+13){
        
    // }else if(text == 2+4+13){
        
    // }else if(text == 2+5+13){
        
    // }else if(text == 2+6+13){
        
    // }else if(text == 2+7+13){
        
    // }else if(text == 2+8+13){
        
    // }else if(text == 2+9+13){

    }
    if (textsEL) {
        textsEL.style.display = 'block';

        // `results` に textsEL の HTML 内容を表示
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = textsEL.outerHTML;
    }
}

document.getElementById("recommendButton").addEventListener("click",() => onClickreccomend());

// const searchInput = document.getElementById('search-input');

// searchInput.addEventListener('input', () => {
//   const keyword = searchInput.value.trim().toLowerCase();
//   console.log(keyword);
// });
// const searchTargets = document.querySelectorAll('.search-target');
// const searchResults = document.getElementById('search-results');

// function showSearchResult(target) {
//   target.style.display = 'block';
// }

// function hideSearchResult(target) {
//   target.style.display = 'none';
// }
// function filterSearchResults() {
//     searchTargets.forEach((target) => {
//       const text = target.textContent.toLowerCase();
//       if (text.includes(keyword)) {
//         showSearchResult(target);
//       } else {
//         hideSearchResult(target);
//       }
//     });
//   }
  
//   searchInput.addEventListener('input', filterSearchResults);
//   function showNoResultsMessage() {
//     searchResults.innerHTML = '<p>検索結果がありません。</p>';
//   }
  
//   function clearSearchResults() {
//     searchResults.innerHTML = '';
//   }
//   function updateSearchResults() {
//     const visibleTargets = Array.from(searchTargets).filter((target) => target.style.display === 'block');
//     if (visibleTargets.length === 0) {
//       showNoResultsMessage();
//     } else {
//       clearSearchResults();
//     }
//   }
  
//   searchInput.addEventListener('input', updateSearchResults);