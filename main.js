function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iqj2QikyR/model.json',modelReady);
    
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_num_r= Math.floor(Math.random()*255)+1;
        random_num_g= Math.floor(Math.random()*255)+1;
        random_num_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML= 'I can hear- '+results[0].label;
        document.getElementById("result_confidence").innerHTML= 'Accuracy- '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_num_r+","+random_num_g+","+random_num_b+")";    
        document.getElementById("result_confidence").style.color="rgb("+random_num_r+","+random_num_g+","+random_num_b+")";
    
        img1=document.getElementById('cow.png');
        img2=document.getElementById('leon1.jpg');
        img3=document.getElementById('cat1.jfif');
        img4=document.getElementById('dog1.jfif');
        if (results[0].label=="barking"){
            img1.src='fatdog-dog.gif';
            

        }else if(results[0].label=="meow"){
            img1.src='cat.gif';

        }else if(results[0].label=="roar"){
            img1.src='lion.gif';
                  }
        else{
            img1.src='cow.gif';
          
        }







    }

    
}