const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Programa = require("../models/programasModel");
const Curso = require("../models/programasModel");
const pool = require("../config/database");

router.use(express.json());
router.put('/atualizar-resultado/:adminId', async (req, res) => {
    try {
        const adminId = req.params.adminId;

        if (!adminId) {
            return res.status(400).json({ error: "ID do administrador inválido." });
        }

        const novosDados = req.body; // Certifique-se de enviar os dados corretos para atualização

        const programa = new Programa(null, null, null, null, adminId);

        const resultado = await programa.updateResultado(adminId, novosDados);

        res.json({ message: resultado });
    } catch (error) {
        console.error("Erro ao atualizar resultado:", error);
        res.status(500).json({ error: "Erro ao atualizar resultado." });
    }
});




router.get('/resultado/:adminId', auth.verifyAuth, async (req, res) => {
    try {
        const adminId = req.params.adminId;

        if (!adminId) {
            return res.status(400).json({ error: "ID do administrador inválido." });
        }

        const programa = new Programa(null, null, null, null, adminId);
        const resultado = await programa.resultado(adminId);

        res.json({ resultado });
    } catch (error) {
        console.error("Erro ao obter resultado:", error);
        res.status(500).json({ error: "Erro ao obter resultado." });
    }
});

router.post('/upload/:cursoId', auth.verifyAuth, async function (req, res) {
    try {
        const adminId = req.body.adminId;
        const cursoId = req.params.cursoId;
        const { prog_tipo, prog_uni, prog_pais, prog_cid } = req.body;
        if (!cursoId) {
            return res.status(400).json({ error: "ID do curso inválido." });
        }
        const cursoIdNumber = parseInt(cursoId, 10);

        if (isNaN(cursoIdNumber)) {
          return res.status(400).json({ error: "ID do curso inválido." });
        }
        
        const cursoExistente = await buscarCursoIdPorId(cursoIdNumber);
        
        if (!cursoExistente) {
          return res.status(404).json({ error: "Curso não encontrado." });
        }
        

        if (!cursoExistente) {
            return res.status(404).json({ error: "Curso não encontrado." });
        }
        const programa = new Programa(null, null, null, null, null, adminId);
        programa.cursoId = cursoId;

        const progId= await programa.upload(prog_tipo, prog_uni, prog_pais, prog_cid);
        res.status(201).json({ message: "Programa adicionada com sucesso", progId });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao fazer upload do programa." });
    }
});


router.post('/adicionar-oferta/:progId', auth.verifyAuth, async function (req, res) {
    try {
        const adminId = req.body.adminId;
        const progId = req.params.progId;
        const { of_curso, of_vaga } = req.body;
        if (!progId) {
            return res.status(400).json({ error: "ID do programa inválido." });
        }
        const programaExistente = await buscarProgramaPorId(progId);

        if (!programaExistente) {
            return res.status(404).json({ error: "Programa não encontrado." });
        }

        const programa = new Programa(null, null, null, null, adminId);
        programa.progId = progId;

        const ofId = await programa.adicionarOferta(of_curso, of_vaga);

        res.status(201).json({ message: "Oferta adicionada com sucesso", ofId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao adicionar oferta ao programa." });
    }
});

router.post('/adicionar-requisitos/:ofertaId', auth.verifyAuth, async function (req, res) {
    try {
        const adminId = req.admin.id;
        const ofertaId = req.params.ofertaId;
        const { curso_id, req_media } = req.body;

        console.log("Dados a serem recebidos:", { ofertaId, curso_id, req_media });

        const ofertaExistente = await buscarOfertaPorId(ofertaId);
     

        if (!ofertaExistente) {
            return res.status(404).json({ error: "Oferta não encontrada." });
        }

        // curso_id já é o ID do curso, então não é necessário buscar por nome
        const cursoId = await buscarCursoIdPorId(curso_id);

        const programa = new Programa(null, null, null, null, null, adminId);
        programa.ofertaId = ofertaId;
        const message = await programa.adicionarRequisitos(cursoId, req_media);

        res.status(201).json({ message });
    } catch (error) {
        console.error("Erro ao processar a solicitação:", error);
        res.status(500).json({ error: "Erro ao adicionar requisitos à oferta." });
    }
});



async function buscarCursoIdPorId(cursoId) {
    const query = 'SELECT curso_id FROM curso WHERE curso_id = $1';
    const values = [cursoId];

    try {
        const result = await pool.query(query, values);

        if (result.rows.length > 0) {
            return result.rows[0].curso_id;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar curso por ID:', error);
        throw error;
    }
}


async function buscarOfertaPorId(ofertaId) {
    const query = 'SELECT * FROM oferta WHERE of_id = $1';
    const values = [ofertaId];

    try {
        const result = await pool.query(query, values);

        if (result.rows.length > 0) {
            return result.rows[0];
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar oferta por ID:', error);
        throw error;
    }
}


async function buscarCursoIdPorNome(cursoNome) {
    const query = 'SELECT curso_id FROM curso WHERE curso_nome = $1';
    const values = [cursoNome];

    try {
        const result = await pool.query(query, values);
        console.log("Resultado da consulta para", cursoNome, ":", result.rows);

        if (result.rows.length > 0) {
            return result.rows[0].curso_id;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar curso por nome:', error);
        throw error;
    }
}








router.get('/listar-programas', async (req, res) => {
    try {
        const programas = await listarProgramas();
        res.json({ universidades: programas });
    } catch (error) {
        console.error('Erro ao obter programas:', error);
        res.status(500).json({ error: 'Erro ao obter programas' });
    }
});

async function buscarOfertaPorId(ofertaId) {

    const selectOfertaQuery = "SELECT * FROM oferta WHERE of_id = $1";
    const result = await pool.query(selectOfertaQuery, [ofertaId]);


    return result.rows[0];

}




async function listarProgramas() {
    const listarProgramasQuery = `
        SELECT
            programa.prog_id as progId,
            programa.prog_tipo as progTipo,
            programa.prog_uni as progUni,
            programa.prog_pais as progPais,
            programa.prog_cid as progCid,
            oferta.of_id as ofId,
            oferta.of_curso as ofCurso,
            oferta.of_vaga as ofVaga,
            requisitos.req_id as reqId,
            requisitos.req_curso as reqCurso,
            requisitos.req_media as reqMedia
        FROM
            programa
        JOIN oferta ON programa.prog_id = oferta.prog_id
        JOIN requisitos ON oferta.of_id = requisitos.of_id;
    `;

    try {
        const result = await pool.query(listarProgramasQuery);
        return result.rows;
    } catch (error) {
        console.error('Erro ao listar programas:', error);
        throw error;
    }
}

async function buscarProgramaPorId(programId) {
    const selectProgramQuery = "SELECT * FROM programa WHERE prog_id = $1";
    const result = await pool.query(selectProgramQuery, [programId]);
    return result.rows[0];
}

router.get('/listar-opcoes/:estId', async function (req, res) {
    try {
        const estId = req.params.estId; // Corrected to use req.params
        const userInstance = new User();
        const opcoes = await userInstance.listarOpcoes(estId);
        res.status(200).json({ opcoes });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao listar cursos do aluno." });
    }
});

module.exports = router;
