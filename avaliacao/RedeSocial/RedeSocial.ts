import {IRepositorioDePerfis, RepositorioDePerfis} from "./RepositorioDePerfis";
import {IRepositorioDePostagens, RepositorioDePostagens} from "./RepositorioDePostagens";
import Perfil from "./Perfil";
import Postagem from "./Postagem";

class RedeSocial {
    private _repositorioDePostagens: IRepositorioDePostagens;
    private _repositorioDePerfis: IRepositorioDePerfis;

    constructor(repositorioDePostagens: IRepositorioDePostagens, repositorioDePerfis: IRepositorioDePerfis){
        this._repositorioDePerfis = repositorioDePerfis;
        this._repositorioDePostagens = repositorioDePostagens;
    }

    inserirPerfil(perfil: Perfil): void {
        let perfilConsultado = this._repositorioDePerfis.consultar(perfil.id, perfil.nome, perfil.email);

        if (perfilConsultado) {
            throw new Error('Perfil já cadastrado!');
        }

        this._repositorioDePerfis.inserirPerfil(perfil);
        console.log("\nPerfil adicionado com sucesso...\n")
    }

    consultarPerfil(id?: string, nome?: string, email?: string): Perfil | null{
        let perfilConsultado = this._repositorioDePerfis.consultar(id, nome, email);

        if (!perfilConsultado) {
            throw new Error('Perfil não localizado!');
        }

        return perfilConsultado;
    }

    consultarPostagem(id: string, texto: string, hashtag: string, perfil: Perfil): Postagem[] | null{
        let postagemConsultada = this._repositorioDePostagens.consultar(id, texto, hashtag, perfil);

        if (!postagemConsultada || postagemConsultada.length === 0) {
            throw new Error('Postagem não localizada!');
        }

        return postagemConsultada;
    }

    consultarPerfilPorId(id: string): Perfil | null{
        let perfilConsultado = this._repositorioDePerfis.consultarPorId(id);

        if (!perfilConsultado) {
            throw new Error('Perfil não localizado!');
        }

        return perfilConsultado;
    }

    consultarPostagemPorId(id: string): Postagem | null{
        let postagemConsultada = this._repositorioDePostagens.consultarPorId(id);

        if (!postagemConsultada) {
            throw new Error('Perfil não localizado!');
        }

        return postagemConsultada;
    }

    incluirPostagem(postagem: Postagem){
        let postagemConsultada = this._repositorioDePostagens.consultarPorId(postagem.id);
        
        if (!postagem.id || !postagem.texto || !postagem.perfil) {
            throw new Error('A postagem deve haver todos os constituintes!');
        }

        if (postagemConsultada){
            throw new Error("Postagem já cadastrada");
        }

        return this._repositorioDePostagens.inserirPostagem(postagem);
    }

    curtir(idPostagem: string){
        let postagemConsultada = this._repositorioDePostagens.consultarPorId(idPostagem);

        if (!postagemConsultada){
            throw new Error('A postagem não existe ou foi excluída')
        }

        postagemConsultada.curtir();
    }

    descurtir(idPostagem: string){
        let postagemConsultada = this._repositorioDePostagens.consultarPorId(idPostagem);

        if (!postagemConsultada){
            throw new Error('A postagem não existe ou foi excluída')
        }

        postagemConsultada.descurtir();
    }

    exibirPostagensPorPerfil(perfil: Perfil): Postagem[] | null {
        let postagensDoPerfil = this._repositorioDePostagens.consultar("undefined", "texto", "hashtag", perfil);

        if (postagensDoPerfil === null || postagensDoPerfil.length === 0) {
            throw new Error ('Não há postagens!');
        }

        return postagensDoPerfil;
    }

    exibirTodasAsPostagens(): Postagem[]{
        return this._repositorioDePostagens.todasAsPostagens();
    }

    exibirTodosOsPerfis(): Perfil[]{
        return this._repositorioDePerfis.todosOsPerfis();
    }

    removerPostagem(postagem: Postagem): void{
        return this._repositorioDePostagens.excluirPostagem(postagem);
    }
}

export default RedeSocial;