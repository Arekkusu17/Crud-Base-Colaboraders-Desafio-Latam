import { useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import { BaseColaboradores } from './assets/js/baseColaboradores';
import Button from './components/button';
import Header from './components/header';
import Input from './components/input';
import Listado from './components/listado';
import ErrorBanner from './components/error';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(BaseColaboradores);


  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "") {
      setError("Rellena todos los campos!");
      return;
    } else {
      setError("")
    }

    const newColaborador = {
      id: nanoid(),
      name: name,
      email: email
    };

    setColaboradores([...colaboradores, newColaborador]);
    setColaboradoresFiltrados([...colaboradores, newColaborador]);

    setName("");
    setEmail("");
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const searchValue = e.target.value.toLowerCase();
    if (searchValue.length > 0) {
      const filterColaboradores = colaboradores.filter((colaborador) => {
        return (
          colaborador.name.toLowerCase().includes(searchValue) || colaborador.email.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setColaboradoresFiltrados(filterColaboradores);
    } else {
      setColaboradoresFiltrados(colaboradores);
    }
  };

  const handleDelete = (name) => {
    const filterColaboradores = colaboradores.filter((colaborador => colaborador.name !== name));
    setColaboradores(filterColaboradores);
    setColaboradoresFiltrados(filterColaboradores);
  }


  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <div className='container'>
        <form onSubmit={handleSubmit} className="form-group mt-4 col-12">
          {error !== "" ? <ErrorBanner message={error} /> : null}
          <div className='row p-0'>
            <Input title="Nombre del Colaborador" type="text" placeholder="Ingresa el nombre del colaborador" changeEvent={(e) => setName(e.target.value)} value={name} />
            <Input title="Correo del Colaborador" type="email" placeholder="Ingresa correo del colaborador" changeEvent={(e) => setEmail(e.target.value)} value={email} />
            <div className='text-center center col-12 col-lg-2'>
              <Button type="submit" />
            </div>
          </div>
        </form>
        <Listado title="Lista de Colaboradores" mapColaboradores={colaboradoresFiltrados} onHandleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
