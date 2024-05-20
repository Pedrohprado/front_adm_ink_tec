import React from 'react';
import Icon from '../components/icon';
import imagem from '../assets/teste.jpg';
import { GlobalContext } from '../global-context/globalcontext';
import { useNavigate } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';

function LoginPage() {
  const [user, setUser] = React.useState('');
  const [card, setCard] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [office, setOffice] = React.useState('');
  const [erro, setErro] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const { setLogin, setUserName } = React.useContext(GlobalContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => setErro(false), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [erro]);

  async function handleSubmit(event) {
    event.preventDefault();
    const pass = import.meta.env.VITE_BASE_PASS;

    if (user && card && office && password === pass) {
      const body = {
        user,
        card: +card,
        office,
      };

      try {
        setLoading(true);
        const url = import.meta.env.VITE_BASE_URL_LOGIN;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        const info = await response.json();

        if (response.status === 200) {
          setLogin(true);
          setUserName(user);
          navigate('/home');
        }
        if (response.status !== 200) setErro(info);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setErro(error);
      }
    } else {
      setErro('preencha todas os campos');
    }
    if (password !== pass) setErro('credênciais incorretas');
  }

  return (
    <main className=' w-screen h-screen flex p-4 bg-white fixed z-10 '>
      <section className=' w-1/2 p-4 rounded flex flex-col justify-between items-center opacity-0 translate-x-[-100px] animate-animationleft'>
        <div className='flex items-center gap-1 '>
          <Icon />
          <h3 className=' font-bold text-xl'>INK Tec</h3>
        </div>
        <form onSubmit={handleSubmit} className=' flex flex-col w-[80%] gap-5'>
          <h2 className=' font-extrabold text-4xl'>Faça seu login</h2>
          <label className='flex flex-col gap-1 rounded'>
            Nome
            <input
              type='text'
              className=' border  py-1 px-2'
              onChange={({ target }) => setUser(target.value)}
              value={user}
            />
          </label>
          <label className='flex flex-col gap-1 rounded'>
            Cartão
            <input
              type='number'
              className=' border  py-1 px-2'
              onChange={({ target }) => setCard(target.value)}
              value={card}
            />
          </label>
          <label className='flex flex-col gap-1 rounded'>
            Senha
            <input
              type='password'
              className=' border  py-1 px-2'
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
          </label>
          <label className='flex flex-col gap-1 rounded'>
            Cargo
            <select
              className=' border py-1 px-2'
              onChange={({ target }) => setOffice(target.value)}
              value={office}
            >
              <option hidden value=''>
                selecione o cargo
              </option>
              <option value='lider'>lider</option>
              <option value='supervisor'>supervisor</option>
              <option value='gerente'>gerente</option>
            </select>
          </label>

          {loading ? (
            <button
              disabled
              className=' rounded transition bg-slate-800 text-white font-medium py-2 cursor-wait'
            >
              enviar
            </button>
          ) : (
            <button className=' rounded transition bg-slate-950 text-white font-medium py-2 hover:bg-slate-700'>
              enviar
            </button>
          )}
          {erro ? (
            <div className=' shadow p-2 py-3 bg-slate-100 opacity-0 translate-y-[-20px] animate-animationleft font-medium text-yellow-600 flex items-center gap-2'>
              <FiAlertTriangle size={19} /> <p>{erro}</p>
            </div>
          ) : (
            <footer className=' text-slate-950 font-medium text-sm text-center mt-2 pacity-0 translate-y-[20px] animate-animationleft'>
              desenvolvido por Pedertractor&TractorComponents
            </footer>
          )}
        </form>
      </section>
      <section className=' w-1/2 rounded bg-slate-950 text-white flex items-center opacity-0 translate-y-[-20px] animate-animationleft'>
        <img src={imagem} alt='teste' className=' rounded w-full h-full' />
      </section>
    </main>
  );
}

export default LoginPage;
