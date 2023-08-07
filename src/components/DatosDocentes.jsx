import { Link } from "react-router-dom";

export function DatosDocentes() {
  
  
  
  
  
  
  
  return (
    <>
      <form>
        <div className="flex justify-between">
          <Link to={"/alta-docente"}>
            <button className="btn btn-active bg-[#0184F5] text-white">
              alta Docente
            </button>
          </Link>

          <Link to={"/historial-docente"}>
            <button className="btn btn-active bg-[#0184F5] text-white">
              Historial Docente
            </button>
          </Link>
        </div>
      </form>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>NOMBRE APELLIDO</th>
              <th>DNI</th>
              <th>TELEFONO</th>
              <th>DIRECCION</th>
              <th>EMAIL</th>
              <th>DATOS EXTRAS</th>
              <th>EDITAR</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>JUAN CARLOS</td>
              <td>48.989.574</td>
              <td>221-357-7845</td>
              <td>18 157 158</td>
              <td>juancarlos95@gmail.com</td>
              <td>
                <select className="select  w-full max-w-xs">
                  <option disabled>
                    <span>Telofono: </span>
                    <span>221-487-4871</span>
                  </option>
                  <option disabled>
                    <span>Documentacion:</span>
                    <span>Completa</span>
                  </option>
                  <option disabled>
                    <span>Telefono Medico:</span>
                    <span>221-345-6259 </span>
                  </option>
                </select>
              </td>
              <button className="btn btn-lg bg-[#0184F5] text-white">
                EDITAR
              </button>
            </tr>
          </tbody>
        </table>
      </div>

      {/*    <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Docente 1
        </div>
        <div className="collapse-content">
        <thead>
            <tr>
              <th></th>
              <th>NOMBRE APELLIDO</th>
              <th>DNI</th>
              <th>DIRECCION</th>
              <th>TELEFONO</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tr>
              
              <td>JUAN CARLO</td>
              <td>45.648.486</td>
              <td>12 154 155</td>
              <td>2213636355</td>
              <td>juancarlos95@gmail.com</td>
              </tr>



          
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div> */}
    </>
  );
}
