import React, { useState } from 'react';
import JsCookie from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import InputCustom from '../../components/CustomInput';
import LayoutLoginRegister from '../../components/LayoutLoginRegister';
import { loginAdminRequest } from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
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

export default function LoginAdmin() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const user = await loginAdminRequest({ email: inputEmail, senha: inputPassword });
      JsCookie.set('token', user.token);
      history.push('/admin');
    } catch (error) {
      if (error.response.data.message) {
        return toast.error(error.response.data.message, CONFIG_TOAST);
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LayoutLoginRegister title="Você voltou!">
      <ToastContainer />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="mb-12">
          <p className="text-[25px] text-center">Acesso restrito</p>
          <p className="text-[25px] text-center">à administradores!</p>
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
              className="p-2 w-[300px] md:w-[336px] h-10 border border-[#5B5B5B] rounded-lg text-[#353131]"
            />
          </label>
        </div>
        <div className="mt-2">
          <label className="flex flex-col" htmlFor="password">
            Senha
            <div className="w-full flex justify-end items-center relative">
              <InputCustom
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                className="p-2 w-[300px] md:w-[336px] h-10 border border-[#5B5B5B] rounded-lg"
              />
              {showPassword ? (
                <IoEyeOutline
                  className="absolute mr-2 w-10"
                  onClick={handleClickShowPassword}
                  cursor="pointer"
                />
              ) : (
                <IoEyeOffOutline
                  className="absolute mr-2 w-10"
                  onClick={handleClickShowPassword}
                  cursor="pointer"
                />
              )}
            </div>
          </label>
        </div>
        <CustomButton
          className="mt-4 bg-[#FF7823] hover:bg-orange-500 w-[152px] h-[42px] rounded-[30px]"
          type="button"
          onClick={handleSignIn}
        >
          Entrar
        </CustomButton>
        <p className="text-texto my-4 text-[15px]">
          Ainda não possui conta?{' '}
          <Link to="/register" className="text-texto md:text-tema">
            Clique aqui
          </Link>
        </p>
        <p className="text-texto text-[15px]">
          Não sou Administrador.
          <Link to="/" className="text-texto md:text-tema">
            {' '}
            Clique aqui
          </Link>{' '}
        </p>
      </div>
    </LayoutLoginRegister>
  );
}
