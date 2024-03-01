import React, { Suspense } from 'react'
import { RoundedContainer } from '@/components/shared/auth_form/container.style';
import SignInForm from '@/components/shared/auth_form/sign_in/sign_in_form';

const SignInPage = () => {
  
  return (
    <RoundedContainer>
      <div className="bg-white text-black p-[16px] mx-[20px]">
       <Suspense fallback={<h1>Loading</h1>}>
        <SignInForm />
       </Suspense>
      </div>
    </RoundedContainer>
  );
}

export default SignInPage
