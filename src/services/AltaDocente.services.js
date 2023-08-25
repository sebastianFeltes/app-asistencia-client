export  async function tryAltaDocente(
  data
  /*  tipo,
  dni,
  nombre,
  apellido,
  contraseña,
  direccion,
  telefono,
  localidad,
  email,
  telExt,
  rol  */
  )
  {
    /* const data = {
      tipo:tipo,
      dni:dni,
      nombre:nombre,
      apellido:apellido,
      contraseña:contraseña,
      direccion:direccion,
      localidad:localidad,
      telefono:telefono,
      email:email,
      telExt:telExt,
      rol:rol,
    };  */
    /* console.log(data)   */
    
    if(!data.tipo){alert("seleccione un campo dni")} 
    if(data.dni.length < 6){alert("Dni incompleto")} 
    if(data.nombre.length < 4){alert("nombre invalido")} 
     if(data.apellido.length < 4){alert("apellido invalido")} 
    if(data.contraseña.length < 8){alert("contraseña minimo 8 caracteres")}  
    if(data.direccion.length < 1){alert(" complete el campo")}
    if(data.localidad.length < 1){alert("complete el campo")} 
    if(data.telefono.length < 10){alert(" telefono incompleto")}  
    if(data.telExt.length < 10){alert("telEtx incompleto")}  
    if(data.email){alert("complete el campo email")}
    if(data.rol){alert("seleccione un campo rol")}  



  }
  