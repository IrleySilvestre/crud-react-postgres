import React, {useState, useEffect} from "react"
import axios from "axios"
import 'font-awesome/css/font-awesome.min.css'
import Table from "react-bootstrap/Table"
import './styles.css'
import {Button, Form} from "react-bootstrap";


const ListBancos = () => {


    const [id, setId] = useState('')
    const [icone, setIcone] = useState('')
    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [bancosList, setBancosList] = useState([])

    const submitBanco = () => {
        console.log("oi")
        axios.post("http://localhost:3001/banco/insert", {
            id: id,
            icone: icone,
            codigo: codigo,
            nome: nome
        });

        setBancosList([
            ...bancosList,
            {id, icone, codigo, nome},
        ])

    }

    useEffect(() => {
        axios.get("http://localhost:3001/").then((res) => {
            setBancosList(res.data)
        })
    }, [])


    return (


        <div className="list-bancos">
            <div className="frm-banco">
                <h1 className="title-listbancos mb-1">Cadastrar Banco </h1>
                <Form>
                    <Form.Group controlId="frmCadastrarBanco">
                        <Form.Label> ID: </Form.Label>
                        <Form.Control type="text" placeholder="Codigo do banco" required onChange={(e) => {
                            setId(e.target.value)
                        }}/>
                        <Form.Label> Codigo: </Form.Label>
                        <Form.Control type="text" placeholder="Codigo do banco" required onChange={(e) => {
                            setCodigo(e.target.value)
                        }}/>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" placeholder="Nome do Banco" required onChange={(e) => {
                            setNome(e.target.value)
                        }}/>
                        <Form.Label>Imagen:</Form.Label>
                        <Form.Control type="text" placeholder="url da logo do banco" onChange={(e) => {
                            setIcone(e.target.value)
                        }}/>
                    </Form.Group>
                    <Button  onClick={submitBanco} variant="primary">Cadastrar</Button>
                </Form>
            </div>


            <div className='title-list-banco'>
                <h1 className="title-listbancos mb-1">Lista Bancos </h1>
                <i className="btn btn-secondary fa fa-plus-circle"/>
            </div>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Codigo</th>
                    <th>Nome</th>
                    <th>Icone</th>
                    <th>Ação</th>
                </tr>
                </thead>
                <tbody>
                {bancosList.map((val) => {
                    return (
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.codigo}</td>
                            <td>{val.nome}</td>
                            <td>{val.icone}</td>
                            <td>
                                <a href='#/' className="btn btn-primary"> <i className="fa fa-pencil "/> </a>
                                <a href='#/' className="btn btn-danger ml-1"> <i className="fa fa-trash "/> </a>
                            </td>
                        </tr>

                    )
                })}


                </tbody>
            </Table>

        </div>
    )

}

export default ListBancos