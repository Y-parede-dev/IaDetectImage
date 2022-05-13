export const IsHuman = (elt, userData, faceapi) =>{
    console.log(elt.target.files[0])
    let img = new Image()
    img.src= URL.createObjectURL(elt.target.files[0])
    faceapi.detectAllFaces(img)
      .then(faceDetected=>{
        if(faceDetected.length>0){ //si tu arive à faire une meilleure vérif ça serait un plus 
          console.log('I am an Human')
          userData.human = true
        }
        else{
            console.warn("I'm NOT AN HUMAN" )
            userData.human = false
        }
        console.log('detect All Faces', faceDetected, ' end', userData )
      })
      img=null
}
