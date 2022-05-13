import { useEffect, useState } from "react"
import * as faceapi from 'face-api.js'

/**
 * LoadModels = Function
 * Chargements des models de test pour savoir si une personne est detecter sur la photo
 * Utilisation de l'algo ssdMobilenetv1 car le plus petit algo (tinyFaceDetector) ne detecte pas certains visages
 */
export const LoadModels = ()=> {
    const [modelIsLoad, setModelIsLoad] = useState(false)
    useEffect(()=>{
      const loadModel = async () => {
        const MODEL_URL = process.env.PUBLIC_URL + "/models"
        console.log(MODEL_URL)
        Promise.all([
          faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
        ]).then(setModelIsLoad(true))
      }
      loadModel()
    },[])
}