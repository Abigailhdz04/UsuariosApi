import Boton from "@/components/boton";
import axios from "axios";

async function universidadesMexico(){
    const url="http://universities.hipolabs.com/search?country=Mexico";
    const universidades= await axios.get(url);
    return universidades.data;
}

export default async function Noticias(){
    var universidades=await universidadesMexico();
    return(
        <div>
            <h1>Noticias</h1>
            <p>Estas en noticias</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Univerdidad</th>
                        <th>Sitio web</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        universidades.map((Univerdidad,i)=>(
                            <tr>
                                <td>{i+1}</td>
                                <td>{Univerdidad.name}</td>
                                <td>{Univerdidad.web_pages[0]}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            
            <Boton />
        </div>
    );
}