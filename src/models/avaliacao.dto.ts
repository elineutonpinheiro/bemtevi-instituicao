export interface AvaliacaoDTO {
    alunoId: number;
    profissionalId: number;
    data: string;
    status: string;
    cafeDaManha: string;
    lancheDaManha: string;
    almoco: string;
    lancheDaTarde: string;
    banho: number;
    fralda: number;
    escovacao: number;
    dormiu: boolean;
    estadoDoSono: string;
    febre: boolean;
    urina: string;
    evacuacao: string;
    interacao: string;
    participacao: string;
    observacao: string;
}