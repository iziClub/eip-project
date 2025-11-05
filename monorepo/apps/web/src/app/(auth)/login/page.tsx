'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import  TextInput  from '@/components/ui/TextInput'
import PasswordInput from '@/components/ui/PasswordInput';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fields = [
      { value: email, label: "Email", setError: setEmailError },
      { value: password, label: "mot de passe", setError: setPasswordError },
    ];

    const missingFields = fields
      .filter(({ value, setError }) => {
        const isMissing = !value.trim();
        setError(isMissing);
        return isMissing;
      })
      .map(({ label }) => label);

    if (missingFields.length > 0) {
      const errorMessage =
        missingFields.length === 1
          ? `${missingFields[0].charAt(0).toUpperCase() + missingFields[0].slice(1)} requis`
          : `${missingFields.join(" et ")} requis`;

      toast.error(errorMessage);
      return;
    }

    console.log(email, password);
    // setError('');
    // try {
    //   await login(email, password);
    // } catch (err) {
    //   setError('Invalid credentials');
    // }
  };

  return (
    <div className="min-h-screen bg-white grid-layout">
        <div className="col-span-7 bg-grey-3"></div>
        <div className="col-span-5 bg-white flex flex-col justify-between grid-gap grid-container pb-10">
          <div className="flex flex-col">
            <div className="mt-[110px] col-span-5 text-black h-fit">
              <h1 className="font-primary text-2xl font-semibold text-black">Content de vous revoir</h1>
              <h2 className="font-primary text-base">Connectez vous pour gérer votre clubs, vos événements et vos membres en toute simplicité.</h2>
            </div>
            <div className="col-span-5 grid grid-cols-5 grid-gap mt-[60px]">
              <TextInput
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(false); // retire l’erreur en retapant
                }}
                id='email'
                className='col-span-4'
                label='Email'
                placeholder='Entre ton adresse email'
                required={true}
                error={emailError}
              />
              <PasswordInput
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError(false);
                }}
                className='col-span-4'
                label='Mot de passe'
                placeholder='Votre mot de passe'
                showForgotPassword={true}
                required={true}
                error={passwordError}
              />
              <Button onClick={handleSubmit} className='col-span-2 col-start-4' size='lg'>Connectez-vous</Button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="h-px w-full bg-grey-3"></div>
              <span className='text-grey-3 text-xs'>Ou</span>
              <div className="h-px w-full bg-grey-3"></div>
            </div>
            <div className="w-full flex justify-center">
              <Button variant='grey' className='px-10 gap-4'>
                <svg width="24px" height="24px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                <span>Se connecter avec Google</span>
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}