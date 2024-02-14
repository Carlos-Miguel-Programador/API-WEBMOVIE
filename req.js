async function POST()
{
    fetch('http://localhost:8080/usuarios', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Nome: "Carlos Miguel",
            Senha: "#@**-/carlos",
            Data_Inscricao: Date()
        })
    })
    .then(r=>{
        return r.json()
    })
    .then(d=>{
       console.log(d);
    })
    .catch((err)=>{
        console.log('Não foi possivel cadastrar!!!\n\n\n');
        console.log('Erro:\n\n', err);
    })
}

POST();
/*async function bla() {
    await fetch('http://localhost:8080/usuarios')
    .then(r=>{
        return (r.json());
    })
    .then(d=>{
        const users = d.usuarios;
        users.map(element => {
            if(element.Nome == "Arnando Luís"){
                console.log('Usuario já existe');
                return false;
            }
        });

        console.log('Usuario não existe');
        POST();
        //return true;
        
    })
    .catch(()=>{
        console.log('Ocorreu um erro!!!');
    });
}

bla()*/

/*fetch('http://localhost:8080/usuarios', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        Nome: "Arnando Luís",
        Senha: "*123#lls%",
        Data_Inscricao: Date()
    })
})
.then(r=>{return r.json()})
.then(d=>{
    if(d.mensagem == "Usuário cadastrado com sucesso!!!")
    {
        console.log('Usuário cadastrado');
    }else{
        console.log('Usuário não cadastrado');
    }
    console.log(d);
})

/*async function bla() {
    await fetch('http://localhost:8080/usuarios')
    .then(r=>{
        return (r.json());
    })
    .then(d=>{
        const users = d.usuarios;
        users.map(element => {
            if(element.Nome == "Carlos"){
                console.log('Usuario já existe');
                return false;
            }
        });

        console.log('Naa');
        
    })
    .catch(()=>{
        console.log('Ocorreu um erro!!!');
    });
}

bla()
let count=1;
fetch(`http://localhost:8080/usuarios?pag=${count}`)
.then(r=>{return r.json()})
.then(d=>{
    for(let i=1; i<=d.paginas; i++)
    {
        fetch(`http://localhost:8080/usuarios?pag=${i}`)
        .then(r=>{
            return r.json();
        })
        .then(data=>{
            data.usuarios.map(element => {
                if(element.Nome.toLowerCase() == 'carlos'.toLowerCase() && element.Senha.toLowerCase() == senha.value.toLowerCase())
                {
                    console.log('ACHOU!!!');
                }
            });
        })
        .catch(()=>{
            console.log('BUGOU!!!');
        })       
    }

    console.log('NÃO ENCONTRADO!!!');
})
.catch((err)=>{
    console.log('Não foi possivel cadastrar!!!\n\n\n');
    console.log('Erro:\n\n', err);
})*/