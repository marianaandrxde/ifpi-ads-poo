import * as fs from 'fs';
import * as readlineSync from 'readline-sync';
import Perfil from "./Perfil";
import Postagem from "./Postagem";
import RedeSocial from "./RedeSocial";
import PostagemAvancada from './PostagemAvancada';
import { RepositorioDePerfis } from './RepositorioDePerfis';
import { RepositorioDePostagens } from './RepositorioDePostagens';

class App {
    public _redeSocial: RedeSocial;

    constructor() {
        this._redeSocial = new RedeSocial(new RepositorioDePostagens([]), new RepositorioDePerfis([]));
        this.executarLoop();
    }


    public executarLoop() {
        let escolha: string;
    
        do {
            this.exibirOpcoes();
            escolha = readlineSync.question("\nSelecione uma opção => ").trim();
    
            switch (escolha) {
                case "1":
                    this.inserirPerfil();
                    break;
                case "2":
                    this.consultarPerfil();
                    break;
                case "3":
                    this.incluirPostagem();
                    break;
                case "4":
                    this.curtirPostagem();
                    break;
                case "5":
                    this.descurtirPostagem();
                    break;
                case "6":
                    this.exibirPostagensPorPerfil();
                    break;
                case "7":
                    this.consultarPostagem();
                    break;
                case "8":
                    this.removerPostagem();
                    break;    
                case "9":
                    this.exibirTodosOsPerfis();
                    break;                    
                case "0":
                    break; 
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
    
        } while (escolha !== "0");
    
        this.atualizarBanco();
    }
    
        private exibirOpcoes() {
            console.log("\n ------------ MariGram ----------\n");
            console.log("1. Inserir Perfil");
            console.log("2. Consultar Perfil");
            console.log("3. Incluir Postagem");
            console.log("4. Curtir Postagem");
            console.log("5. Descurtir Postagem");
            console.log("6. Exibir Postagens por Perfil");
            console.log("7. Consultar Postagem");
            console.log("8. Remover Postagem");
            console.log("9. Exibir Todos os Perfis");
            console.log("0. Sair\n");
            console.log("------------------------------------");
        }
    
    public inserirPerfil(): void {
        let id = readlineSync.question("ID: ")
        let nome = readlineSync.question("NOME: ")
        let email = readlineSync.question("EMAIL: ")
        let postagens = [];
        let perfil: Perfil = new Perfil(id, nome, email, postagens);

        return this._redeSocial.inserirPerfil(perfil);
    }
    
    public consultarPerfil() {
        console.log('\n========== DADOS DO PERFIL ===========\n')
        let idPerfil = readlineSync.question("ID: ");

        console.log('\n====== PERFIL CORRESPONDENTE EM MariGram ======\n')
        console.log(this._redeSocial.consultarPerfil(idPerfil));
    }
    
    public incluirPostagem() {
        let opcao: number = 0;
        while (opcao == 0 || opcao == undefined){
            opcao = Number(readlineSync.question("Digite 1 para Postagem\nDigite 2 para Postagem Avançada\n=> "))
        }

        console.log('\n ======= CADASTRO DE POSTAGEM =======')
        let id: string = readlineSync.question("ID: ");
        let texto: string = readlineSync.question("Legenda: ");
        let curtidas: number = 0;
        let descurtidas: number = 0;
        let data: string = readlineSync.question("Data: ");
        let perfil: Perfil | null = this._redeSocial.consultarPerfilPorId(readlineSync.question("ID do Perfil: "));

        if (perfil != null){
            if (opcao == 1){
                let postagem = new Postagem(id, texto, curtidas, descurtidas, data, perfil);
                this._redeSocial.incluirPostagem(postagem);
            } else if (opcao == 2){
                let hashtag = readlineSync.question("Hashtag: ")
                let visualizacoesRestantes = readlineSync.question("Visualizacoes restantes: ")
                let postagem = new PostagemAvancada(id, texto, curtidas, descurtidas, data, perfil, hashtag, visualizacoesRestantes)
                this._redeSocial.incluirPostagem(postagem);
            } else {
                console.log("Opção Inválida!");
            }
        } else {
            console.log("Perfil não encontrado!")
        } 
    }

    public exibirTodosOsPerfis(){
        console.log('\n =========== PERFIS MariGram ============')
        console.log(this._redeSocial.exibirTodosOsPerfis());
    }
    
    public curtirPostagem() {
        let id: string = readlineSync.question("ID da Postagem: ");

        if (id != undefined){
            this._redeSocial.curtir(id);
            console.log('Postagem curtida com sucesso...')
        } else {
            console.log('Postagem não encontrada...')
        }
    }
    
    public descurtirPostagem() {
        console.log('\n========== DADOS DA POSTAGEM ===========\n')
        let id: string = readlineSync.question("ID da Postagem: ");

        if (id != undefined){
            this._redeSocial.descurtir(id);
            console.log('Postagem descurtida com sucesso...')
        } else {
            console.log('Postagem não encontrada...')
        }
    }
    
    public exibirPostagensPorPerfil() {
        console.log('\n========== DADOS DO PERFIL ===========\n')
        let idPerfil: string = readlineSync.question("ID do Perfil: ");
        let perfil: Perfil | null = this._redeSocial.consultarPerfil(idPerfil, "nome", "email");

        console.log(`\n---- POSTAGENS DA(O) ${perfil?.nome} EM MariGram ----\n`)
        if (perfil != null){
            console.log(this._redeSocial.consultarPostagem("", "","", perfil));
        }
    }

    public removerPostagem(){
        console.log('\n========== DADOS DA POSTAGEM ===========\n')
        let idPostagem: string = readlineSync.question("ID da POstagem: ");
        let postagem: Postagem | null = this._redeSocial.consultarPostagemPorId(idPostagem);

        if (postagem != null){
            this._redeSocial.removerPostagem(postagem);
            console.log("POSTAGEM REMOVIDA COM SUCESSO... :)");
        }
    }

    public consultarPostagem() {
        console.log('\n================ DADOS DA POSTAGEM =================')
        let idPostagem = readlineSync.question("ID: ");
        console.log('\n========== POSTAGENS LOCALIZADAS EM MariGram ===========')
        console.log(this._redeSocial.consultarPostagemPorId(idPostagem));
    }

    atualizarBanco() {
        let listaPostagens = this._redeSocial.exibirTodasAsPostagens().map(postagem => {
            let postagemString = `${postagem.id};${postagem.texto};${postagem.curtidas};${postagem.descurtidas};${postagem.data};${postagem.perfil.id}`;
    
            if (postagem instanceof PostagemAvancada) {
                let hashtags = postagem.hashtags.join(',');
                let visualizacoesRestantes = postagem.visualizacoesRestantes || '';
                postagemString += `;${hashtags};${visualizacoesRestantes}`;
            }
    
            return postagemString;
        }).join('\n');
    
        let bdPostagens = require('fs');
        bdPostagens.writeFile('postagens.txt', listaPostagens, (err: NodeJS.ErrnoException | null) => {
            if (err) {
                console.log("Erro ao escrever postagens.txt");
                throw err;
            }
            console.log("postagens.txt escrito com sucesso.");
        });
    
        let listaPerfis = this._redeSocial.exibirTodosOsPerfis().map(perfil => {
            let postagensString = perfil.postagens
                ? perfil.postagens.map(postagem => postagem.id).join(',')
                : '';
    
            return `${perfil.id};${perfil.nome};${perfil.email};${postagensString}`;
        }).join('\n');
    
        let bdPerfis = require('fs');
        bdPerfis.writeFile('perfis.txt', listaPerfis, (err: NodeJS.ErrnoException | null) => {
            if (err) {
                console.log("Erro ao escrever perfis.txt");
                throw err;
            }
            console.log("perfis.txt escrito com sucesso.");
        });
    }
}   

let app= new App();
app.executarLoop();
