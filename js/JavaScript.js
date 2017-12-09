var sampleData=[10000,8000,6000,7000];

function drawBarChart(dataset,idOfContainer) {

    var chartContainer=_div(idOfContainer);

    if(typeof (dataset)!="object"){return;}

    var widthOfContainer=chartContainer.scrollWidth;

    var heightOfContainer=chartContainer.scrollHeight;

    var widthOfBar=parseInt(widthOfContainer/dataset.length)-2;

    for(var i=0;i<dataset.length;i++){
        var divElement=document.createElement("div");

        divElement.setAttribute("class","div2");

        divElement.style.marginLeft=parseInt(i*2+i*widthOfBar)+"px";
        divElement.style.height=parseInt(dataset[i])+"px";
        divElement.style.width=parseInt(widthOfBar)+"px";
        divElement.style.top=(heightOfContainer-parseInt(dataset[i])-1)+"px";
        chartContainer.appendChild(divElement);
    }
    return false;
    
}

function _div(id) {
    return document.getElementById(id);
    
}

drawBarChart(sampleData,"div1");