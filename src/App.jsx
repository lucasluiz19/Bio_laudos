import { useState } from "react"
import { Specification } from "./components/productSpecifications"


export function App() {
  const [nameSearch, setNameSearch]= useState('')
  
  const nameProducts = [
    {
      name:"activemos",
      ph:'5,5 a 5,7',
      proteina:'10 a 15'
    },
    {
      name:"gaya",
      ph:"5 a 7",
      proteina:"50 a 60"
    }

  ]

  function handleNameProduct(event){
    const nameProduct = event.target.value
    setNameSearch(nameProduct)
  }

  function handleSearchProduct(event){
    event.preventDefault()

    const productfound = nameProducts.find((nameFind)=>{
        return nameFind.name.toLocaleLowerCase() == nameSearch.toLocaleLowerCase()
    })
      if(nameSearch == '' ){
        alert('Por favor digite um Produto !')
        
      }else if(productfound){
        console.log(productfound)
        

      }else{
        alert('produto não encontrado')
      }
      
  }
   
  

  return (
    <div className="px-5  w-screen h-screen flex flex-col items-center  justify-center">
      <div className=" flex flex-col rounded-md bg-slate-50 text-black  px-2 text-center gap-4 border w-10/12 md:max-w-3xl ">
        <span className="flex justify-center" ><a href=""><img className="w-32 md:w-36 lg:w-48 " src="https://www.biorigin.net/wp-content/uploads/2023/01/logotipobiorigin.webp" alt="" /></a></span>
        <h1 className="text-xl font-sans">Digite abaixo o nome do semi acabado</h1>

        <form  className="flex flex-col items-center gap-3 ">
          <input onChange={handleNameProduct} type="text" className="bg-transparent text-lg focus:border focus:rounded-md  focus:outline-lime-400 text-center p-4"placeholder="Digite aqui!"  />
          <button onClick={handleSearchProduct} className="bg-lime-400 hover:bg-lime-500  w-32 h-9 rounded-md mb-8 "> Buscar </button>
        </form>
      </div>  
    </div>
  )
}


