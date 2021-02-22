export interface Dono {
    id?: number,
    idUser: number,
    nome: string,
    dtNascimento: string,
    rg: string
}

export interface CuidadorFisico {
    id?: number,
    idUser: number,
    nome: string,
    dtNascimento: string,
    rg: string
}

export interface CuidadorJuridico {
    id?: number,
    idUser: number,
    razaoSocial: string,
    responsavel: string
}

export interface Contato {
    id?: number,
    idEmpresa?: number,
    idCaregiver?: number,
    idDono?: number,
    telefone: string
}

export interface Endereco {
    id?: number,
    idEmpresa?: number,
    idCaregiver?: number,
    idDono?: number,
    cep: string,
    rua: string,
    numero: number,
    referencia: string,
    complemento?: string,
    bairro: string,
    cidade: string,
    uf: string
}
