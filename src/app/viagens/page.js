import NavBar from "@/components/navbar";
import DataRow from "./DataRow";


async function getViagem(){
  const url = "http://localhost:8080/api/v1/viagem"
  const resp = await fetch(url, { next: { revalidate: 0 } });
  return await resp.json();
}

export default async function Viagens() {
  const via = await getViagem();
  const viagens = via._embedded.entityModelList
  console.log(viagens)


  return (
    <>
      <NavBar />

      <main className="bg-slate-900 mt-10 p-9 rounded max-w-xl m-auto">
        <h2 className="text-slate-100 text-2xl">viagens</h2>
        <div id="data">
          {viagens.map(viagem => <DataRow key={viagem.id} conta={viagem} />)}
        </div>
      </main>
    </>
  )
}
