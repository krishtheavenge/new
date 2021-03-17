function preload(){

}


function setup(){
 canvas=createCanvas(300,300);
     canvas.position(510,350);
     video=createCapture(VIDEO);
     video.hide();
     classifier=ml5.imageClassifier('https:teachablemachine.withgoogle.com/models/7d9VBo_lq/model.json',modelLoaded);
}
        function modelLoaded(){
            console.log("Model loaded")    
        }

function draw(){
    image(video, 0,0,300,300);
    classifier.classify(video,results);
}
        function results(error,res){
            if(error){
                console.log(error);
            }
                else{
                    console.log(res);
                    document.getElementById("Object").innerHTML=res[0].label;
                    document.getElementById("Accuracy").innerHTML=res[0].confidence.toFixed(2);}
        }

                