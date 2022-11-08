import React, { useState } from 'react';
import JsCookie from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';

import InputCustom from '../../components/CustomInput';
import LayoutLoginRegister from '../../components/LayoutLoginRegister';
import { loginRequest } from '../../services/api';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';

const CONFIG_TOAST = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export default function Login() {
  const history = useHistory();
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const user = await loginRequest({ email: inputEmail, senha: inputPassword });
      JsCookie.set('token', user.token);
      history.push('/home');
    } catch (error) {
      if (error.response.data.message) {
        return toast.error(error.response.data.message, CONFIG_TOAST);
      }
    }
  };

  return (
    <LayoutLoginRegister title="Você voltou!">
      <ToastContainer />
      <>
        <div className="mb-12">
          <p className="text-[25px] text-center">Que bom vê-lo</p>
          <p className="text-[25px] text-center">novamente!</p>
        </div>

        <div>
          <label className="flex flex-col" htmlFor="email">
            E-mail
            <InputCustom
              type="email"
              name="email"
              id="email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              className="p-2 w-[336px] h-10 border border-[#5B5B5B] rounded-lg text-[#353131]"
            />
          </label>
        </div>
        <div className="mt-2">
          <label className="flex flex-col" htmlFor="password">
            Senha
            <InputCustom
              type="password"
              name="password"
              id="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="p-2 w-[336px] h-10 border border-[#5B5B5B] rounded-lg"
            />
          </label>
        </div>
        <CustomButton
          className="mt-4 bg-[#FF7823] hover:bg-orange-500 w-[152px] h-[42px] rounded-[30px]"
          type="button"
          onClick={handleSignIn}
        >
          Entrar
        </CustomButton>
      </>
    </LayoutLoginRegister>
  );
}
