import React, { useState } from 'react';
import JsCookie from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import InputCustom from '../../components/CustomInput';
import LayoutLoginRegister from '../../components/LayoutLoginRegister';
import { createNewUser } from '../../services/api';
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

export default function Register() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    nome: '',
    email: '',
    senha: '',
    comfirmeSenha: '',
  });

  const handleValuesImpunt = (event) => {
    const name = event.target.name;
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    if (values.senha !== values.comfirmeSenha) {
      return toast.error('A senha digitada não são iguais!', CONFIG_TOAST);
    }

    try {
      const user = await createNewUser({
        nome: values.nome,
        email: values.email,
        senha: values.senha,
      });
      console.log(user);
      JsCookie.set('token', user.token);
      history.push('/home');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, CONFIG_TOAST);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LayoutLoginRegister title="Estavamos esperando por você!">
      <ToastContainer />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="mb-12">
          <p className="text-5 md:text-[25px] md:w-[350px] text-center">
            Conecte-se de forma gratuita! Faça seu cadastro aqui.
          </p>
          {/*    */}
        </div>

        <div>
          <label className="flex flex-col" htmlFor="email">
            Nome
            <InputCustom
              type="nome"
              name="nome"
              id="nome"
              value={values.nome}
              onChange={handleValuesImpunt}
              className="p-2 w-[300px] md:w-[336px] h-10 border border-[#5B5B5B] rounded-lg text-[#353131]"
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col" htmlFor="email">
            E-mail
            <InputCustom
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleValuesImpunt}
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
                name="senha"
                id="senha"
                value={values.senha}
                onChange={handleValuesImpunt}
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
        <div>
          <label className="flex flex-col" htmlFor="passwordConfirm">
            Confirme a senha
            <div className="w-full flex justify-end items-center relative">
              <InputCustom
                type={showPassword ? 'text' : 'password'}
                name="comfirmeSenha"
                id="passwordConfirm"
                value={values.comfirmeSenha}
                onChange={handleValuesImpunt}
                className="p-2 w-[300px] md:w-[336px] h-10 border border-[#5B5B5B] rounded-lg"
              />
            </div>
          </label>
        </div>
        <CustomButton
          className="mt-4 bg-[#FF7823] hover:bg-orange-500 w-[152px] h-[42px] rounded-[30px]"
          type="button"
          onClick={handleSubmit}
        >
          Entrar
        </CustomButton>
        <p className="text-texto mt-4">
          Já possui conta?{' '}
          <Link to="/" className="text-titulo md:text-tema">
            Clique aqui
          </Link>
        </p>
      </div>
    </LayoutLoginRegister>
  );
}
