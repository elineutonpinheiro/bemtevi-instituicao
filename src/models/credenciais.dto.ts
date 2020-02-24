export class CredenciaisDTO {
    codigoAcesso: string;
    senha: string;

    constructor(codigoAcesso: string , senha: string) {
        this.codigoAcesso = codigoAcesso;
        this.senha = senha;
    }
}