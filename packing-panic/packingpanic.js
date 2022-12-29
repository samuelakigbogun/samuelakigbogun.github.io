          //ham burger menue
           alreadyopen=false;
          idnavopener.onclick=()=>{
              navmenue.style.display="flex";
              alreadyopen=true;
          }
          navcloser.onclick=()=>{
              navmenue.style.display="";
              alreadyopen=false;
          }
          window.onresize=()=>{
              if(window.innerWidth>900&& alreadyopen==true){
                  navmenue.style.display="";
              }
              else if(window.innerWidth<=900&&alreadyopen==true){
                idnavopener.click();
              }
          }
          //mobile 
          clickguy=(productskind)=>{
              productskind.onclick=()=>{
                  if (productskind.parentElement.outerHTML.includes("open")) {
                      productskind.firstElementChild.style.display="none";
                      productskind.lastElementChild.style.display="initial"
                  } 
                  else {
                      productskind.firstElementChild.style.display="initial";
                      productskind.lastElementChild.style.display="none";
                       }
              }
          }
          clickguy(products);
          clickguy(ourpartners);
          //desktop zoom on hover

          mouseoveroutdesktopguy=(prokind,darkpartkind)=>{
              prokind.onmouseover=()=>{darkpartkind.style.display="initial"}
              prokind.onmouseout=()=>{darkpartkind.style.display=""}
          }
          mouseoveroutdesktopguy(partnerhoverborder,darkpartner)
          mouseoveroutdesktopguy(producthoverborder,darkproduct)
          console.clear();