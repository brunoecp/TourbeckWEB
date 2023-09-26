import NavBar from "@/components/navbar";
import DataRow from "./DataRow";


async function getViagem(){
  const url = "http://localhost:8080/api/v1/viagem"
  const resp = await fetch(url, { next: { revalidate: 0 } });
  return await resp.json();
}
function insert(itemNovo, lista){
  lista.push(itemNovo)
  return lista
}
export default async function Viagens() {
  /*
  const via = await getViagem();
  const viagens = via._embedded.entityModelList
  console.log(viagens)
  */
  const viagens = [{"id":1,"destino":"florianopolis", "agencia": "avianca", "ida":"29/09/2023", "volta": "02/10/2023"}, {"id":2,"destino":"florianopolis", "agencia": "avianca", "ida":"29/09/2023", "volta": "02/10/2023"}]

  return (
    <>
      <NavBar />

      <main className="bg-slate-900 mt-10 p-9 rounded max-w-xl m-auto">
        <h2 className="text-slate-100 text-2xl">viagens</h2>
        <div id="data">
          {viagens.map(viagem => <DataRow key={viagem.id} viagem={viagem} />)}
        </div>
      </main>
    </>
  )
}
