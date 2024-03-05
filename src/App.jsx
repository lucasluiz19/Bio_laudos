import { useState } from "react";
import { DATA } from "./constanst";

export function App() {
  const [productSelected, setProductSelected] = useState(null);

  const handleSelectProduct = (productId) => {
    const [product] = DATA.filter((item) => item.id === Number(productId));

    setProductSelected(product);
  };

  return (
    <div className="px-5  w-screen h-screen flex flex-col items-center   justify-center">
      <div className=" flex flex-col items-center rounded-md bg-slate-50 text-black text-center gap-4 w-10/12 md:max-w-3xl p-6 ">
        <span className="flex justify-center">
          <img
            className="w-32 md:w-36 lg:w-48 "
            src="https://www.biorigin.net/wp-content/uploads/2023/01/logotipobiorigin.webp"
            alt=""
          />
        </span>
        <h1 className="text-base md:text-xl font-sans">
          Selecione abaixo o nome do semi acabado
        </h1>

        <select
          name="select-option"
          onChange={(e) => handleSelectProduct(e.target.value)}
          className="w-36 text-center p-3	 outline-none  bg-lime-300  "
        >
          <option value="" hidden >
            Selecione
          </option>
          {DATA.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        {!!productSelected && (
          <div className="flex flex-col ">
            <p>Resultados</p>

            <div>
              <strong>Nome: </strong>
              <span>{productSelected.name}</span>
            </div>

            <div>
              <strong>ph: </strong>
              <span>{productSelected.ph}</span>
            </div>

            <div>
              <strong>proteina: </strong>
              <span>{productSelected.proteina}</span>
            </div>

            <div>
              <strong>Nacl: </strong>
              <span>{productSelected.NaCL}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
