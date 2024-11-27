function cifrarCesar(texto, desplazamiento) {
    let resultado = '';
    
    // Recorremos cada caracter del texto
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];
      
      // Verificamos si es una letra mayúscula
      if (char >= 'A' && char <= 'Z') {
        resultado += String.fromCharCode(((char.charCodeAt(0) - 65 + desplazamiento) % 26) + 65);
      }
      // Verificamos si es una letra minúscula
      else if (char >= 'a' && char <= 'z') {
        resultado += String.fromCharCode(((char.charCodeAt(0) - 97 + desplazamiento) % 26) + 97);
      } else {
        // Si no es letra, lo dejamos igual
        resultado += char;
      }
    }
  
    return resultado;
  }
  
  function descifrarCesar(texto, desplazamiento) {
    return cifrarCesar(texto, -desplazamiento); // Descifrar es simplemente desplazar en dirección contraria
  }
  
  // Ejemplo de uso
  let textoOriginal = "Hola Mundo!";
  let textoCifrado = cifrarCesar(textoOriginal, 3);
  let textoDescifrado = descifrarCesar(textoCifrado, 3);
  
  console.log("Texto original: " + textoOriginal);
  console.log("Texto cifrado: " + textoCifrado);
  console.log("Texto descifrado: " + textoDescifrado);
  