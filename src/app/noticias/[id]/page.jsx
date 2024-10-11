export default function Noticia({params}){
    return(
        <>
            <h1>Estas en Noticias</h1>
            <p>{params.id}</p>
        </>
    );
}