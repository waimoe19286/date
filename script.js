const wiamoe =new Date(2022,11,19,4,30,00);
const divTags =document.querySelector(".divone")
const nyan = wiamoe.getTime();

    const waiDate =new Date();
      waiDate.setMinutes(waiDate.getMinutes()+5);
      const min = waiDate.getTime();
      
    if(min < nyan){
       const buttonTags = document.createElement("button");
        buttonTags.classList.add("btn","btn-primary")
        buttonTags.append("waimoe")
        divTags.append(buttonTags);
    }else{
        const buttonTags = document.createElement("button");
        buttonTags.classList.add("btn","btn-danger")
        buttonTags.append("khinphonelwin")
        divTags.append(buttonTags);
    }



