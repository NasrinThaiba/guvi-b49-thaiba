
const ele = document.getElementById("parent");
setTimeout(()=>{
    ele.innerHTML = "Let's start the Countdown!!!"
setTimeout(()=>{
    ele.innerHTML = 10;
    setTimeout(()=> {
        ele.innerHTML = 9;
        setTimeout(()=>{
            ele.innerHTML = 8;
            setTimeout(()=>{
                ele.innerHTML = 7;
                setTimeout(()=>{
                    ele.innerHTML = 6;
                    setTimeout(()=>{
                        ele.innerHTML = 5;
                        setTimeout(()=>{
                            ele.innerHTML = 4;
                            setTimeout(()=>{
                                ele.innerHTML = 3;
                                setTimeout(()=>{
                                    ele.innerHTML = 2;
                                    setTimeout(()=>{
                                        ele.innerHTML = 1;
                                        setInterval(()=>{
                                            ele.innerHTML = "Happy Independence Day!!!"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},2000)
},1000)