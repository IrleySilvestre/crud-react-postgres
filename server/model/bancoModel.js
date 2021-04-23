const db = require('../database/db')

const insertBanco = (req, res)=>{
    const {id, icone, codigo, nome} = req.body
    db.query('INSERT INTO vnd_banco (id, icone, codigo, nome) VALUES ($1,$2,$3,$4)', [id, icone, codigo,nome], (error, results)=>{
        if (error){
            throw error
        }
        res.status(201).send('Sucesso')
    })
}


const listBanco = (req, res)=>{
    db.query('SELECT * FROM vnd_banco ORDER BY id DESC ', (error, results)=>{
        if (error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getByCod = (req, res)=>{
    const cod = req.params.cod

    db.query('SELECT * FROM vnd_banco WHERE codigo =$1 ',[cod], (error, results)=>{
        if (error){
            res.status(400).body=error
        }
        res.status(200).json(results.rows)
    })

}

module.exports = {
    listBanco,
    getByCod,
    insertBanco
}





// CREATE TABLE public.vnd_banco
// (
//     id bigint NOT NULL,
//     icone character varying(255) COLLATE pg_catalog."default",
//     codigo character varying(10) COLLATE pg_catalog."default" NOT NULL,
//     nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
//     CONSTRAINT vnd_banco_pkey PRIMARY KEY (id)

// CREATE TABLE public.vnd_cidade
// (
//     id bigint NOT NULL,
//     ddd character varying(255) COLLATE pg_catalog."default",
//     descricao character varying(255) COLLATE pg_catalog."default" NOT NULL,
//     ibge integer NOT NULL,
//     identificacao character varying(500) COLLATE pg_catalog."default",
//     estado_fk bigint NOT NULL,
//     CONSTRAINT vnd_cidade_pkey PRIMARY KEY (id),
//     CONSTRAINT fked3f063764c1ecfa FOREIGN KEY (estado_fk)
// REFERENCES public.vnd_estado (id) MATCH SIMPLE
// ON UPDATE NO ACTION
// ON DELETE NO ACTION

//CREATE TABLE public.vnd_estado
// (
//     id bigint NOT NULL,
//     caminhoicone character varying(255) COLLATE pg_catalog."default",
//     descricao character varying(255) COLLATE pg_catalog."default" NOT NULL,
//     ibge integer,
//     permite_isencao_icms boolean NOT NULL DEFAULT false,
//     sigla character varying(2) COLLATE pg_catalog."default" NOT NULL,
//     pais_fk bigint NOT NULL,
//     CONSTRAINT vnd_estado_pkey PRIMARY KEY (id),
//     CONSTRAINT fkf13ce8791635da5a FOREIGN KEY (pais_fk)
//         REFERENCES public.vnd_pais (id) MATCH SIMPLE
//         ON UPDATE NO ACTION
//         ON DELETE NO ACTION
// )
//
// TABLESPACE pg_default;