firebase.initializeApp({
    apiKey: "AIzaSyCSPAq5bOstyiSd2qXxpI4TUVFRkVWgkk8",
    authDomain: "modelosfm-28b4e.firebaseapp.com",
    projectId: "modelosfm-28b4e",
  });

  var db = firebase.firestore();

  function registrar(){
    var Cliente = document.getElementById("cliente").value;
    var Nmodelo = document.getElementById("nmodelo").value;
    var Fecha = document.getElementById("fecha").value;
    var Nota = document.getElementById("nota").value;
   
    if(Cliente == ""){
        alert("Es necesario ingresar el cliente!");
    }else if(Nmodelo == ""){
      alert("Es necesario ingresar el nombre del modelo!");
    }else if(Fecha == ""){
      alert("Es necesario ingresar una fecha!");
    }else
    {
        db.collection("Modelos por cliente")
        .add({
            Cliente: Cliente,
            Fecha: Fecha,
            Nomodelo: Nmodelo,
            Nota: Nota,
            

        })
        .then((docRef) => {
            alert("Registro guardado exitosamente", docRef.id);
      
            document.getElementById("cliente").value = "";
            document.getElementById("fecha").value = "";
            document.getElementById("nmodelo").value = "";
            document.getElementById("nota").value = "";
            
            
          })
          .catch((error) => {
            console.error("Error al guardar el registro: ", error);
          });
        }
    }
  

var tab = document.getElementById("tab");
db.collection("Modelos por cliente").orderBy('Fecha', 'desc')
  .get()
  .then((querySnapshot) => {
    tab.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tab.innerHTML += `
       
      <div  class="table-responsive">
      <table  class="table table-dark table-success table-hover  table-bordered">

      <tr>
      <th scope="col">Cliente</th>
      <th scope="col">Nombre del modelo</th>
      <th scope="col">Fecha de registro</th>
     
     
     
    </tr>

<tr onclick="Editar2('${doc.id}','${
  doc.data().Cliente
}','${doc.data().Nomodelo}')">

<td  scope="row">${doc.data().Cliente}</td>
<td>
  <p>${doc.data().Nomodelo}</p>
</td>
<td>
  <p>${doc.data().Fecha}</p>
</td>
</tr>

        
        </table>
        </div>

           
        `;
    });
  });

//Editar datos
function Editar(id,Nomodelo) {

  
  
  document.getElementById("nmodelo").value = Nomodelo;

}
//Editar datos 2
function Editar2(id,Cliente,Nomodelo) {

  
  document.getElementById("cliente").value = Cliente;
  document.getElementById("nmodelo").value = Nomodelo;

}

function reubicacion(){
  var Cliente = document.getElementById("cliente").value;
  var Nomodelo = document.getElementById("nmodelo").value;
  var PDM = document.getElementById("pdm").value;
  var Almacen = document.getElementById("almacen").value;
  var Ubicacion = document.getElementById("ubicacion").value;
  var Fecha = document.getElementById("fecha").value;
  

  if(Cliente == "" || Nomodelo == "" || PDM == "" || Almacen == "" || Ubicacion == "" || Fecha == "" ){
      alert("Completa todos los campos!");
  }else{
      db.collection("Ubicacion de modelos por cliente")
      .add({
          Cliente: Cliente,
          Nomodelo: Nomodelo,
          PDM: PDM,
          Almacen: Almacen,
          Ubicacion: Ubicacion,
          Fecha: Fecha,
          
          
         
          

      })
      .then((docRef) => {
        
          alert("Registro guardado exitosamente", docRef.id);
          window.location.href = "Ubicacion.html";


        
        
    
         
          
          
        })
        .catch((error) => {
          console.error("Error al guardar el registro: ", error);
        });
      }
  }

  $(document).ready(function () {
    $("#tableSearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#admin table").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });



  function produccion( ){
    
    
    var Nomodelo = document.getElementById("nmodelo").value;
    var Area = document.getElementById("area").value;
    var Entrega = document.getElementById("diponibilidad").value;
    var Fecha = document.getElementById("fecha").value;
    
   
    db.collection("Producción")
      .add({

      
        
          
          Nomodelo: Nomodelo,
          Area: Area,
          Entrega: Entrega,
          Fecha: Fecha,
      }) 
      .then((docRef) => {
        
         
          alert("Registro guardado exitosamente", docRef.id); 
          window.location.href = "Seguimiento.html";
          
        })
        .catch((error) => {
          console.error("Error al guardar el registro: ", error);
        });

   }
     
      

      
    
  
    $(document).ready(function () {
      $("#tableSearch").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#admin2 table").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
    });
  

var tab2 = document.getElementById("tab2");
db.collection("Producción").orderBy('Fecha', 'desc')
  .get()
  .then((querySnapshot) => {
    tab2.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tab2.innerHTML += `
       
      <div  class="table-responsive">
      <table  class="table table-dark table-success table-hover  table-bordered">

      <tr>
      
      <th scope="col">Nombre del modelo</th>
      <th scope="col">Area</th>
      <th scope="col">Entrego</th>
      <th scope="col">Recibio</th>
      <th scope="col">Fecha de registro</th>
     
     
     
    </tr>

<tr onclick="Editar('${doc.id}','${doc.data().Nomodelo}')">

<td  scope="row">${doc.data().Nomodelo}</td>

<td>
  <p>${doc.data().Area}</p>
</td>
<td>
  <p>${doc.data().Entrega}</p>
</td>
<td>
  <p>${doc.data().Recibe}</p>
</td>
<td>
  <p>${doc.data().Fecha}</p>
</td>

</tr>

        
        </table>
        </div>

           
        `;
    });
  });


  
  $(document).ready(function () {
    $("#tableSearch").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#admin3 table").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });


var tab3 = document.getElementById("tab3");
db.collection("Ubicacion de modelos por cliente").orderBy('Fecha', 'desc')
.get()
.then((querySnapshot) => {
  tab3.innerHTML = "";
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    tab3.innerHTML += `
     
    <div  class="table-responsive">
    <table  class="table table-dark table-success table-hover  table-bordered">

    <tr>
    <th scope="col">${doc.data().Cliente}</th>
   
    
    <th scope="col">${doc.data().Almacen}</th>
    <th scope="col">UBICACIÓN DENTRO DEL ALMACEN</th>
    <th scope="col">FECHA DE GUARDADO</th>
    <th scope="col"><button class="btn btn-danger" onclick="Borrar('${
      doc.id
    }');">Eliminar</button></th>
    <th scope="col"><button  class="btn btn-warning" onclick="Editar('${doc.id}','${
      doc.data().Cliente
    }','${doc.data().Nomodelo}','${doc.data().PDM}','${doc.data().Almacen}','${doc.data().Ubicacion}','${doc.data().Fecha}')">Editar</button}</th>
   
   
   
  </tr>

<tr>

<td  scope="row">${doc.data().Nomodelo}</td>


<td>
<p>${doc.data().PDM}</p>
</td>
<td>
<p>${doc.data().Ubicacion}</p>
</td>
<td>
<p>${doc.data().Fecha}</p>
</td>

<td></td>
<td></td>

</tr>

      
      </table>
      </div>

         
      `;
  });
});

function Borrar(id) {
  db.collection("Ubicacion de modelos por cliente")
    .doc(id)
    .delete()
    .then(() => {
      alert("Registro borrado exitosamente!");
      window.location.href = "Ubicacion.html";
    })
    .catch((error) => {
      alert("Error al borrar el registro: ", error);
    });
}

function Editar(id, Cliente, Nmodelo, PDM, Almacen, Ubicacion, Fecha) {
  document.getElementById("cliente").value = Cliente;
  document.getElementById("nmodelo").value = Nmodelo;
  document.getElementById("almacen").value = Almacen;
  document.getElementById("pdm").value = PDM;
  document.getElementById("ubicacion").value = Ubicacion;
  document.getElementById("fecha").value = Fecha;


  var btn = document.getElementById("btn-registrar");
  btn.innerHTML = "Actualizar";

  btn.onclick = function () {
    var Ref = db.collection("Ubicacion de modelos por cliente").doc(id);
    window.location.href="#location";
    var Cliente = document.getElementById("cliente").value;
  var Nomodelo = document.getElementById("nmodelo").value;
  var PDM = document.getElementById("pdm").value;
  var Almacen = document.getElementById("almacen").value;
  var Ubicacion = document.getElementById("ubicacion").value;
  var Fecha = document.getElementById("fecha").value;
    return Ref.update({
      Cliente: Cliente,
          Nomodelo: Nomodelo,
          PDM: PDM,
          Almacen: Almacen,
          Ubicacion: Ubicacion,
          Fecha: Fecha,
    })
      .then(() => {
        alert("Registro actualizado correctamente!");

        btn.innerHTML = "Guardar";
      
        window.location.href = "Ubicacion.html";
      })
      .catch((error) => {
        
        alert("Error al actualizar el registro: ", error);
      });
  };
}

var tab4 = document.getElementById("tab4");
db.collection("Ubicacion de modelos por cliente").orderBy('Fecha', 'desc')
.get()
.then((querySnapshot) => {
  tab4.innerHTML = "";
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    tab4.innerHTML += `
     
    <div  class="table-responsive">
    <table  class="table table-dark table-success table-hover  table-bordered">

    <tr>
    <th scope="col">${doc.data().Cliente}</th>
   
    
    <th scope="col">${doc.data().Almacen}</th>
    <th scope="col">UBICACIÓN DENTRO DEL ALMACEN</th>
    <th scope="col">FECHA DE GUARDADO</th>

   
   
   
  </tr>

<tr>

<td  scope="row">${doc.data().Nomodelo}</td>


<td>
<p>${doc.data().PDM}</p>
</td>
<td>
<p>${doc.data().Ubicacion}</p>
</td>
<td>
<p>${doc.data().Fecha}</p>
</td>



      
      </table>
      </div>

         
      `;
  });
});